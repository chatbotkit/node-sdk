/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('@chatbotkit/sdk/model/v1').Model} Model
 */
/**
 * @typedef {string} EndpointURL
 * @typedef {(options: any) => AsyncGenerator<any>} EndpointFunction
 */
/**
 * @typedef {{
 *   client?: ConversationClient,
 *   endpoint?: EndpointURL|EndpointFunction,
 *   conversationId?: string,
 *   token?: string,
 *   backstory?: string,
 *   model?: Model,
 *   datasetId?: string,
 *   skillsetId?: string,
 *   privacy?: boolean,
 *   moderation?: boolean
 * }} UseConversationManagerRemoteOptions
 *
 * @typedef {(messages: Message[]) => AsyncGenerator<any,void,any>} UseConversationManagerRemoteResult
 */
/**
 * This hook is used to create a remote function that can be used to complete
 * a conversation.
 *
 * @param {UseConversationManagerRemoteOptions} options
 * @returns {UseConversationManagerRemoteResult}
 * @todo requires refactoring
 */
export function useConversationManagerRemote({ client: _client, endpoint, conversationId, token, backstory, model, datasetId, skillsetId, privacy, moderation, ...rest }: UseConversationManagerRemoteOptions): UseConversationManagerRemoteResult;
export default useConversationManagerRemote;
export type Message = import('@chatbotkit/sdk/conversation/v1').Message;
export type Model = import('@chatbotkit/sdk/model/v1').Model;
export type EndpointURL = string;
export type EndpointFunction = (options: any) => AsyncGenerator<any>;
export type UseConversationManagerRemoteOptions = {
    client?: ConversationClient;
    endpoint?: EndpointURL | EndpointFunction;
    conversationId?: string;
    token?: string;
    backstory?: string;
    model?: Model;
    datasetId?: string;
    skillsetId?: string;
    privacy?: boolean;
    moderation?: boolean;
};
export type UseConversationManagerRemoteResult = (messages: Message[]) => AsyncGenerator<any, void, any>;
import { ConversationClient } from '@chatbotkit/sdk';
