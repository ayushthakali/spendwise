export type UseCase = "coding" | "writing" | "data" | "research" | "mixed";

export interface Tool {
  id: string;
  name: string;
  vendor: string;
  color: string;
  plans: string[];
  planPrices: (number | null)[]; //null reps pay-as-you-go
  relevantUseCases: UseCase[];
}

export const TOOLS: Tool[] = [
  {
    id: "cursor",
    name: "Cursor",
    vendor: "Anysphere",
    color: "#1a1a2e",
    plans: ["Hobby (Free)", "Pro", "Business", "Enterprise"],
    planPrices: [0, 20, 40, null],
    relevantUseCases: ["coding"],
  },
  {
    id: "copilot",
    name: "GitHub Copilot",
    vendor: "GitHub / Microsoft",
    color: "#24292f",
    plans: ["Individual", "Business", "Enterprise"],
    planPrices: [10, 19, 39],
    relevantUseCases: ["coding"],
  },
  {
    id: "claude",
    name: "Claude",
    vendor: "Anthropic",
    color: "#D97757",
    plans: ["Free", "Pro", "Max", "Team", "Enterprise", "API direct"],
    planPrices: [0, 20, 100, 30, null, null],
    relevantUseCases: ["coding", "writing", "data", "research", "mixed"],
  },
  {
    id: "chatgpt",
    name: "ChatGPT",
    vendor: "OpenAI",
    color: "#10a37f",
    plans: ["Free", "Plus", "Team", "Enterprise", "API direct"],
    planPrices: [0, 20, 30, null, null],
    relevantUseCases: ["coding", "writing", "data", "research", "mixed"],
  },
  {
    id: "anthropic_api",
    name: "Anthropic API",
    vendor: "Anthropic",
    color: "#D97757",
    plans: ["Pay-as-you-go", "Committed use"],
    planPrices: [null, null],
    relevantUseCases: ["coding", "data", "research", "mixed"],
  },
  {
    id: "openai_api",
    name: "OpenAI API",
    vendor: "OpenAI",
    color: "#10a37f",
    plans: ["Pay-as-you-go", "Committed use"],
    planPrices: [null, null],
    relevantUseCases: ["coding", "data", "research", "mixed"],
  },
  {
    id: "gemini",
    name: "Gemini",
    vendor: "Google",
    color: "#4285F4",
    plans: ["Free", "Advanced", "Business (Workspace)", "API (pay-as-you-go)"],
    planPrices: [0, 19.99, 22, null],
    relevantUseCases: ["coding", "writing", "data", "research", "mixed"],
  },
  {
    id: "windsurf",
    name: "Windsurf",
    vendor: "Codeium",
    color: "#7C3AED",
    plans: ["Free", "Pro", "Teams", "Enterprise"],
    planPrices: [0, 15, 35, null],
    relevantUseCases: ["coding"],
  },
];
