/**
 * @typedef {{
 *   maxTokens?: number,
 *   temperature?: number,
 *   frequencyPenalty?: number,
 *   presencePenalty?: number,
 *   seed?: number,
 *   interactionMaxMessages?: number,
 *   region?: 'us'|'eu'
 * }} ModelConfig
 *
 * @typedef {string|{name: string, config?: ModelConfig}} Model
 */
/**
 * @typedef {{
 *   id: string,
 *   type: 'bot'|'user',
 *   text: string
 * }} Message
 */
/**
 * @typedef {string} EndpointURL
 * @typedef {(conversationId: any, request: any) => AsyncGenerator<any>} EndpointFunction
 *
 * The useConversationManager hook is a React hook that manages the conversation
 * state including the messages, the input text and all calls to the ChatBotKit
 * API endpoint. It automatically handles the conversation state and other
 * details like the token and conversation ID.
 *
 * @param {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   token?: string,
 *   conversationId?: string,
 *   backstory?: string,
 *   Model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   [key: string]: any
 * }} options
 */
export function useConversationManager(options: {
    [key: string]: any;
    client?: ConversationClient | undefined;
    endpoint?: string | EndpointFunction | undefined;
    token?: string | undefined;
    conversationId?: string | undefined;
    backstory?: string | undefined;
    Model?: string | undefined;
    datasetId?: string | undefined;
    skillsetId?: string | undefined;
}): {
    token: string | undefined;
    setToken: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    conversationId: string | undefined;
    setConversationId: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    backstory: string | undefined;
    setBackstory: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    model: any;
    setModel: import("react").Dispatch<any>;
    datasetId: string | undefined;
    setDatasetId: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    skillsetId: string | undefined;
    setSkillsetId: import("react").Dispatch<import("react").SetStateAction<string | undefined>>;
    text: string;
    setText: import("react").Dispatch<import("react").SetStateAction<string>>;
    messages: Message[];
    setMessages: import("react").Dispatch<import("react").SetStateAction<Message[]>>;
    thinking: boolean;
    setThinking: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    typing: boolean;
    setTyping: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    error: any;
    setError: import("react").Dispatch<any>;
    submit: () => Promise<void>;
};
export default useConversationManager;
export type ModelConfig = {
    maxTokens?: number;
    temperature?: number;
    frequencyPenalty?: number;
    presencePenalty?: number;
    seed?: number;
    interactionMaxMessages?: number;
    region?: 'us' | 'eu';
};
export type Model = string | {
    name: string;
    config?: ModelConfig;
};
export type Message = {
    id: string;
    type: 'bot' | 'user';
    text: string;
};
export type EndpointURL = string;
/**
 * The useConversationManager hook is a React hook that manages the conversation
 * state including the messages, the input text and all calls to the ChatBotKit
 * API endpoint. It automatically handles the conversation state and other
 * details like the token and conversation ID.
 */
export type EndpointFunction = (conversationId: any, request: any) => AsyncGenerator<any>;
import { ConversationClient } from '@chatbotkit/sdk';
