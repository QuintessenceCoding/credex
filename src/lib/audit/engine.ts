import { AuditProfile, AuditRecommendation, AuditResult, UserToolInput } from '@/types';
// import { PRICING_DATA } from '@/data/pricing'; // We will use this for more complex lookups later

export function runAudit(profile: AuditProfile): AuditResult {
  const recommendations: AuditRecommendation[] = [];
  let totalMonthlySavings = 0;

  profile.tools.forEach((userTool) => {
    const recommendation = evaluateTool(userTool, profile);
    recommendations.push(recommendation);
    totalMonthlySavings += recommendation.monthlySavings;
  });

  return {
    totalMonthlySavings,
    totalAnnualSavings: totalMonthlySavings * 12,
    recommendations,
  };
}

function evaluateTool(tool: UserToolInput, profile: AuditProfile): AuditRecommendation {
  // Baseline fallback: Assume they are optimized unless a rule catches them
  let rec: AuditRecommendation = {
    toolId: tool.toolId,
    currentSpend: tool.monthlySpend,
    category: 'OPTIMIZED',
    confidence: 'HIGH',
    monthlySavings: 0,
    annualSavings: 0,
    reasoning: 'Your current plan aligns perfectly with your team size and estimated usage.',
  };

  const isSoloUser = profile.teamSize === 1 || tool.seats === 1;
  const spendPerSeat = tool.monthlySpend / tool.seats;

  // RULE 1: Solo developers paying for Team/Business collaboration features
  if (isSoloUser && (tool.planName.toLowerCase().includes('team') || tool.planName.toLowerCase().includes('business'))) {
    const targetPrice = 20; // Standard Pro tier baseline
    const savings = tool.monthlySpend - targetPrice;
    
    return {
      ...rec,
      category: 'DOWNGRADE',
      confidence: 'HIGH',
      targetPlan: 'Pro / Plus',
      monthlySavings: savings,
      annualSavings: savings * 12,
      reasoning: `As a solo user, you are paying a premium for organization/collaboration features. Downgrading to a standard Pro tier saves money while retaining the exact same frontier models.`,
    };
  }

  // RULE 2: Over-provisioned "Ultra" or "Pro+" agentic tiers for standard use cases
  // Catches users paying $200/seat when they don't need maximum context windows
  if (spendPerSeat >= 200 && profile.primaryUseCase !== 'data') {
    const targetPricePerSeat = 20; // Recommending standard Pro tier
    const optimizedMonthlySpend = targetPricePerSeat * tool.seats;
    const savings = tool.monthlySpend - optimizedMonthlySpend;

    return {
      ...rec,
      category: 'DOWNGRADE',
      confidence: 'MEDIUM', // Medium because some hardcore coders might genuinely need it
      targetPlan: 'Standard Pro',
      monthlySavings: savings,
      annualSavings: savings * 12,
      reasoning: `The $200+ agentic tiers are designed for high-frequency, unrestricted API-level context. For a primary use case of '${profile.primaryUseCase}', the standard $20/seat tier provides more than enough capacity for your team.`,
    };
  }

  // TODO: Add Rule 3 for overlapping tools (e.g., paying for both Cursor and Copilot)

  return rec;
}