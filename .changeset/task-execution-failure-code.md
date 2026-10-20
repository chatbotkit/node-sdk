---
'@chatbotkit/sdk': patch
---

Add `failureCode` and `failureReason` to the `cbk.task.execution.list` item types. `failureCode` is `agent_failure`, `limit_iterations`, `limit_time` or `limit_calls` for a failed run, and `null` otherwise.
