/**
 * @typedef {import('@chatbotkit/sdk/conversation/v1').Message} Message
 *
 * @typedef {import('./useConversationManagerStateReducer.js').State} State
 *
 * @typedef {{
 *   setThinking: (thinking: boolean) => void,
 *   setTyping: (typing: boolean) => void,
 *   appendText: (text: string) => void,
 *   appendMessage: (message: Message) => void
 * }} StateFunctions
 */
/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, StateFunctions]}
 */
export function useConversationManagerState(state?: Partial<import("./useConversationManagerStateReducer.js").State> | undefined): [State, StateFunctions];
export default useConversationManagerState;
export type Message = import('@chatbotkit/sdk/conversation/v1').Message;
export type State = import('./useConversationManagerStateReducer.js').State;
export type StateFunctions = {
    setThinking: (thinking: boolean) => void;
    setTyping: (typing: boolean) => void;
    appendText: (text: string) => void;
    appendMessage: (message: Message) => void;
};
