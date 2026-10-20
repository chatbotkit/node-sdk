---
'@chatbotkit/sdk': minor
---

Add the computer client. `cbk.computer` creates, lists, fetches, updates and deletes computers (`kind: 'shell' | 'desktop'`), starts, stops and restarts them, and runs commands with `exec`. `cbk.computer.file.read` and `cbk.computer.file.write` share text files, and `cbk.computer.session.create` mints a short-lived web VNC link to a desktop computer. Skillset abilities accept `linkedComputerId` to run shell abilities on a computer instead of an ephemeral sandbox.
