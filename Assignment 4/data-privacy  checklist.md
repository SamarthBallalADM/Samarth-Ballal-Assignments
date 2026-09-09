# Assignment: GPT vs. Claude Coding Comparison + Data-Privacy Checklist

## Task Prompt
"Write a Python function that takes a list of hotel guest reservations and returns the number of reservations grouped by room type. Handle missing room types safely."

## Comparison: GPT vs. Claude

| Aspect | `gpt_code.py` | `claude_code.py` |
|---|---|---|
| Missing key handling | Uses `.get("room_type", "Unknown")` | Uses `.get("room_type")` then explicit check |
| Handles `None` value | No — `.get(key, default)` only applies default when key is absent, not when value is `None` | Yes — explicitly checks falsy/`None`/blank values |
| Handles empty/whitespace strings | Partially (empty string caught by `if not room_type`, but whitespace-only string like `" "` is not caught) | Yes — strips and checks whitespace-only strings |
| Handles malformed entries (non-dict items) | No — will raise `AttributeError` if an item isn't a dict | Yes — skips non-dict entries safely |
| Normalizes inconsistent casing/spacing (e.g. `"Deluxe "` vs `"Deluxe"`) | No | Yes — strips whitespace before counting |
| Configurable default label | No (hardcoded `"Unknown"`) | Yes (`default_label` parameter) |
| Documentation | None | Docstring explaining args/returns |
| Code complexity | Simpler, shorter | Slightly more defensive/verbose |

**Verdict:** Claude's version is more robust and production-ready — it handles more edge cases (malformed records, `None` values, whitespace-only strings) safely without crashing. GPT's version is simpler and easier to read but has more failure/edge-case gaps (e.g., raises on non-dict entries, doesn't catch whitespace-only room types).

---

## Data-Privacy Checklist: Using Third-Party LLMs with Guest PII

Use this checklist before submitting any hotel guest data (reservations, names, contact info, payment details, etc.) to a third-party LLM (e.g., ChatGPT, Claude) for code generation, debugging, or analysis.

- [ ] **Never paste real guest PII** (names, emails, phone numbers, addresses, payment/card numbers, passport/ID numbers) into prompts — use synthetic/fake sample data instead.
- [ ] **Use anonymized or masked identifiers** (e.g., `guest_001`, `"room_type": "Deluxe"`) rather than real reservation records when asking for code examples.
- [ ] **Strip or redact sensitive fields** from any real dataset before sharing it, even for debugging purposes.
- [ ] **Check the LLM provider's data retention/training policy** — confirm whether submitted data is stored, logged, or used to train future models.
- [ ] **Prefer enterprise/business tiers with data opt-out** guarantees over free consumer tiers when any real data must be used.
- [ ] **Avoid sharing full database schemas or exports** that could reveal internal system structure alongside real data.
- [ ] **Review generated code for hardcoded example data** before merging, to ensure no residual real PII was echoed back by the model.
- [ ] **Apply the same compliance rules as elsewhere** (GDPR, CCPA, PCI-DSS, etc.) — a prompt containing PII is still a PII disclosure.
- [ ] **Log/document what was shared** with the LLM as part of internal audit trails, if company policy requires data-sharing records.
- [ ] **Get sign-off from a data-privacy/compliance owner** before establishing a workflow that regularly sends any guest data to third-party AI tools.
