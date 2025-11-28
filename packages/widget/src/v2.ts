// Widget Types (Exported for external use)
// =============================================================================

/**
 * Represents a single message in the widget conversation.
 */
export interface Message {
  /** Unique identifier for the message */
  id: string
  /** The type of message */
  type: 'user' | 'bot' | 'input'
  /** The text content of the message */
  text: string
  /** Optional metadata associated with the message */
  meta?: Record<string, unknown>
}

/**
 * Definition for a single function.
 */
export interface FunctionDefinition {
  /** Description of what the function does */
  description: string
  /** JSON schema parameters for the function */
  parameters: Record<string, unknown>
  /** Handler function called when the engine invokes this function */
  handler: (args: Record<string, unknown>) => unknown | Promise<unknown>
}

/**
 * Contact information that can be assigned to the widget session.
 */
export interface Contact {
  /** Contact's name */
  name?: string
  /** Contact's email address */
  email?: string
  /** Contact's phone number */
  phone?: string
}

/**
 * Arbitrary metadata that can be associated with the widget session.
 */
export type Meta = Record<string, unknown>

/**
 * A notification to display in the widget.
 */
export interface NotificationDefinition {
  /** The notification text to display */
  text: string
}

/**
 * Options for initiating a message.
 */
export interface InitiateMessageOptions {
  /** The text content of the message */
  text?: string
}

/**
 * Options for sending a message.
 */
export interface SendMessageOptions {
  /** The text content of the message */
  text: string
}

/**
 * Options for rendering custom content.
 */
export interface RenderOptions {
  /** Custom render properties */
  [key: string]: unknown
}

/**
 * The ChatBotKit Widget custom element interface (v2).
 * This interface represents the public API of the chatbotkit-widget custom element.
 */
export interface ChatBotKitWidgetElementV2 extends HTMLElement {
  /** Whether the widget is ready for interaction */
  readonly ready: boolean
  /** Promise that resolves when the widget is ready */
  readonly readyPromise: Promise<boolean>

  /** The current conversation messages */
  messages: Message[] | null
  /** The registered engine functions */
  functions: Record<string, FunctionDefinition | null> | null
  /** The contact information */
  contact: Contact | null
  /** The session metadata */
  meta: Meta | null
  /** The current notifications */
  notifications: Record<string, NotificationDefinition | null>

  /** Whether the widget is open */
  open: boolean

  /** Hides the widget */
  hide(): void
  /** Shows the widget */
  show(): void

  /** Restarts the conversation */
  restartConversation(): void
  /** Initiates a new message */
  initiateMessage(props: InitiateMessageOptions): void
  /** Sends a message */
  sendMessage(props: SendMessageOptions): void

  /** Maximizes the widget */
  maximize(): void
  /** Minimizes the widget */
  minimize(): void

  /** Renders custom content */
  render(props: RenderOptions): void

  /** Registers additional functions */
  registerFunctions(functions: Record<string, FunctionDefinition | null>): void
  /** Unregisters functions by name */
  unregisterFunctions(functions: string[]): void

  /** Assigns contact information (legacy method) */
  assignContact(props: Contact): void
}

/**
 * The global chatbotkitWidget object available on window.
 */
export interface ChatBotKitGlobalObject {
  /** The widget instance (null if not yet initialized) */
  readonly instance: ChatBotKitWidgetElementV2 | null
  /** Promise that resolves with the widget instance when ready */
  readonly instancePromise: Promise<ChatBotKitWidgetElementV2>
}

/**
 * Extends the Window interface to include the chatbotkitWidget global.
 */
declare global {
  interface Window {
    chatbotkitWidget: ChatBotKitGlobalObject
    CHATBOTKIT_LOG_WARNING?: boolean
    CHATBOTKIT_WARNING_LOG?: boolean
    CHATBOTKIT_LOG_ERROR?: boolean
    CHATBOTKIT_ERROR_LOG?: boolean
  }

  interface HTMLElementTagNameMap {
    'chatbotkit-widget': ChatBotKitWidgetElementV2
  }
}
