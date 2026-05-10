import { PlanFeature } from "./types/planFeature";

export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export interface Plan {
  name: string;
  pricePerSeat: number | null;
  addedFeatures: PlanFeature[];
  note?: string;
}

export interface Tool {
  id: string;
  name: string;
  vendor: string;
  color: string;
  plans: Plan[];
  builtFor: UseCase[];
}

export const Tools: Tool[] = [
  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    color: "#1a1a2e",
    builtFor: ["coding"],
    plans: [
      {
        name: "Hobby",
        pricePerSeat: 0,
        addedFeatures: [],
        note: "Limited completions and agent requests. Good for evaluation only.",
      },
      {
        name: "Pro",
        pricePerSeat: 20,
        addedFeatures: [
          "usage_credits",
          "multi_model_access",
          "autonomous_agent",
        ],
        note: "$20 credit pool. Auto mode switches between Claude, GPT-4o, Gemini.",
      },
      {
        name: "Pro+",
        pricePerSeat: 60,
        addedFeatures: ["usage_credits_3x"],
        note: "3× credit pool vs Pro ($60 vs $20). For developers hitting Pro limits daily.",
      },
      {
        name: "Ultra",
        pricePerSeat: 200,
        addedFeatures: ["usage_credits_20x", "priority_access"],
        note: "20× credit pool vs Pro ($200 vs $20) + priority access. For agents running all day on large codebases.",
      },
      {
        name: "Teams",
        pricePerSeat: 40,
        addedFeatures: [
          "centralised_billing",
          "admin_dashboard",
          "shared_workspace",
          "data_privacy",
          "rbac",
          "saml_sso",
        ],
        note: "Pro AI per seat + SSO + RBAC + privacy controls. Full team security included.",
      },
      {
        name: "Enterprise",
        pricePerSeat: null,
        addedFeatures: [
          "pooled_usage",
          "identity_management",
          "audit_logs",
          "priority_support",
          "usage_policies",
        ],
        note: "Custom pricing. Pooled usage + SCIM + audit logs + model controls.",
      },
    ],
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    vendor: "GitHub / Microsoft",
    color: "#24292f",
    builtFor: ["coding"],
    plans: [
      {
        name: "Free",
        pricePerSeat: 0,
        addedFeatures: ["usage_credits", "multi_model_access", "cli_tool"],
        note: "50 premium requests + 2,000 completions/month. Multi-model + CLI included.",
      },
      {
        name: "Pro",
        pricePerSeat: 10,
        addedFeatures: [
          "autonomous_agent",
          "code_review",
          "usage_credits_5x",
          "multi_model_access",
        ],
        note: "300 premium requests + unlimited completions + cloud agent + multi-model.",
      },
      {
        name: "Pro+",
        pricePerSeat: 39,
        addedFeatures: ["advanced_models", "usage_credits_5x"],
        note: "All models (Claude Opus 4.7, etc.) + 1,500 premium requests (5× Pro). Individual only.",
      },
      {
        name: "Business",
        pricePerSeat: 19,
        addedFeatures: [
          "data_privacy",
          "centralised_billing",
          "admin_dashboard",
        ],
        note: "Pro-equivalent AI + org governance (admin, billing, IP indemnity). 300 premium requests/seat.",
      },
      {
        name: "Enterprise",
        pricePerSeat: 39,
        addedFeatures: ["advanced_models", "usage_credits_3x"],
        note: "All models (Claude Opus 4.6) + ~1,000 premium requests (3.33× Business) + GitHub Spark.",
      },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    color: "#D97757",
    builtFor: ["coding", "writing", "data", "research", "mixed"],
    plans: [
      {
        name: "Free",
        pricePerSeat: 0,
        addedFeatures: [
          "workspace_integration",
          "extended_thinking",
          "web_search",
        ],
        note: "Extended thinking + web search + Slack/Workspace integration included free.",
      },
      {
        name: "Pro",
        pricePerSeat: 17,
        addedFeatures: [
          "usage_credits",
          "autonomous_agent",
          "deep_research",
          "persistent_memory",
        ],
        note: "$17/mo. Adds Claude Code, Cowork, deep research, and persistent memory.",
      },
      {
        name: "Max",
        pricePerSeat: 100,
        addedFeatures: ["priority_access", "higher_message_limit"],
        note: "20× more messages than Pro ($100 vs $17). Only if hitting Pro's cap daily.",
      },
      {
        name: "Team (Standard)",
        pricePerSeat: 20,
        addedFeatures: [
          "extended_context_window",
          "shared_workspace",
          "centralised_billing",
          "admin_dashboard",
          "saml_sso",
          "data_privacy",
          "enterprise_search",
        ],
        note: "$20/seat. 200K context + SSO + org admin. $3/seat more than individual Pro.",
      },
      {
        name: "Team (Premium)",
        pricePerSeat: 100,
        addedFeatures: ["higher_message_limit"],
        note: ". 5× more usage than Standard seat. For heavy team users.",
      },
      {
        name: "Enterprise",
        pricePerSeat: 20,
        addedFeatures: [
          "extended_context_window",
          "pooled_usage",
          "spend_controls",
          "rbac",
          "identity_management",
          "audit_logs",
          "network_controls",
          "fine_tuned_models",
          "data_retention_controls",
        ],
        note: "$20/seat + pay-as-you-go API usage. 500K context, pooled usage, full compliance suite.",
      },
    ],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    color: "#10a37f",
    builtFor: ["writing", "data", "research", "mixed"],
    plans: [
      {
        name: "Free",
        pricePerSeat: 0,
        addedFeatures: [
          "extended_thinking",
          "deep_research",
          "web_search",
          "cli_tool",
        ],
        note: "Limited access to GPT-5.5 Instant, deep research, codex and other features.",
      },
      {
        name: "Go",
        pricePerSeat: 8,
        addedFeatures: ["usage_credits", "persistent_memory"],
        note: "$8/mo. More messages + longer memory. More access than free tier. Entry-level paid plan",
      },
      {
        name: "Plus",
        pricePerSeat: 20,
        addedFeatures: [
          "advanced_models",
          "deep_research",
          "autonomous_agent",
          "workspace_integration",
        ],
        note: "GPT-5.5 Thinking + deep research + agent mode. Standard plan.",
      },
      {
        name: "Pro",
        pricePerSeat: 100,
        addedFeatures: ["higher_message_limit", "priority_access"],
        note: "5–20× more usage + priority access. Only if hitting Plus cap.",
      },
      {
        name: "Business",
        pricePerSeat: 20,
        addedFeatures: [
          "shared_workspace",
          "data_privacy",
          "saml_sso",
          "centralised_billing",
          "workspace_integration",
        ],
        note: "$20/seat.  Team + SSO + 60+ app integrations. Same price as Plus.",
      },
      {
        name: "Enterprise",
        pricePerSeat: null,
        addedFeatures: [
          "extended_context_window",
          "rbac",
          "identity_management",
          "audit_logs",
          "data_retention_controls",
          "network_controls",
          "priority_access",
          "spend_controls",
          "priority_support",
        ],
        note: "Custom pricing. Full compliance suite + extended context + 24/7 support.",
      },
    ],
  },

  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    color: "#4285F4",
    builtFor: ["writing", "data", "research", "mixed"],
    plans: [
      {
        name: "Free",
        pricePerSeat: 0,
        addedFeatures: ["extended_thinking", "deep_research", "web_search"],
        note: "Gemini 3 Flash + limited Pro access + basic deep research.",
      },
      {
        name: "Google AI Plus",
        pricePerSeat: 4.99,
        addedFeatures: ["usage_credits", "workspace_integration"],
        note: "$4.99/mo. Enhanced model access + Gemini in Google Workspace apps.",
      },
      {
        name: "Google AI Pro",
        pricePerSeat: 19.99,
        addedFeatures: [
          "advanced_models",
          "deep_research",
          "autonomous_agent",
          "cli_tool",
          "code_review",
        ],
        note: "$19.99/mo. Pro model + deep research + Gemini Code Assist + Gemini CLI ",
      },
      {
        name: "Google AI Ultra",
        pricePerSeat: 249.99,
        addedFeatures: [
          "higher_message_limit",
          "advanced_models",
          "priority_access",
        ],
        note: "$249.99/mo. Highest limits + Gemini Ultra + Deep Think + YouTube Premium Individual Plan.",
      },
    ],
  },
  {
    id: "windsurf",
    name: "Windsurf",
    vendor: "Codeium",
    color: "#7C3AED",
    builtFor: ["coding"],
    plans: [
      {
        name: "Free",
        pricePerSeat: 0,
        addedFeatures: [],
        note: "Light quota. Tab autocomplete unlimited. Evaluation only.",
      },
      {
        name: "Pro",
        pricePerSeat: 20,
        addedFeatures: [
          "usage_credits",
          "autonomous_agent",
          "multi_model_access",
        ],
        note: "Full model access + Devin Cloud agent sessions.",
      },
      {
        name: "Max",
        pricePerSeat: 200,
        addedFeatures: ["usage_credits_20x"],
        note: "20× usage quota vs Pro. For all-day agent development.",
      },
      {
        name: "Teams",
        pricePerSeat: 40,
        addedFeatures: [
          "priority_support",
          "centralised_billing",
          "codebase_indexing",
          "admin_dashboard",
          "data_retention_controls",
        ],
        note: "Pro AI per seat + admin + priority support. SSO is +$10/seat add-on.",
      },
      {
        name: "Enterprise",
        pricePerSeat: null,
        addedFeatures: [
          "saml_sso",
          "rbac",
          "identity_management",
          "priority_support",
          "usage_credits_3x",
        ],
        note: "Custom pricing. SSO + RBAC included. Dedicated account management.",
      },
    ],
  },
  // {
  //   id: "anthropic_api",
  //   name: "Anthropic API",
  //   vendor: "Anthropic",
  //   color: "#D97757",
  //   plans: ["Pay-as-you-go", "Committed use"],
  //   builtFor: ["coding", "data", "research", "mixed"],
  // },
  // {
  //   id: "openai_api",
  //   name: "OpenAI API",
  //   vendor: "OpenAI",
  //   color: "#10a37f",
  //   plans: ["Pay-as-you-go", "Committed use"],
  //   builtFor: ["coding", "data", "research", "mixed"],
  // },2
];
