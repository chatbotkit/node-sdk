/**
 * @typedef {import('../client.js').ChatBotKitClient} ChatBotKitClient
 */
/**
 * @template T
 * @template U
 * @typedef {import('../client.js').ResponsePromise<T,U>} ResponsePromise
 */
/**
 * @typedef {{
 *   name?: string,
 *   description?: string,
 *   contactId?: string,
 *   taskId?: string,
 *   botId?: string,
 *   backstory?: string,
 *   model?: string,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   meta?: Record<string,any>
 * }} ConversationOptions
 *
 * @typedef {ConversationOptions & {
 *   id: string,
 *   createdAt: number,
 *   updatedAt: number
 * }} ConversationInstance
 *
 * @typedef {'user'|'bot'|'context'|'instruction'|'backstory'|'activity'} MessageType
 *
 * @typedef {{
 *   type: MessageType,
 *   text: string,
 *   meta?: Record<string,any>
 * }} Message
 *
 * @typedef {{
 *   type: string,
 *   begin: number,
 *   end: number,
 *   text: string,
 *   replacement?: {
 *     begin: number,
 *     end: number,
 *     text: string
 *   }
 * }} Entity
 */
/**
 * @typedef {{cursor?: string, order?: 'desc'|'asc', take?: number, meta?: Record<string,string>}} ConversationListRequest
 *
 * @typedef {{items: ConversationInstance[]}} ConversationListResponse
 *
 * @typedef {{
 *   type: 'item',
 *   data: ConversationInstance
 * }} ConversationListStreamItem
 *
 * @typedef {ConversationListStreamItem} ConversationListStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationListRequest} [request]
 * @returns {ResponsePromise<ConversationListResponse,ConversationListStreamType>}
 */
export function listConversations(client: ChatBotKitClient, request?: ConversationListRequest | undefined): ResponsePromise<ConversationListResponse, ConversationListStreamType>;
/**
 * @typedef {ConversationInstance & {
 * }} ConversationFetchResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationFetchResponse>}
 */
export function fetchConversation(client: ChatBotKitClient, conversationId: string): Promise<ConversationFetchResponse>;
/**
 * @typedef {ConversationOptions & {
 *   model?: import('../model/v1.js').Model
 * }} ConversationCreateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationCreateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCreateRequest} request
 * @returns {Promise<ConversationCreateResponse>}
 */
export function createConversation(client: ChatBotKitClient, request: ConversationCreateRequest): Promise<ConversationCreateResponse>;
/**
 * @typedef {ConversationOptions & {
 *   model?: import('../model/v1.js').Model
 * }} ConversationUpdateRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationUpdateResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpdateRequest} request
 * @returns {Promise<ConversationUpdateResponse>}
 */
export function updateConversation(client: ChatBotKitClient, conversationId: string, request: ConversationUpdateRequest): Promise<ConversationUpdateResponse>;
/**
 * @typedef {{
 *   id: string
 * }} ConversationDeleteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @returns {Promise<ConversationDeleteResponse>}
 */
export function deleteConversation(client: ChatBotKitClient, conversationId: string): Promise<ConversationDeleteResponse>;
/**
 * @typedef {{
 *   botId?: string,
 *   backstory?: string,
 *   model?: import('../model/v1.js').Model,
 *   messages?: Message[],
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean,
 *   functions?: {name: string, description: string, parameters: any}[]
 * } & ({text: string}|{messages: Message[]})} ConversationCompleteRequest
 *
 * @typedef {{
 *   text: string,
 *   usage: { token: number }
 * }} ConversationCompleteResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationCompleteResponse
 * }} ConversationCompleteStreamResult
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationCompleteStreamToken
 *
 * @typedef {{
 *   type: 'message',
 *   data: Message
 * }} ConversationCompleteMessage
 *
 * @typedef {ConversationCompleteStreamResult|ConversationCompleteStreamToken|ConversationCompleteMessage} ConversationCompleteStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {ConversationCompleteRequest} request
 * @returns {ResponsePromise<ConversationCompleteResponse,ConversationCompleteStreamType>}
 */
