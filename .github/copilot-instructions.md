# ChatBotKit Node SDK

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

The ChatBotKit Node SDK is a TypeScript monorepo containing multiple packages for building conversational AI bots across different platforms. It uses pnpm for package management and turbo for build orchestration.

## Working Effectively

Bootstrap, build, and test the repository:

- Install pnpm: `npm install -g pnpm@8.12.0`
- Install dependencies: `pnpm install` -- takes 2-3 minutes to complete. NEVER CANCEL. Set timeout to 10+ minutes.
- Type checking: `pnpm check` -- takes 20-25 seconds. NEVER CANCEL. Set timeout to 5+ minutes.
- Linting: `pnpm lint` -- takes 15-20 seconds. NEVER CANCEL. Set timeout to 5+ minutes.
- Build all packages: `pnpm build` -- takes 1-2 minutes to complete. NEVER CANCEL. Set timeout to 10+ minutes.
- Format code: `pnpm format` -- takes 5-10 seconds. Set timeout to 2+ minutes.
- Run tests: `pnpm test` -- takes 2-5 seconds (placeholder tests). Set timeout to 2+ minutes.

Build a specific package:

- SDK only: `pnpm -F @chatbotkit/sdk build` -- takes 10-15 seconds. Set timeout to 5+ minutes.
- CLI only: `pnpm -F @chatbotkit/cli build` -- takes 5-10 seconds. Set timeout to 5+ minutes.

Run examples:

- Next.js example: `pnpm -F @examples/nextjs-app-router-stateless-chat dev` -- starts development server on http://localhost:3000 (or 3001 if 3000 is busy)
- CLI tool: `cd packages/cli && pnpm cbk --help` -- shows CLI help

## Validation

ALWAYS run through at least one complete end-to-end scenario after making changes:

- Test CLI functionality: Run `pnpm -F @chatbotkit/cli cbk --help` and verify help output displays correctly
- Test example applications: Start a Next.js example with `pnpm -F @examples/nextjs-app-router-stateless-chat dev` and verify it starts without errors
- Test build process: Run `pnpm build` and ensure all packages build successfully (one example may fail due to missing API key - this is expected)
- Always run `pnpm format` and `pnpm lint` before committing or the CI (.github/workflows/docs.yml) will fail
- Verify changes work across different package types: Test changes in both the main SDK and example projects

## Repository Structure

### Main Packages

- `@chatbotkit/sdk` - Core SDK with API clients and utilities
- `@chatbotkit/cli` - Command line tools (bin: `cbk`)
- `@chatbotkit/react` - React components and hooks
- `@chatbotkit/next` - Next.js integration utilities
- `@chatbotkit/nextauth` - NextAuth.js integration
- `@chatbotkit/fetch` - Isometric fetch implementation

### Tools

- `create-cbk-app` - CLI for creating new CBK applications
  - Usage: `node tools/create-cbk-app/bin/create-cbk-app.js --help`

### Examples

- `examples/nextjs/app/*` - Next.js App Router examples
- `examples/nextjs/pages/*` - Next.js Pages Router examples
- `examples/cloudflare/*` - Cloudflare Workers examples
- `examples/sdk/*` - Pure SDK examples (ESM, CJS, TypeScript)

## Development Requirements

System requirements:

- Node.js >=18.17.0 (tested with v20.19.4)
- pnpm 8.12.0 (exact version required)
- Git

Environment variables (for examples requiring API access):

- `CHATBOTKIT_API_SECRET` - Required for examples that interact with ChatBotKit API

## Common Tasks

Building packages:

- All packages: `pnpm build` (1-2 minutes)
- Individual package: `pnpm -F <package-name> build`
- Clean build artifacts: `pnpm clean`

Development workflow:

- Install: `pnpm install` (first run)
- Format: `pnpm format` (before committing)
- Lint: `pnpm lint` (before committing)
- Type check: `pnpm check` (before committing)
- Build: `pnpm build` (to verify changes)

Working with examples:

- List available examples: `ls examples/nextjs/app examples/nextjs/pages examples/cloudflare examples/sdk`
- Run Next.js example: `pnpm -F @examples/nextjs-app-router-stateless-chat dev`
- Create new app: `node tools/create-cbk-app/bin/create-cbk-app.js my-app`

## Important Files and Directories

Configuration files:

- `package.json` - Root package with shared scripts
- `pnpm-workspace.yaml` - Workspace configuration
- `turbo.json` - Build orchestration config
- `.eslintrc` - ESLint configuration
- `.prettierrc.json` - Prettier configuration
- `tsconfig.json` - Root TypeScript configuration

Package structure (each package follows this pattern):

- `package.json` - Package configuration with exports
- `src/` - TypeScript source files
- `dist/` - Built outputs (CJS, ESM)
- `types/` - TypeScript declaration files
- `docs/` - Generated documentation

Scripts directory:

- `scripts/create-standard-exports.js` - Generates package.json exports
- `scripts/rename-cjs.js` - Renames .js to .cjs for CommonJS
- `scripts/rewrite-cjs.js` - Rewrites CommonJS imports
- `scripts/rewrite-ts.js` - Rewrites TypeScript declaration files

## Key Build Artifacts

Each package generates:

- `dist/cjs/` - CommonJS builds (.cjs files)
- `dist/esm/` - ESM builds (.js files)
- `types/` - TypeScript declarations (.d.ts files)
- `docs/` - Generated documentation (markdown)

The build process:

1. Compiles TypeScript to both CJS and ESM
2. Renames CJS files from .js to .cjs
3. Rewrites import/export statements for CommonJS compatibility
4. Generates TypeScript declarations
5. Creates documentation with typedoc
6. Updates package.json exports dynamically

## Troubleshooting

Build fails with "CHATBOTKIT_API_SECRET is not set":

- This is expected for the `@examples/nextjs-app-router-stateless-rag` example
- The build will show 14/18 successful packages, which is normal
- Other packages build successfully

Permission denied errors with create-cbk-app:

- Use `node tools/create-cbk-app/bin/create-cbk-app.js` instead of direct execution

Development server port conflicts:

- Next.js will automatically try ports 3001, 3002, etc. if 3000 is busy
- Check console output for the actual port being used

TypeScript compilation errors:

- Run `pnpm check` to verify all types are correct
- Individual packages can be type-checked with `pnpm -F <package-name> check`

Dependency issues:

- Delete node_modules and pnpm-lock.yaml, then run `pnpm install`
- Ensure you're using the exact pnpm version: `pnpm --version` should show 8.12.0

## Package-Specific Commands

SDK package (`packages/sdk`):

- Build: `pnpm -F @chatbotkit/sdk build`
- Generate API types: `pnpm -F @chatbotkit/sdk run generate:api-types`
- Update API spec: `pnpm -F @chatbotkit/sdk run update:api-types`

CLI package (`packages/cli`):

- Build: `pnpm -F @chatbotkit/cli build`
- Run CLI: `pnpm -F @chatbotkit/cli cbk`
- Development mode: `pnpm -F @chatbotkit/cli dev`

Example projects:

- Development: `pnpm -F <example-name> dev`
- Build: `pnpm -F <example-name> build` (some may require CHATBOTKIT_API_SECRET)

## Testing Changes

After making changes to any package:

1. Run `pnpm format` to ensure consistent formatting
2. Run `pnpm lint` to catch linting issues
3. Run `pnpm check` to verify TypeScript types
4. Run `pnpm build` to ensure everything builds correctly
5. Test specific functionality by running relevant examples
6. For SDK changes, test with multiple example projects
7. For CLI changes, test CLI commands directly
