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

## Day 2 — 2026-05-08

Hours worked: 2 hrs

What I did:

- Created documentation covering pricing tiers and plan features for all supported AI tools
- Extracted and normalized comparable plan features across different vendors in more detail than yesterday
- Merged overlapping feature terminology into generalized feature abstractions for future audit comparisons
- Completed approximately 80% of `tool.ts`

What I learned:

- Learned different features of tools

Blockers / what I'm stuck on:

- Same as yesterday

Plan for tomorrow:

- Finalize the tool.ts and work on the audit engine.

## Day 3 — 2026-05-09

Hours worked: 0 hrs (I had a headache so couldn't make progress.)

## Day 4 — 2026-05-10

Hours worked: 5 hrs

What I did:

- Refined `tools.ts`
- Removed redundant features and merged similar connected features like merging team_admin into rbac.

What I learned:

- Learned to analyze different features of tools and find their connections.

Blockers / what I'm stuck on:

- Cross-tool credit comparison requires absolute monthlyCredits values per plan. Some values are clearly stated (Copilot Pro = 300 requests, Pro+ = 1,500) but others are not publicly documented (Cursor credit pool equivalence). Need to research or estimate these values before Q3 alternative recommendations involving credit-heavy plans are fully accurate.
- Image_generation and video_generation features need to be added to the PlanFeature type and applied to Gemini and ChatGPT plans before the Gemini audit is fair

Plan for tomorrow:

- Add monthlyCredits field to Plan interface and populate known values
- Add image_generation and video_generation to PlanFeature type
- Begin SpendForm.tsx — tool toggle cards with plan selector and seat input
