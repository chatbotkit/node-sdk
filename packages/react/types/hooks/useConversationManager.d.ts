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
 *   id?: string,
 *   type: 'bot'|'user'|'context'|'instruction'|'backstory'|'activity',
 *   text: string,
 *   meta?: Record<string,any>
 * }} Message
 */
/**
 * @typedef {string} EndpointURL
 * @typedef {(conversationId: any, request: any) => AsyncGenerator<any>} EndpointFunction
 */
/**
 * @typedef {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   token?: string,
 *   conversationId?: string,
 *   backstory?: string,
 *   Model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   [key: string]: any
 * }} UseConversationManagerOptions
 *
 * @typedef {{
 *   token?: string,
 *   setToken: (token: string) => void,
 *   conversationId?: string,
 *   setConversationId: (conversationId: string) => void,
 *   botId?: string,
 *   setBotId: (botId: string) => void,
 *   backstory?: string,
 *   setBackstory: (backstory: string) => void,
 *   model?: Model,
 *   setModel: (model: Model) => void,
 *   datasetId?: string,
 *   setDatasetId: (datasetId: string) => void,
 *   skillsetId?: string,
 *   setSkillsetId: (skillsetId: string) => void,
 *   privacy?: string,
 *   setPrivacy: (privacy: string) => void,
 *   moderation?: string,
 *   setModeration: (moderation: string) => void,
 *   text: string,
 *   setText: (text: string) => void,
 *   messages: Message[],
 *   setMessages: (messages: Message[]) => void,
 *   thinking: boolean,
 *   setThinking: (thinking: boolean) => void,
 *   typing: boolean,
 *   setTyping: (typing: boolean) => void,
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
export function useConversationManager(options: UseConversationManagerOptions): UseConversationManagerResult;
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
    id?: string;
    type: 'bot' | 'user' | 'context' | 'instruction' | 'backstory' | 'activity';
    text: string;
    meta?: Record<string, any>;
};
export type EndpointURL = string;
export type EndpointFunction = (conversationId: any, request: any) => AsyncGenerator<any>;
export type UseConversationManagerOptions = {
    [key: string]: any;
    client?: ConversationClient | undefined;
    endpoint?: string | EndpointFunction | undefined;
    token?: string | undefined;
    conversationId?: string | undefined;
    backstory?: string | undefined;
    Model?: string | undefined;
    datasetId?: string | undefined;
    skillsetId?: string | undefined;
};
export type UseConversationManagerResult = {
    token?: string | undefined;
    setToken: (token: string) => void;
    conversationId?: string | undefined;
    setConversationId: (conversationId: string) => void;
    botId?: string | undefined;
    setBotId: (botId: string) => void;
    backstory?: string | undefined;
    setBackstory: (backstory: string) => void;
    model?: Model | undefined;
    setModel: (model: Model) => void;
    datasetId?: string | undefined;
    setDatasetId: (datasetId: string) => void;
    skillsetId?: string | undefined;
    setSkillsetId: (skillsetId: string) => void;
    privacy?: string | undefined;
    setPrivacy: (privacy: string) => void;
    moderation?: string | undefined;
    setModeration: (moderation: string) => void;
    text: string;
    setText: (text: string) => void;
    messages: Message[];
    setMessages: (messages: Message[]) => void;
    thinking: boolean;
    setThinking: (thinking: boolean) => void;
    typing: boolean;
    setTyping: (typing: boolean) => void;
    error: any;
    setError: (error: any) => void;
    submit: () => void;
    trigger: (name: string) => void;
    request: (name: string, ...args: any) => void;
};
import { ConversationClient } from '@chatbotkit/sdk';