export function completeConversation(client: ChatBotKitClient, request: ConversationCompleteRequest): ResponsePromise<ConversationCompleteResponse, ConversationCompleteStreamType>;
/**
 * @typedef {{
 *   text: string,
 *   entities?: Entity[]
 * }} ConversationCompleteMessageRequest
 *
 * @typedef {{
 *   id: string,
 *   text: string,
 *   usage: { token: number }
 * }} ConversationCompleteMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationCompleteMessageResponse
 * }} ConversationCompleteMessageStreamResult
 *
 *  @typedef {{
 *   type: 'message',
 *   data: Message
 * }} ConversationCompleteMessageStreamMessage
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationCompleteMessageStreamToken
 *
 * @typedef {ConversationCompleteMessageStreamResult|ConversationCompleteMessageStreamMessage|ConversationCompleteMessageStreamToken} ConversationCompleteMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationCompleteMessageRequest} request
 * @returns {ResponsePromise<ConversationCompleteMessageResponse,ConversationCompleteMessageStreamType>}
 */
export function completeConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationCompleteMessageRequest): ResponsePromise<ConversationCompleteMessageResponse, ConversationCompleteMessageStreamType>;
/**
 * @typedef {{
 *   text?: string,
 *   entities?: Entity[],
 * }} ConversationSendMessageRequest
 *
 * @typedef {{
 *   id: string
 *   entities: Entity[]
 * }} ConversationSendMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationSendMessageResponse
 * }} ConversationSendMessageStreamResult
 *
 * @typedef {ConversationSendMessageStreamResult} ConversationSendMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationSendMessageRequest} request
 * @returns {ResponsePromise<ConversationSendMessageResponse,ConversationSendMessageStreamType>}
 */
export function sendConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationSendMessageRequest): ResponsePromise<ConversationSendMessageResponse, ConversationSendMessageStreamType>;
/**
 * @typedef {{
 * }} ConversationReceiveMessageRequest
 *
 * @typedef {{
 *   id: string,
 *   text: string,
 *   usage: { token: number }
 * }} ConversationReceiveMessageResponse
 *
 * @typedef {{
 *   type: 'result',
 *   data: ConversationReceiveMessageResponse
 * }} ConversationReceiveMessageStreamResult
 *
 * @typedef {{
 *   type: 'message',
 *   data: Message,
 * }} ConversationReceiveMessageStreamMessage
 *
 * @typedef {{
 *   type: 'token',
 *   data: {
 *     token: string
 *   }
 * }} ConversationReceiveMessageStreamToken
 *
 * @typedef {ConversationReceiveMessageStreamResult|ConversationReceiveMessageStreamMessage|ConversationReceiveMessageStreamToken} ConversationReceiveMessageStreamType
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationReceiveMessageRequest} request
 * @returns {ResponsePromise<ConversationReceiveMessageResponse,ConversationReceiveMessageStreamType>}
 */
export function receiveConversationMessage(client: ChatBotKitClient, conversationId: string, request: ConversationReceiveMessageRequest): ResponsePromise<ConversationReceiveMessageResponse, ConversationReceiveMessageStreamType>;
/**
 * @typedef {{
 *   value?: number
 * }} ConversationUpvoteRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationUpvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationUpvoteRequest} request
 * @returns {Promise<ConversationUpvoteResponse>}
 */
export function upvoteConversation(client: ChatBotKitClient, conversationId: string, request: ConversationUpvoteRequest): Promise<ConversationUpvoteResponse>;
/**
 * @typedef {{
 *   value?: number
 * }} ConversationDownvoteRequest
 *
 * @typedef {{
 *   id: string
 * }} ConversationDownvoteResponse
 *
 * @param {ChatBotKitClient} client
 * @param {string} conversationId
 * @param {ConversationDownvoteRequest} request
 * @returns {Promise<ConversationDownvoteResponse>}
 */
