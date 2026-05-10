export type PlanFeature =
  // Group 1: AI Capability (Features that improve what the AI can do for any individual)
  | "usage_credits" // Introduces a paid usage credit pool over the free/limited tier below.
  | "usage_credits_3x" // This plan gives 3× the usage credits of the plan directly below it.
  | "usage_credits_5x" // This plan gives 5× the usage credits of the plan directly below it.
  | "usage_credits_20x" // This plan gives 20× the usage credits of the plan directly below it.
  | "higher_message_limit" // Significantly more daily messages or output tokens than the plan below.
  | "advanced_models" // Access to the vendor's most powerful/frontier models not available in the plan below.e.g. Claude Opus, GPT-5.5 Thinking, Gemini Ultra, Copilot Pro+ all-model access.
  | "multi_model_access" // Access to models from multiple AI providers within one interface. e.g. Cursor auto mode (Claude + GPT + Gemini), Copilot (Anthropic + Google + OpenAI).
  | "extended_thinking" // AI uses extended reasoning/thinking mode for complex multi-step problems.
  | "web_search" // Built-in real-time web search within the AI interface — no copy-pasting URLs.
  | "deep_research" // Multi-step autonomous research that queries many sources and synthesises a report. Distinct from basic web search — takes minutes, produces long structured output.

  // Group 2: Productivity Workflows (Features that add a specific workflow capability)
  | "persistent_memory" // AI remembers facts, preferences, and context across separate conversations.
  | "autonomous_agent" // AI can execute multi-step tasks autonomously without per-step user input. It covers cloud agent, desktop agen
  | "cli_tool" // AI-powered command-line interface tool for terminal/shell workflows.
  | "code_review" // AI suggestions integrated into pull request / code review workflow.
  | "priority_access" // Queue priority during high-traffic periods — faster response times, no throttling.
  | "workspace_integration" // AI embedded directly into productivity apps (Gmail, Docs, Sheets, Slack, etc.).

  // Group 3: Team Collaboration (Only valuable when multiple people actively use the feature together)
  | "shared_workspace" // Shared conversation history, projects, or context visible to all team members.
  | "codebase_indexing" // AI indexes the team's private codebase to give contextually aware suggestions.
  | "extended_context_window" // Significantly larger context window than lower tiers — handles longer documents/code.

  // Group 4: Org Administration (Only useful when someone's designated role is to manage team AI access and usage)
  | "centralised_billing" // Single consolidated invoice for all seats instead of individual subscriptions.
  | "admin_dashboard" // Usage analytics, per-user reporting, and admin control panel.
  | "usage_policies" // Org-wide controls to restrict which models, features, or data the team can access.
  | "data_privacy" // Conversations and code are NOT used to train the vendor's models, org-wide also covers privacy_mode (code not stored by model providers).
  | "spend_controls" // Set per-user and org-wide usage/spend limits to prevent bill surprises.
  | "pooled_usage" // Usage quota is shared across the org rather than allocated per seat.

  // Group 5: Compliance & Security (Only useful when a specific security posture, legal requirement, or compliance function is actively present in the organisation)
  | "saml_sso" // SAML/OIDC Single Sign-On — requires a corporate identity provider (Okta, Azure AD).
  | "rbac" // Role-based access control with fine-grained permissions per user/group.
  | "audit_logs" // Compliance audit trail of all AI interactions for security review.
  | "identity_management" // SCIM provisioning — automated user creation/deletion via directory sync.
  | "network_controls" // IP allowlisting and network-level access restrictions.
  | "data_retention_controls" // Custom data retention policies — control how long conversation data is stored.

  // Group 6: Enterprise (Scale Only deliver meaningful value at large org scale or with specific infrastructure)
  | "priority_support" // Faster SLA-backed human support response times. Distinct from priority_access (queue position) — this is about vendor support.
  | "enterprise_search" // Org-wide AI-powered search across internal documents, tools, and knowledge bases.
  | "fine_tuned_models"; // AI models trained or fine-tuned on the org's private codebase or data. Only improves suggestions when the private dataset is large and consistent.
