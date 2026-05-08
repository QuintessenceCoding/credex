export interface ToolPlan {
  name: string;
  priceMonthly: number;
  priceAnnual?: number;
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
  primaryUseCase: "coding" | "writing" | "data" | "research" | "mixed";
  tools: UserToolInput[];
}

export interface AuditRecommendation {
  toolId: string;
  currentSpend: number;
  recommendedAction: "DOWNGRADE" | "SWITCH" | "CREDITS" | "OPTIMIZED";
  targetTool?: string;
  monthlySavings: number;
  reasoning: string;
}
