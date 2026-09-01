---
"@chatbotkit/sdk": minor
---

BREAKING: skillset ability link fields renamed. On create/update/fetch/list/export, `secretId` / `fileId` / `botId` / `spaceId` are now `linkedSecretId` / `linkedFileId` / `linkedBotId` / `linkedSpaceId`. Inline conversation `extensions.skillsets[].abilities[]` entries use `linkedSecretId` (and the new `linkedSpaceId`). GraphQL `Ability` relations `secret` / `file` / `bot` / `space` are now `linkedSecret` / `linkedFile` / `linkedBot` / `linkedSpace`. There are no compatibility aliases; upgrade together with the platform deploy.

Also in this release, from the regenerated `src/types/ability.d.ts`: the `'browser/dispatch'` ability name and the `BrowserDispatchParameters` export are gone (the ability was removed from the platform catalogue), and `BlueprintBulletinCreateParameters.ttl` is now `string` (seconds or a duration such as `"1 hour"`) instead of `number`. Both are breaking for code typed against those exports.
