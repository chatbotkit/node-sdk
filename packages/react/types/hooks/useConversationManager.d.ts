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
 * @typedef {string|{name: string, config: ModelConfig}} Model
 */
/**
 * @typedef {{
 *   id: string,
 *   type: 'bot'|'user',
 *   text: string
 * }} Message
 */
/**
 * @param {{
 *   client?: ConversationClient,
 *   endpoint?: string,
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
    endpoint?: string | undefined;
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
    writing: boolean;
    setWriting: import("react").Dispatch<import("react").SetStateAction<boolean>>;
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
    config: ModelConfig;
};
export type Message = {
    id: string;
    type: 'bot' | 'user';
    text: string;
};
import { ConversationClient } from '@chatbotkit/sdk';
