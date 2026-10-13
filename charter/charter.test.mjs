import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
const c = JSON.parse(fs.readFileSync(new URL("./fleet-charter.json", import.meta.url), "utf8"));
const md = fs.readFileSync(new URL("../FLEET_CHARTER.md", import.meta.url), "utf8");
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

test("one owner per loop, unique loop ids, ids are agent UUIDs", () => {
  const ids = c.loops.map((l) => l.loop);
  assert.equal(new Set(ids).size, ids.length);
  for (const l of c.loops) { assert.ok(l.owner?.name, l.loop); assert.match(l.owner.agent_id, UUID); assert.ok(!Array.isArray(l.owner)); for (const s of l.supporting) { assert.match(s.agent_id, UUID); assert.notEqual(s.agent_id, l.owner.agent_id); } }
});

test("blueprint scope rules: Money owns the scoreboard, Buyer Success owns fulfillment, Grokgod owns coordination", () => {
  const own = Object.fromEntries(c.loops.map((l) => [l.loop, l.owner.name]));
  assert.equal(own["cash-ledger"], "Money"); assert.equal(own.fulfillment, "Buyer Success Desk"); assert.equal(own["fleet-coordination"], "Grokgod");
  assert.equal(own.experiments, "LVL Profit Operator");
});

test("exactly the 8 blank stubs are proposed for retirement and none is deleted", () => {
  assert.deepEqual(c.retire_proposed.map((r) => r.name).sort(), ["$", "A2A Marketplace", "Boardy Deals", "Cash Conversion", "Demand Pipeline", "Funding", "Sales & Affiliates", "Shopify Launch"].sort());
  for (const r of c.retire_proposed) { assert.equal(r.status, "proposed_retire_not_deleted"); assert.match(r.agent_id, UUID); assert.ok(md.includes(r.agent_id)); }
  const owners = new Set(c.loops.flatMap((l) => [l.owner.agent_id, ...l.supporting.map((s) => s.agent_id)]));
  for (const r of c.retire_proposed) assert.ok(!owners.has(r.agent_id), `${r.name} not assigned`);
});

test("markdown mirrors JSON; unowned loops flagged for Joseph", () => {
  for (const l of c.loops) assert.ok(md.includes(`**${l.owner.name}**`), l.loop);
  assert.deepEqual(c.unowned.map((u) => u.loop), ["music", "tr3k-build", "etsy"]);
  assert.match(md, /NOT deleted/);
});
