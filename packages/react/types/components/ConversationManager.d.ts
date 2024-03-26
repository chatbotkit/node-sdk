/**
 * Creates a conversation manager instance and context.
 *
 * @param {import('../hooks/useConversationManager.js').UseConversationManagerOptions & { children: import('react').ReactNode}} props
 * @returns {import('react').ReactElement} The rendered component.
 */
export function ConversationManager({ children, ...options }: import('../hooks/useConversationManager.js').UseConversationManagerOptions & {
    children: import('react').ReactNode;
}): import('react').ReactElement;
export const ConversationContext: import("react").Context<import("../hooks/useConversationManager.js").UseConversationManagerResult>;
export default ConversationManager;
