---
'@chatbotkit/sdk': minor
---

BREAKING: SpaceSite API request and response fields now use `slug` instead of `domain`. Create requests require `slug`; update requests accept an optional `slug`; fetch and list responses expose `slug`.
