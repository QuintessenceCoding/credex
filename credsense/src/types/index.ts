export type PricingModel = 'SEAT' | 'USAGE' | 'FLAT';
export type AuditCategory = 'DOWNGRADE' | 'CONSOLIDATE' | 'SWITCH' | 'CREDITS' | 'OPTIMIZED';
export type ConfidenceLevel = 'LOW' | 'MEDIUM' | 'HIGH';
export type UseCase = 'coding' | 'writing' | 'data' | 'research' | 'mixed';

export interface ToolPlan {
  name: string;
  priceMonthly: number; // Base price or estimated average for usage
  pricingModel: PricingModel;
  features: string[];
}

export interface ToolPricing {
  toolId: string;
  vendorName: string;
  plans: ToolPlan[];
}

export interface UserToolInput {
  toolId: string;
  planName: string;
  monthlySpend: number;
  seats: number;
}

export interface AuditProfile {
  teamSize: number;
  primaryUseCase: UseCase;
  tools: UserToolInput[];
}

export interface AuditRecommendation {
  toolId: string;
  currentSpend: number;
  category: AuditCategory;
  confidence: ConfidenceLevel;
  targetPlan?: string; // If keeping same tool but downgrading
  targetTool?: string; // If switching tools
  monthlySavings: number;
  annualSavings: number;
  reasoning: string;
}

export interface AuditResult {
  totalMonthlySavings: number;
  totalAnnualSavings: number;
  recommendations: AuditRecommendation[];
}