# FLEET_CHARTER — one owner per loop

Source: BLUEPRINT.md (d), 2026-10-13. Machine-readable copy: `charter/fleet-charter.json` (it's the source of truth, and CI checks it).

Rules: every loop has exactly one owner. Supporting agents feed the owner, and they don't run a parallel copy of the loop. Any write that touches money, pricing, publishing, DNS or outreach goes to Joseph as an approval card.

| Loop | Owner | Supporting | Notes |
|---|---|---|---|
| Fleet coordination + approval queue to Joe | **Grokgod** | Lvl | No cash scoreboard (moved to Money). |
| Cash ledger / honest scoreboard, all rails | **Money** | Stripe Fulfill Desk, Whop Cash Desk, Gumroad Desk | Uses control-room v1 classes live/test/self_funded; absorbs LVL Profit Operator's scoreboard. |
| Experiments + kill clocks | **LVL Profit Operator** | — | Scope narrowed to experiments only. |
| Post-purchase fulfillment, all rails | **Buyer Success Desk** | Stripe Fulfill Desk, Whop Cash Desk | Uses lvlltd-agent-marketplace commerce/fulfillment.js; Stripe Fulfill and Whop Cash become rail monitors. |
| SKU registry / catalog | **Shopify Catalog Desk** | A2A Catalog Desk, Skill Runtime Agent | Renamed Catalog Desk; owns sku-race catalog/registry.json. |
| Merch creation (Printify → Shopify/Etsy/Pop-Up) | **Shopify Store Lead** | Shopify Ops Desk, Shopify Growth Desk, Forge Operator | — |
| lvlltd.com agent marketplace | **Agent Interface Agent** | Skill Runtime Agent, Market Engine Agent, Settlement And Fee Agent, x402 Marketplace Operator | Settlement owns x402 + the 3.3% fee. |
| A2A marketplace | **A2A Market Lead** | A2A Billing Desk, A2A Catalog Desk, A2A Runtime Ops | Folded under P3; lvlltd.com canonical. |
| Outbound demand (one funnel) | **Outbound Sales Desk** | Cash Closer Desk, Affiliate Desk, Creator Partners Desk, Agency Commission Desk, Placement Media Desk, B2B Pilot Desk, A2A Demand Scout | — |
| Social publishing | **XPulse** | LinkedIn Desk, LVL Discord Hub, Shopify Growth Desk | Everything stays a draft until Joe says GO. |
| Code changes | **Repo Patch** | — | PR-only. |
| Infra / AWS forge | **Forge Operator** | — | — |
| Inbox | **Inbox Sovereign** | — | Draft-only. |
| Funding | **Funding Lead** | Grants Desk, SBDC Desk, Boardy Network Desk, Boardy Deal Hunter | — |
| Freelance marketplaces (non-core) | **Dealwork Desk** | OpenTask Desk | — |
| Sideshot (non-core) | **Sideshot Beverage Founder** | — | — |
| Tesla fleet briefs (read-only) | **Tesla Fleet Oracle** | — | Must not write. |

## Unowned loops (Joseph decides)

- **Music (P1)**: proposal: new Studio Desk, or extend XPulse + music-video-release-bot
- **Tr3k build (P4)**: proposal: Repo Patch builds; Tesla Fleet Oracle stays read-only
- **Etsy**: proposal: Shopify Store Lead after Joseph confirms account access

## Proposed for retirement: NOT deleted

These 8 stubs have no description. They stay in place until Joseph approves. Nothing has been deleted or edited.

- `$` (af56187f-5241-432a-9b4d-81115dca2b2b)
- `A2A Marketplace` (de8a2111-1223-42ff-94b5-c166cfb05bb6)
- `Boardy Deals` (12598ab9-4b9f-4eb8-96bb-18a0a2d71552)
- `Cash Conversion` (511ed8f6-0e09-442a-9f18-c2aaf7d30611)
- `Demand Pipeline` (d71d3bd1-8567-4094-905e-eeb3369bdb25)
- `Funding` (b7b7cf94-a192-43e6-9f37-e77d4a2cb26d)
- `Sales & Affiliates` (00b6f341-c1cf-4ffe-806e-99487f0be1e6)
- `Shopify Launch` (7a39b35b-e0fa-418c-8074-cd1a7b03d211)

## Scope changes

- Grokgod: coordination and the approval queue only, with no scoreboard.
- Money: the single cash scoreboard. It takes over LVL Profit Operator's paid=true board.
- LVL Profit Operator: experiments and kill clocks only.
