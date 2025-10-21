# SDK Type Pattern TODO List

This tracks the progress of applying the type pattern from `SDK_TYPE_PATTERN.md` to all v1.js files in the SDK.

## Progress Summary

- ✅ **20 files completed**
- ❌ **27 files remaining**
- 📊 **43% complete**

---

## Core Resources

- ✅ `src/bot/v1.js` - Completed
- ✅ `src/contact/v1.js` - Completed
- ✅ `src/file/v1.js` - Completed
- ✅ `src/memory/v1.js` - Completed
- ✅ `src/skillset/v1.js` - Completed
- ✅ `src/blueprint/v1.js` - Completed
- ✅ `src/usage/v1.js` - Completed
- ✅ `src/graphql/v1.js` - Completed
- ✅ `src/magic/v1.js` - Completed
- ✅ `src/team/v1.js` - Completed
- ❌ `src/conversation/v1.js` - **TODO** (456 lines, 11 functions - largest file)
- ❌ `src/dataset/v1.js` - **TODO** (190 lines, 6 functions)
- ❌ `src/policy/v1.js` - **TODO** (5 functions)
- ❌ `src/task/v1.js` - **TODO** (7 functions)
- ❌ `src/secret/v1.js` - **TODO** (5 functions)

## Nested Resources

- ✅ `src/dataset/file/v1.js` - Completed
- ✅ `src/usage/series/v1.js` - Completed
- ❌ `src/conversation/message/v1.js` - **TODO**
- ❌ `src/dataset/record/v1.js` - **TODO**
- ❌ `src/skillset/ability/v1.js` - **TODO**
- ❌ `src/contact/conversation/v1.js` - **TODO**
- ❌ `src/contact/task/v1.js` - **TODO**
- ❌ `src/contact/secret/v1.js` - **TODO**

## Partner Resources

- ❌ `src/partner/user/v1.js` - **TODO**
- ❌ `src/partner/user/token/v1.js` - **TODO**

## Platform Resources

- ✅ `src/platform/example/v1.js` - Completed (reference implementation)
- ❌ `src/platform/ability/v1.js` - **TODO**
- ❌ `src/platform/model/v1.js` - **TODO**
- ❌ `src/platform/secret/v1.js` - **TODO**

## Integrations (15 files)

- ✅ `src/integration/discord/v1.js` - Completed
- ✅ `src/integration/email/v1.js` - Completed
- ✅ `src/integration/extract/v1.js` - Completed
- ✅ `src/integration/mcpserver/v1.js` - Completed
- ✅ `src/integration/messenger/v1.js` - Completed
- ❌ `src/integration/notion/v1.js` - **IN PROGRESS**
- ❌ `src/integration/sitemap/v1.js` - **IN PROGRESS**
- ✅ `src/integration/slack/v1.js` - Completed
- ❌ `src/integration/support/v1.js` - **IN PROGRESS**
- ❌ `src/integration/telegram/v1.js` - **IN PROGRESS**
- ❌ `src/integration/trigger/v1.js` - **IN PROGRESS**
- ❌ `src/integration/twilio/v1.js` - **IN PROGRESS**
- ❌ `src/integration/whatsapp/v1.js` - **IN PROGRESS**
- ❌ `src/integration/widget/v1.js` - **IN PROGRESS**

---

## Pattern Checklist

For each file, ensure:

1. ❌ Remove all `*Options` typedefs
2. ❌ Remove all `*Instance` typedefs
3. ❌ Remove manual `*ListResponse` typedefs (like `{{items: Instance[]}}`)
4. ✅ Add OpenAPI-derived `*Response` typedefs
5. ✅ Add OpenAPI-derived `*RequestBody` typedefs for mutations
6. ✅ Add OpenAPI-derived `*StreamType` typedefs for streaming endpoints
7. ✅ Keep `*Request` typedefs that add value for external consumers
8. ✅ Update all function-level type annotations to use clean typedef references
9. ✅ Verify `pnpm build` passes
10. ✅ Verify `pnpm check` passes

## Priority Order

### High Priority (Core Features)

1. `src/conversation/v1.js` - Critical for chat functionality
2. `src/dataset/v1.js` - Critical for data management
3. `src/conversation/message/v1.js` - Chat messages
4. `src/dataset/record/v1.js` - Dataset records

### Medium Priority (Common Features)

5. `src/policy/v1.js`
6. `src/task/v1.js`
7. `src/secret/v1.js`
8. `src/skillset/ability/v1.js`

### Lower Priority (Integrations)

9-23. All integration files (can be done in batch)

### Low Priority (Platform)

24-26. Platform resources (less frequently used)

### Low Priority (Nested/Partner)

27-33. Remaining nested and partner resources

---

## Notes

- All transformations follow the pattern documented in `SDK_TYPE_PATTERN.md`
- Each file should be tested with `pnpm build` after transformation
- TypeScript type checking will catch invalid property access after transformation
- External API is preserved - `*Request` and `*Response` typedefs remain available
