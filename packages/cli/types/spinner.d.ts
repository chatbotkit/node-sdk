export class Spinner {
    /**
     * @param {string} [text=''] - The text to display before the spinner
     * @param {object} [options={}] - Configuration options
     * @param {string[]} [options.frames] - Custom spinner frames
     * @param {number} [options.interval=80] - Animation interval in milliseconds
     */
    constructor(text?: string, options?: {
        frames?: string[] | undefined;
        interval?: number | undefined;
    });
    text: string;
    frames: string[];
    interval: number;
    frameIndex: number;
    intervalId: NodeJS.Timeout | null;
    isSpinning: boolean;
    /**
     * Start the spinner animation
     */
    start(): void;
    /**
     * Stop the spinner animation and clear it from the terminal
     *
     * @param {boolean} [keepText=true] - Whether to keep the text after stopping
     */
    stop(keepText?: boolean): void;
    /**
     * Update the spinner text while it's running
     *
     * @param {string} text - The new text to display
     */
    setText(text: string): void;
}
