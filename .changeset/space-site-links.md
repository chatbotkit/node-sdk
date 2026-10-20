---
'@chatbotkit/sdk': minor
---

Add private space sites. Space sites accept `access: 'public' | 'private'`, and `cbk.space.site.createLink(spaceId, siteId, { path, durationInSeconds })` mints a temporary link that opens a site, or one folder of it, until it expires.
