/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('./useConversationManagerRemote.js').UseConversationManagerRemoteOptions} UseConversationManagerRemoteOptions
 */
/**
 * @typedef {UseConversationManagerRemoteOptions & {
 * }} UseConversationManagerOptions
 *
 * @typedef {{
 *   message: Message?,
 *   messages: Message[],
 *   thinking: boolean,
 *   typing: boolean,
 *   text: string,
 *   setText: (text: string) => void,
 *   error: any,
 *   setError: (error: any) => void,
 *   submit: () => void
 *   trigger: (name: string) => void
 *   request: (name: string, ...args: any) => void
 * }} UseConversationManagerResult
 */
/**
 * The useConversationManager hook is a React hook that manages the conversation
 * state including the messages, the input text and all calls to the ChatBotKit
 * API endpoint. It automatically handles the conversation state and other
 * details like the token and conversation ID.
 *
 * @param {UseConversationManagerOptions} options
 * @returns {UseConversationManagerResult}
 */
export function useConversationManager({ ...conversationManagerRemoteOptions }: UseConversationManagerOptions): UseConversationManagerResult;
export default useConversationManager;
export type Message = import('@chatbotkit/sdk/conversation/v1').Message;
export type UseConversationManagerRemoteOptions = import('./useConversationManagerRemote.js').UseConversationManagerRemoteOptions;
export type UseConversationManagerOptions = UseConversationManagerRemoteOptions & {};
export type UseConversationManagerResult = {
    message: Message | null;
    messages: Message[];
    thinking: boolean;
    typing: boolean;
    text: string;
    setText: (text: string) => void;
    error: any;
    setError: (error: any) => void;
    submit: () => void;
    trigger: (name: string) => void;
    request: (name: string, ...args: any) => void;
};
