/**
 * @todo define better types for State and Action
 *
 * @typedef {any} State
 * @typedef {any} Action
 */
/**
 * This is the reducer function for the conversation manager. It handles the
 * state of the conversation manager and updates the state based on the actions
 * that are dispatched to it.
 *
 * @param {Partial<State>} state
 * @param {Action} action
 * @returns {State}
 */
export function conversationManagerStateReducer(state: Partial<State>, action: Action): State;
/**
 * This function initializes the state of the conversation manager. It sets the
 * initial state of the conversation manager to the given state or to the
 * default state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {State}
 */
export function conversationManagerStateInitial(state?: Partial<any> | undefined): State;
/**
 * This is a hook that creates a conversation manager reducer and initializes
 * the state of the conversation manager to the given state or to the default
 * state if no state is given.
 *
 * @param {Partial<State>} [state]
 * @returns {[State, import('react').Dispatch<Action>]}
 */
export function useConversationManagerStateReducer(state?: Partial<any> | undefined): [State, import('react').Dispatch<Action>];
export default useConversationManagerStateReducer;
export type State = any;
export type Action = any;
