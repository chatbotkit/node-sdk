/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {{id: string} & Message} MessageWithId
 * @typedef {{id?: string} & Message} MessageWithOptionalId
 */
/**
 * @typedef {{
 *   thinking: boolean,
 *   typing: boolean,
 *   message: MessageWithId | null,
 *   messages: MessageWithId[],
 * }} State
 *
 * @typedef {{
 *   type: 'setThinking',
 *   data: {
 *    thinking: boolean,
 *   }
 * }} SetThinkingAction
 *
 * @typedef {{
 *   type: 'setTyping',
 *   data: {
 *     typing: boolean,
 *   }
 * }} SetTypingAction
 *
 * @typedef {{
 *   type: 'appendText',
 *   data: {
 *     text: string,
 *   }
 * }} AppendTextAction
 *
 * @typedef {{
 *   type: 'appendMessage',
 *   data: {
 *     message: MessageWithOptionalId,
 *   }
 * }} AppendMessageAction
 *
 * @typedef {SetThinkingAction|SetTypingAction|AppendTextAction|AppendMessageAction} Action
 */
/**
 * This is the reducer function for the conversation manager. It handles the
 * state of the conversation manager and updates the state based on the actions
 * that are dispatched to it.
 *
 * @param {State} state
 * @param {Action} action
 * @returns {State}
 */
export function conversationManagerStateReducer(state: State, action: Action): State;
/**
 * This function initializes the state of the conversation manager. It sets the
 * initial state of the conversation manager to the given state or to the
 * default state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {State}
 */
export function conversationManagerStateInitial(state?: Partial<State> | undefined): State;
/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, import('react').Dispatch<Action>]}
 */
export function useConversationManagerStateReducer(state?: Partial<State> | undefined): [State, import('react').Dispatch<Action>];
export default useConversationManagerStateReducer;
export type Message = import('@chatbotkit/sdk/conversation/v1').Message;
export type MessageWithId = {
    id: string;
} & Message;
export type MessageWithOptionalId = {
    id?: string;
} & Message;
export type State = {
    thinking: boolean;
    typing: boolean;
    message: MessageWithId | null;
    messages: MessageWithId[];
};
export type SetThinkingAction = {
    type: 'setThinking';
    data: {
        thinking: boolean;
    };
};
export type SetTypingAction = {
    type: 'setTyping';
    data: {
        typing: boolean;
    };
};
export type AppendTextAction = {
    type: 'appendText';
    data: {
        text: string;
    };
};
export type AppendMessageAction = {
    type: 'appendMessage';
    data: {
        message: MessageWithOptionalId;
    };
};
export type Action = SetThinkingAction | SetTypingAction | AppendTextAction | AppendMessageAction;
