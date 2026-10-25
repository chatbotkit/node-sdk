---
'@chatbotkit/sdk': patch
---

Discord, Microsoft Teams, WhatsApp, Messenger, Instagram, Telegram, Twilio, GitHub and email integration types include `autoRespond`, the setting that controls when the bot replies to messages that are not addressed to it.

`autoRespond` is typed `string | null` on every integration, including Slack and Google Chat, so a stored `null` matches the type and can be sent to clear the setting.
