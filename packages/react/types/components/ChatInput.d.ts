/**
 * A chat input component that submits when the user presses enter. It also
 * supports a modifier key (ctrl or cmd + enter) to allow the user to enter to
 * submit while still allowing them to enter new lines (shift + enter).
 *
 * @param {{
 *   onSubmit: () => void,
 *   modifierKey?: boolean,
 *   [name: string]: any
 * }} props
 * @returns
 */
export function ChatInput(props: {
    onSubmit: () => void;
    modifierKey?: boolean;
    [name: string]: any;
}): import("react/jsx-runtime").JSX.Element;
export default ChatInput;
