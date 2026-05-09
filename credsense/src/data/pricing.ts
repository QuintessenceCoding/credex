import { ToolPricing } from '../types';

/**
 * Updated Pricing Data as of May 2026
 * Note: GitHub Copilot is transitioning to AI Credits on June 1, 2026.
 * Many enterprise tiers now use base seat fees + token consumption.
 */
export const PRICING_DATA: ToolPricing[] = [
  {
    toolId: 'cursor',
    vendorName: 'Cursor',
    plans: [
      { name: 'Hobby', priceMonthly: 0, features: ['2000-completions', 'limited-agent'] },
      { name: 'Pro', priceMonthly: 20, features: ['unlimited-tab-completions', 'frontier-models'] },
      { name: 'Pro+', priceMonthly: 60, features: ['3x-frontier-usage', 'priority-agents'] },
      { name: 'Ultra', priceMonthly: 200, features: ['20x-frontier-usage', 'max-context-window'] },
      { name: 'Business', priceMonthly: 40, features: ['centralized-billing', 'org-privacy-mode', 'saml-sso'] }
    ]
  },
  {
    toolId: 'github-copilot',
    vendorName: 'GitHub Copilot',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['limited-chat', 'claude-3.5-sonnet-access'] },
      { name: 'Pro', priceMonthly: 10, features: ['\$10-ai-credits', 'unlimited-completions'] },
      { name: 'Pro+', priceMonthly: 39, features: ['\$39-ai-credits', 'github-sparks', 'agent-mode'] },
      { name: 'Business', priceMonthly: 19, features: ['organization-management', 'ip-indemnity'] },
      { name: 'Enterprise', priceMonthly: 39, features: ['custom-models', 'advanced-security-audits'] }
    ]
  },
  {
    toolId: 'claude',
    vendorName: 'Anthropic Claude',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['claude-4-haiku'] },
      { name: 'Pro', priceMonthly: 20, features: ['claude-4-sonnet', 'claude-code-access'] },
      { name: 'Max', priceMonthly: 100, features: ['5x-pro-usage', 'claude-4-opus-unrestricted'] },
      { name: 'Team', priceMonthly: 30, features: ['central-billing', 'shared-projects'] },
      { name: 'Enterprise', priceMonthly: 20, features: ['usage-based-billing', 'sso-scim', 'admin-controls'] } // Base seat fee
    ]
  },
  {
    toolId: 'chatgpt',
    vendorName: 'OpenAI ChatGPT',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['gpt-5.3-limited', 'ad-supported'] },
      { name: 'Go', priceMonthly: 8, features: ['higher-gpt-5.3-limits', 'ad-supported'] },
      { name: 'Plus', priceMonthly: 20, features: ['gpt-5.4-access', 'codex-agent', 'deep-research'] },
      { name: 'Pro', priceMonthly: 200, features: ['gpt-5.4-pro', '20x-plus-usage', 'priority-compute'] },
      { name: 'Business', priceMonthly: 25, features: ['workspace-controls', 'no-training-on-data'] }, // \$20 on annual
      { name: 'Enterprise', priceMonthly: 45, features: ['unlimited-speed', 'privately-hosted-instances'] } // Typically starts at \$40-60
    ]
  },
  {
    toolId: 'gemini',
    vendorName: 'Google Gemini',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['gemini-2-flash'] },
      { name: 'Advanced', priceMonthly: 20, features: ['gemini-2.5-pro', '2tb-google-one-storage'] },
      { name: 'Business', priceMonthly: 24, features: ['enterprise-grade-security', 'meet-summaries'] }
    ]
  },
  {
    toolId: 'windsurf',
    vendorName: 'Windsurf',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['basic-agent-flow'] },
      { name: 'Pro', priceMonthly: 20, features: ['premium-agent-mode', 'unlimited-context'] },
      { name: 'Business', priceMonthly: 50, features: ['team-collaboration', 'centralized-billing'] }
    ]
  }
];
