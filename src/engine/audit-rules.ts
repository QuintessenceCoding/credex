import { VendorPricing } from "../data/pricing";

export type AuditResult = {
  vendorId: string;
  recommendation: string;
  savingsEstimate: number;
};

export function runAudit(monthlySpend: number): AuditResult[] {
  return [];
}
