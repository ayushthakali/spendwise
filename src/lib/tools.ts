export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export type PlanFeature =
  // ── 1. Individual-level features ──────────────────────────────────────────
  | "usage_credits"
  | "usage_credits_3x" // 3× the usage credits vs the plan below
  | "usage_credits_20x" // 20× the usage credits vs the plan below
  | "higher_message_limit" // more daily messages than the plan below
  | "advanced_models" // access to more powerful models not in the tier below
  | "multi_model_access" // access to multiple AI providers/models from one interface

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
  | "priority_support" // faster SLA-backed support response times for paid/org customers
  | "identity_management" // SCIM, directory sync, automated user provisioning/deprovisioning
  | "fine_tuned_models" // AI trained on your private codebase
  | "pr_integration" // AI integrated into pull requests and issues
  | "workspace_integration"; // AI embedded in Gmail, Docs, Sheets, Meet

export interface Plan {
  name: string;
  pricePerSeat: number | null;
  addedFeatures: string[];
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
        addedFeatures: ["usage_credits", "advanced_models"],
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
          "saml_sso",
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
          "usage_credits",
          "identity_management",
          "audit_logs",
          "usage_policies",
          "priority_support",
          "team_admin",
        ],
        note: "Custom pricing. Adds granular admin and model controls, pooled usage, and advanced security.",
      },
    ],
  },
  // {
  //   id: "copilot",
  //   name: "GitHub Copilot",
  //   vendor: "GitHub / Microsoft",
  //   color: "#24292f",
  //   plans: ["Individual", "Business", "Enterprise"],
  //   builtFor: ["coding"],
  // },
  // {
  //   id: "claude",
  //   name: "Claude",
  //   vendor: "Anthropic",
  //   color: "#D97757",
  //   plans: ["Free", "Pro", "Max", "Team", "Enterprise", "API direct"],
  //   planPrices: [0, 20, 100, 30, null, null],
  //   builtFor: ["coding", "writing", "data", "research", "mixed"],
  // },
  // {
  //   id: "chatgpt",
  //   name: "ChatGPT",
  //   vendor: "OpenAI",
  //   color: "#10a37f",
  //   plans: ["Free", "Plus", "Team", "Enterprise", "API direct"],
  //   builtFor: ["coding", "writing", "data", "research", "mixed"],
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
];
