---
'@chatbotkit/sdk': patch
---

Fix `conversation.attachment.upload` posting to the non-existent `/api/v1/Attachment/{id}/upload` route. It now registers the upload at `/api/v1/conversation/{conversationId}/attachment/upload`. The first argument is the conversation id (previously documented as `fileId`/`attachmentId`); positional callers are unaffected.
