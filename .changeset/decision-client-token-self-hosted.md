---
'@chatbotkit/sdk': minor
'@chatbotkit/cli': minor
'@chatbotkit/nextauth': minor
'@chatbotkit/react': patch
---

Add the decision client, the `token` credential option, and support for self-hosted platforms.

- `@chatbotkit/sdk`: `cbk.decision.create({ state, questions })` asks a decision model typed questions (boolean, choice, score) about a state and returns an answer with probabilities for each, plus the token usage. The platform model list also accepts `type: 'decision'`.
- `@chatbotkit/sdk`: accept `token` as the credential option. `secret` is deprecated and still works; `token` wins when both are set, and `extend()` lets a new credential win under either name.
- `@chatbotkit/sdk`: a path prefix on `baseUrl` is now preserved (`https://corp.example/cbk` reaches `https://corp.example/cbk/api/v1/...`); previously it was dropped. Plain `http` base URLs work for local use.
- `@chatbotkit/cli`: read the token from `CHATBOTKIT_API_TOKEN` (or `CBK_API_TOKEN`), the platform URL from `CHATBOTKIT_API_URL` (or `CBK_API_URL`), and the run-as user from `CHATBOTKIT_API_RUNAS_USERID`, `CBK_API_RUNAS_USERID`, `CHATBOTKIT_RUN_AS` or `CBK_RUN_AS`. The older `CHATBOTKIT_API_SECRET` and `CHATBOTKIT_API_KEY` names, and their `CBK_` forms, are still read. `cbk run` passes the token to scripts under the new name too.
- `@chatbotkit/nextauth`: `ChatBotKitUserAdapter` and `ChatBotKitContactAdapter` accept `token` (with `secret` still working) and an optional `baseUrl`.
- `@chatbotkit/react`: `useConversationManagerRemote` passes its credential to the client as `token`.
