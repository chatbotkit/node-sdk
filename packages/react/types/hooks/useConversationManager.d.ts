/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {Message & {
 *   id: string,
 *   createdAt: Date
 * }} SimpleMessage
 *
 * @typedef {Message & {
 *   id: string,
 *   createdAt: Date,
 *   children?: import('react').ReactNode
 * }} ComplexMessage
 */
/**
 * @typedef {import('./useConversationManagerRemote.js').UseConversationManagerRemoteOptions} UseConversationManagerRemoteOptions
 */
/**
 * @typedef {UseConversationManagerRemoteOptions & {
 *   interactionMaxMessages?: number
 * }} UseConversationManagerOptions
 *
 * @typedef {{
 *   message: SimpleMessage?,
 *   messages: ComplexMessage[],
 *   thinking: boolean,
 *   typing: boolean,
 *   text: string,
 *   setText: (text: string) => void,
 *   error: any,
 *   setError: (error: any) => void,
 *   submit: () => Promise<boolean>
 *   trigger: (name: string) => Promise<boolean>
 *   request: (name: string, args: any) => Promise<boolean>
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
export function useConversationManager({ interactionMaxMessages, ...conversationManagerRemoteOptions }: UseConversationManagerOptions): UseConversationManagerResult;
export default useConversationManager;
export type Message = import("@chatbotkit/sdk/conversation/v1").Message;
export type SimpleMessage = Message & {
    id: string;
    createdAt: Date;
};
export type ComplexMessage = Message & {
    id: string;
    createdAt: Date;
    children?: import("react").ReactNode;
};
export type UseConversationManagerRemoteOptions = import("./useConversationManagerRemote.js").UseConversationManagerRemoteOptions;
export type UseConversationManagerOptions = UseConversationManagerRemoteOptions & {
    interactionMaxMessages?: number;
};
export type UseConversationManagerResult = {
    message: SimpleMessage | null;
    messages: ComplexMessage[];
    thinking: boolean;
    typing: boolean;
    text: string;
    setText: (text: string) => void;
    error: any;
    setError: (error: any) => void;
    submit: () => Promise<boolean>;
    trigger: (name: string) => Promise<boolean>;
    request: (name: string, args: any) => Promise<boolean>;
};
