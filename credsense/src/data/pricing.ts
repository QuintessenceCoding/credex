import { ToolPricing } from '../types';

export const PRICING_DATA: ToolPricing[] = [
  {
    toolId: 'cursor',
    vendorName: 'Cursor',
    plans: [
      { name: 'Hobby', priceMonthly: 0, features: ['basic-completions'] },
      { name: 'Pro', priceMonthly: 20, features: ['premium-models', 'unlimited-completions'] },
      { name: 'Business', priceMonthly: 40, features: ['centralized-billing', 'privacy-mode'] }
    ]
  },
  {
    toolId: 'github-copilot',
    vendorName: 'GitHub Copilot',
    plans: [
      { name: 'Individual', priceMonthly: 10, features: ['code-completions', 'chat'] },
      { name: 'Business', priceMonthly: 19, features: ['ip-indemnity', 'organization-management'] },
      { name: 'Enterprise', priceMonthly: 39, features: ['custom-models', 'fine-tuning'] }
    ]
  },
  {
    toolId: 'claude',
    vendorName: 'Anthropic Claude',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['claude-3-sonnet'] },
      { name: 'Pro', priceMonthly: 20, features: ['claude-3-opus', 'priority-access'] },
      { name: 'Team', priceMonthly: 30, features: ['central-billing', 'higher-limits'] }
    ]
  },
  {
    toolId: 'chatgpt',
    vendorName: 'OpenAI ChatGPT',
    plans: [
      { name: 'Plus', priceMonthly: 20, features: ['gpt-4o', 'dalle'] },
      { name: 'Team', priceMonthly: 30, features: ['workspace', 'no-data-training'] },
      { name: 'Enterprise', priceMonthly: 60, features: ['sso', 'unlimited-speed'] } // Estimated for math purposes
    ]
  },
  {
    toolId: 'gemini',
    vendorName: 'Google Gemini',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['gemini-flash'] },
      { name: 'Advanced', priceMonthly: 20, features: ['gemini-ultra', 'google-one'] }
    ]
  },
  {
    toolId: 'windsurf',
    vendorName: 'Windsurf',
    plans: [
      { name: 'Free', priceMonthly: 0, features: ['basic-agent'] },
      { name: 'Pro', priceMonthly: 20, features: ['premium-agent', 'unlimited-context'] }
    ]
  }
];