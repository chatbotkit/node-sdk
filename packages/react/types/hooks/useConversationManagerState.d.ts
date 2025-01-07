/**
 * @typedef {import('./useConversationManagerStateReducer.js').State} State
 *
 * @typedef {{
 *   setThinking: (thinking: import('./useConversationManagerStateReducer.js').SetThinkingAction['data']['thinking']) => void,
 *   setTyping: (typing: import('./useConversationManagerStateReducer.js').SetTypingAction['data']['typing']) => void,
 *   appendText: (text: import('./useConversationManagerStateReducer.js').AppendTextAction['data']['text']) => void,
 *   appendMessage: (message: import('./useConversationManagerStateReducer.js').AppendMessageAction['data']['message']) => void,
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
export type State = import('./useConversationManagerStateReducer.js').State;
export type StateFunctions = {
    setThinking: (thinking: import('./useConversationManagerStateReducer.js').SetThinkingAction['data']['thinking']) => void;
    setTyping: (typing: import('./useConversationManagerStateReducer.js').SetTypingAction['data']['typing']) => void;
    appendText: (text: import('./useConversationManagerStateReducer.js').AppendTextAction['data']['text']) => void;
    appendMessage: (message: import('./useConversationManagerStateReducer.js').AppendMessageAction['data']['message']) => void;
};
