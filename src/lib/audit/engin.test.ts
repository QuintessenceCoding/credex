import { expect, test, describe } from 'vitest';
import { runAudit } from './engine';
import { AuditProfile } from '@/types';

describe('AI Spend Audit Engine', () => {
  
  test('Test 1: Returns OPTIMIZED for a single developer on a standard Pro plan', () => {
    const profile: AuditProfile = {
      teamSize: 1,
      primaryUseCase: 'coding',
      tools: [{ toolId: 'cursor', planName: 'Pro', monthlySpend: 20, seats: 1 }],
    };

    const result = runAudit(profile);
    expect(result.totalMonthlySavings).toBe(0);
    expect(result.recommendations[0].category).toBe('OPTIMIZED');
  });

  test('Test 2: Recommends DOWNGRADE when a solo user is paying for a Team plan', () => {
    const profile: AuditProfile = {
      teamSize: 1,
      primaryUseCase: 'mixed',
      // Paying $30 for Claude Team when they are a team of 1
      tools: [{ toolId: 'claude', planName: 'Team', monthlySpend: 30, seats: 1 }],
    };

    const result = runAudit(profile);
    // Should recommend Claude Pro at $20 instead
    expect(result.recommendations[0].category).toBe('DOWNGRADE');
    expect(result.recommendations[0].monthlySavings).toBeGreaterThan(0);
  });

  test('Test 3: Identifies massive Downgrade opportunity for over-provisioned Agentic tiers', () => {
    const profile: AuditProfile = {
      teamSize: 1,
      primaryUseCase: 'writing',
      // Paying $200 for ChatGPT Pro, but primary use case is just writing
      tools: [{ toolId: 'chatgpt', planName: 'Pro', monthlySpend: 200, seats: 1 }],
    };

    const result = runAudit(profile);
    // Should recommend ChatGPT Plus at $20
    expect(result.recommendations[0].category).toBe('DOWNGRADE');
    expect(result.recommendations[0].monthlySavings).toBe(180);
  });

  test('Test 4: Recommends DOWNGRADE for Cursor Ultra if team size is small and use case is basic', () => {
    const profile: AuditProfile = {
      teamSize: 2,
      primaryUseCase: 'coding',
      // Paying $200/seat for Cursor Ultra = $400 total
      tools: [{ toolId: 'cursor', planName: 'Ultra', monthlySpend: 400, seats: 2 }],
    };

    const result = runAudit(profile);
    expect(result.recommendations[0].category).toBe('DOWNGRADE');
    expect(result.totalMonthlySavings).toBeGreaterThan(0);
  });

  test('Test 5: Accurately calculates total Annual Savings based on aggregate monthly savings', () => {
    const profile: AuditProfile = {
      teamSize: 1,
      primaryUseCase: 'mixed',
      tools: [
        { toolId: 'chatgpt', planName: 'Pro', monthlySpend: 200, seats: 1 }, // $180 savings
        { toolId: 'claude', planName: 'Team', monthlySpend: 30, seats: 1 }   // $10 savings
      ],
    };

    const result = runAudit(profile);
    expect(result.totalMonthlySavings).toBe(190);
    expect(result.totalAnnualSavings).toBe(190 * 12); // $2280
  });

});