export function downvoteConversation(client: ChatBotKitClient, conversationId: string, request: ConversationDownvoteRequest): Promise<ConversationDownvoteResponse>;
export type ChatBotKitClient = import('../client.js').ChatBotKitClient;
export type ResponsePromise<T, U> = import('../client.js').ResponsePromise<T, U>;
export type ConversationOptions = {
    name?: string;
    description?: string;
    contactId?: string;
    taskId?: string;
    botId?: string;
    backstory?: string;
    model?: string;
    datasetId?: string;
    skillsetId?: string;
    meta?: Record<string, any>;
};
export type ConversationInstance = ConversationOptions & {
    id: string;
    createdAt: number;
    updatedAt: number;
};
export type MessageType = 'user' | 'bot' | 'context' | 'instruction' | 'backstory' | 'activity';
export type Message = {
    type: MessageType;
    text: string;
    meta?: Record<string, any>;
};
export type Entity = {
    type: string;
    begin: number;
    end: number;
    text: string;
    replacement?: {
        begin: number;
        end: number;
        text: string;
    };
};
export type ConversationListRequest = {
    cursor?: string;
    order?: 'desc' | 'asc';
    take?: number;
    meta?: Record<string, string>;
};
export type ConversationListResponse = {
    items: ConversationInstance[];
};
export type ConversationListStreamItem = {
    type: 'item';
    data: ConversationInstance;
};
export type ConversationListStreamType = ConversationListStreamItem;
export type ConversationFetchResponse = ConversationInstance & {};
export type ConversationCreateRequest = ConversationOptions & {
    model?: import('../model/v1.js').Model;
};
export type ConversationCreateResponse = {
    id: string;
};
export type ConversationUpdateRequest = ConversationOptions & {
    model?: import('../model/v1.js').Model;
};
export type ConversationUpdateResponse = {
    id: string;
};
export type ConversationDeleteResponse = {
    id: string;
};
export type ConversationCompleteRequest = {
    botId?: string;
    backstory?: string;
    model?: import('../model/v1.js').Model;
    messages?: Message[];
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
    functions?: {
        name: string;
        description: string;
        parameters: any;
    }[];
} & ({
    text: string;
} | {
    messages: Message[];
});
export type ConversationCompleteResponse = {
    text: string;
    usage: {
        token: number;
    };
};
export type ConversationCompleteStreamResult = {
    type: 'result';
    data: ConversationCompleteResponse;
};
export type ConversationCompleteStreamToken = {
    type: 'token';
    data: {
        token: string;
    };
};
export type ConversationCompleteMessage = {
    type: 'message';
    data: Message;
};
export type ConversationCompleteStreamType = ConversationCompleteStreamResult | ConversationCompleteStreamToken | ConversationCompleteMessage;
export type ConversationCompleteMessageRequest = {
    text: string;
    entities?: Entity[];
};
export type ConversationCompleteMessageResponse = {
    id: string;
    text: string;
    usage: {
        token: number;
    };
};
export type ConversationCompleteMessageStreamResult = {
    type: 'result';
    data: ConversationCompleteMessageResponse;
};
export type ConversationCompleteMessageStreamMessage = {
    type: 'message';
    data: Message;
};
export type ConversationCompleteMessageStreamToken = {
    type: 'token';
    data: {
        token: string;
    };
};
export type ConversationCompleteMessageStreamType = ConversationCompleteMessageStreamResult | ConversationCompleteMessageStreamMessage | ConversationCompleteMessageStreamToken;
export type ConversationSendMessageRequest = {
    text?: string;
    entities?: Entity[];
};
export type ConversationSendMessageResponse = {
    id: string;
    entities: Entity[];
};
export type ConversationSendMessageStreamResult = {
    type: 'result';
    data: ConversationSendMessageResponse;
};
export type ConversationSendMessageStreamType = ConversationSendMessageStreamResult;
export type ConversationReceiveMessageRequest = {};
export type ConversationReceiveMessageResponse = {
    id: string;
    text: string;
    usage: {
        token: number;
    };
};
export type ConversationReceiveMessageStreamResult = {
    type: 'result';
    data: ConversationReceiveMessageResponse;
};
export type ConversationReceiveMessageStreamMessage = {
    type: 'message';
    data: Message;
};
export type ConversationReceiveMessageStreamToken = {
    type: 'token';
    data: {
        token: string;
    };
};
export type ConversationReceiveMessageStreamType = ConversationReceiveMessageStreamResult | ConversationReceiveMessageStreamMessage | ConversationReceiveMessageStreamToken;
export type ConversationUpvoteRequest = {
    value?: number;
};
export type ConversationUpvoteResponse = {
    id: string;
};
export type ConversationDownvoteRequest = {
    value?: number;
};
export type ConversationDownvoteResponse = {
    id: string;
};
