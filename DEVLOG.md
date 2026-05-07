## Day 1 — 2026-05-07

Hours worked: 5 hrs

What I did:

- Initialized the project with Next.js and Tailwind CSS,
- Researched AI tools pricing plans and feature differences,
- Recorded all pricing data in PRICING_DATA.md,
- Created `tool.ts` as the single source of truth for tool and plan metadata,
- Standardized similar plan features into generalized term using Claude AI to enable future cross-tool comparison and recommendation logic

What I learned:

- Learned how major AI tools structure pricing, limits, and feature tiers
- Identified major differences between consumer AI interfaces and API infrastructure products

Blockers / what I'm stuck on:

- Tools like ChatGpt, Claude, and Gemini are interface based products with seat-based pricing, while Anthropic API and OpenAI API are infrastructure products with token-based pricing. Since both categories use different pricing models and usage patterns, they cannot be directly compared on the same cost axis.

Plan for tomorrow:

- Finalize the tool.ts and work on the audit engine.
