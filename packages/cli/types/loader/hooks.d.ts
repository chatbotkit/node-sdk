/**
 * Resolve hook - intercepts module resolution to redirect @chatbotkit/*
 * imports to the CLI's bundled packages.
 *
 * @param {string} specifier - The module specifier being resolved
 * @param {object} context - Resolution context
 * @param {Function} nextResolve - The next resolve function in the chain
 * @returns {Promise<{url: string, shortCircuit?: boolean}>}
 */
export function resolve(specifier: string, context: object, nextResolve: Function): Promise<{
    url: string;
    shortCircuit?: boolean;
}>;
