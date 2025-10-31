/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message & {id: string, createdAt: Date}} Message
 */
/**
 * @typedef {{
 *   thinking: boolean,
 *   typing: boolean,
 *   message: Message | null,
 *   messages: Message[],
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
 *     message: Omit<Message,'id'|'createdAt'> & {id?: string, createdAt?: Date},
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
export function conversationManagerStateInitial(state?: Partial<State>): State;
/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, import('react').Dispatch<Action>]}
 */
export function useConversationManagerStateReducer(state?: Partial<State>): [State, import("react").Dispatch<Action>];
export default useConversationManagerStateReducer;
export type Message = import("@chatbotkit/sdk/conversation/v1").Message & {
    id: string;
    createdAt: Date;
};
export type State = {
    thinking: boolean;
    typing: boolean;
    message: Message | null;
    messages: Message[];
};
export type SetThinkingAction = {
    type: "setThinking";
    data: {
        thinking: boolean;
    };
};
export type SetTypingAction = {
    type: "setTyping";
    data: {
        typing: boolean;
    };
};
export type AppendTextAction = {
    type: "appendText";
    data: {
        text: string;
    };
};
export type AppendMessageAction = {
    type: "appendMessage";
    data: {
        message: Omit<Message, "id" | "createdAt"> & {
            id?: string;
            createdAt?: Date;
        };
    };
};
export type Action = SetThinkingAction | SetTypingAction | AppendTextAction | AppendMessageAction;
