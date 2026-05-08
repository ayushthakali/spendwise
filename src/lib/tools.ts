export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export type PlanFeature =
  // ── 1. Individual-level features ──────────────────────────────────────────
  | "usage_credits" // plan introduces a credit pool vs the free/unlimited tier below i.e. Higher usage limits
  | "usage_credits_3x" // 3× the usage credits vs the plan below
  | "usage_credits_5x" // 5× the usage credits vs the plan below
  | "usage_credits_20x" // 20× the usage credits vs the plan below
  | "higher_message_limit" // more daily messages than the plan below
  | "advanced_models" // access to more powerful models not in the tier below
  | "multi_model_access" // access to multiple AI providers/models from one interface
  | "copilot_cli" // AI-powered terminal/shell assistant — requires CLI usage workflow
  | "cloud_agent" // cloud-hosted AI agent that runs tasks autonomously without IDE
  | "code_review" // AI suggestions integrated into pull request / code review workflow
  | "extended_thinking" // reasoning mode for complex multi-step problems
  | "deep_research" //multi-step autonomous research across many sources
  | "persistent_memory" //AI remembers context and preferences across sessions
  | "priority_access" //queue priority during high traffic
  | "extended_context_window" //significantly larger context window than standard tier

  // ── 2. Team collaboration features ────────────────────────────────────────
  | "shared_workspace" // shared conversation history across teammates
  | "codebase_indexing" // shared team knowledge / codebase indexing for AI context

  // ── 3. Org infrastructure features ───────────────────────────────────────
  | "centralised_billing" // single invoice for the whole team
  | "admin_dashboard" // usage analytics and reporting panel
  | "team_admin" // manage member access, onboard/offboard users
  | "usage_policies" // restrict which models/features the org can use
  | "privacy_mode" // org-wide toggle: code never stored by model providers
  | "data_privacy" // conversations not used for model training

  // ── 4. Compliance/security features ──────────────────────────────────────
  | "saml_sso" // SAML/OIDC SSO — requires Okta, Azure AD, or Google Workspace IDP
  | "rbac" // role-based access control — requires defined roles + active admin
  | "audit_logs" // compliance audit trail — requires a security team to review
  | "ip_indemnity" // IP indemnity cover — requires legal to have flagged AI IP risk
  | "file_exclusion" // exclude specific files from AI access — requires admin config

  // ── 5. Enterprise-scale features ─────────────────────────────────────────
  | "pooled_usage" //usage quota shared across org rather than per-seat caps
  | "enterprise_search" //org-wide AI-powered search across documents and tools
  | "priority_support" // faster SLA-backed support response times for paid/org customers
  | "identity_management" // SCIM, directory sync, automated user provisioning/deprovisioning
  | "fine_tuned_models" // AI trained on your private codebase
  | "pr_integration" // AI integrated into pull requests and issues
  | "workspace_integration"; // AI embedded in Gmail, Docs, Sheets, Meet

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
        addedFeatures: ["usage_credits", "multi_model_access", "cloud_agent"],
        note: "$20 credit pool/month. Auto mode unlimited. Baseline for daily coding.",
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
        addedFeatures: ["usage_credits_20x", "priority_support"],
        note: "20× credit pool vs Pro ($200 vs $20). For agents running all day on large codebases.",
      },
      {
        name: "Business",
        pricePerSeat: 40,
        addedFeatures: [
          "centralised_billing",
          "admin_dashboard",
          "usage_policies",
          "shared_workspace",
          "privacy_mode",
          "rbac",
        ],
        note: "Pro-equivalent AI per seat + org management. For teams of 3+ with admin needs.",
      },
      {
        name: "Enterprise",
        pricePerSeat: null,
        addedFeatures: [
          "saml_sso",
          "identity_management",
          "audit_logs",
          "priority_support",
          "team_admin",
          "fine_tuned_models",
        ],
        note: "Custom pricing. SSO, SCIM, pooled usage, advanced security.",
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
        addedFeatures: ["usage_credits", "multi_model_access", "copilot_cli"],
        note: "50 premium requests + 2,000 completions/month. Multi-model + CLI included.",
      },
      {
        name: "Pro",
        pricePerSeat: 10,
        addedFeatures: ["cloud_agent", "code_review", "usage_credits_5x"],
        note: "300 premium requests + unlimited completions + cloud agent + code review.",
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
          "cloud_agent",
          "code_review",
          "usage_credits_5x",
          "usage_policies",
          "ip_indemnity",
          "data_privacy",
          "centralised_billing",
          "admin_dashboard",
          "team_admin",
        ],
        note: "Pro-equivalent AI + org governance. 300 premium requests/seat.",
      },
      {
        name: "Enterprise",
        pricePerSeat: 39,
        addedFeatures: [
          "advanced_models",
          "usage_credits_3x",
          "identity_management",
          "fine_tuned_models",
          "codebase_indexing",
          "pr_integration",
        ],
        note: "All models + ~1,000 premium requests (3.33× Business) + fine-tuned models.",
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
        addedFeatures: ["workspace_integration", "extended_thinking"],
        note: "Limited daily messages. For light or evaluation use.",
      },
      {
        name: "Pro",
        pricePerSeat: 17,
        addedFeatures: [
          "usage_credits",
          "cloud_agent",
          "deep_research",
          "persistent_memory",
        ],
        note: "Full message access at $17/mo and claude code directly in codebase. Individual baseline.",
      },
      {
        name: "Max",
        pricePerSeat: 100,
        addedFeatures: ["usage_credits_20x", "higher_message_limit"],
        note: "20× more messages than Pro ($100 vs $17). Only if hitting Pro's cap daily.",
      },
      {
        name: "Team (Standard)",
        pricePerSeat: 20,
        addedFeatures: [
          "extended_context_window",
          "shared_workspace",
          "admin_dashboard",
          "team_admin",
          "enterprise_search",
          "centralised_billing",
        ],
        note: "Collaboration + admin at $20/seat. $3/seat more than individual Pro.",
      },
      // {
      //   name: "Team (Premium)",
      //   pricePerSeat: 100,
      //   addedFeatures: [
      //     "cloud_agent",
      //     "code_review",
      //     "usage_credits_5x",
      //     "usage_policies",
      //     "ip_indemnity",
      //     "data_privacy",
      //     "centralised_billing",
      //     "admin_dashboard",
      //     "team_admin",
      //   ],
      //   note: "Pro-equivalent AI + org governance. 300 premium requests/seat.",
      // },
      {
        name: "Enterprise",
        pricePerSeat: null,
        addedFeatures: [
          "saml_sso",
          "fine_tuned_models",
          "audit_logs",
          "identity_management",
          "priority_support",
        ],
        note: "Custom pricing. SSO, fine-tuning, compliance.",
      },
    ],
  },
  // {
  //   id: "chatgpt",
  //   name: "ChatGPT",
  //   vendor: "OpenAI",
  //   color: "#10a37f",
  //   plans: ["Free", "Plus", "Team", "Enterprise", "API direct"],
  //   builtFor: ["coding", "writing", "data", "research", "mixed"],
  // },

  // {
  //   id: "gemini",
  //   name: "Gemini",
  //   vendor: "Google",
  //   color: "#4285F4",
  //   plans: ["Free", "Advanced", "Business (Workspace)", "API (pay-as-you-go)"],
  //   builtFor: ["coding", "writing", "data", "research", "mixed"],
  // },
  // {
  //   id: "windsurf",
  //   name: "Windsurf",
  //   vendor: "Codeium",
  //   color: "#7C3AED",
  //   plans: ["Free", "Pro", "Teams", "Enterprise"],
  //   builtFor: ["coding"],
  // },
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
  // },
];
