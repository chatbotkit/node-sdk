export class Spinner {
  /**
   * @param {string} [text=''] - The text to display before the spinner
   * @param {object} [options={}] - Configuration options
   * @param {string[]} [options.frames] - Custom spinner frames
   * @param {number} [options.interval=80] - Animation interval in milliseconds
   */
  constructor(text = '', options = {}) {
    this.text = text

    this.frames = options.frames || [
      '⠋',
      '⠙',
      '⠹',
      '⠸',
      '⠼',
      '⠴',
      '⠦',
      '⠧',
      '⠇',
      '⠏',
    ]

    this.interval = options.interval || 80

    this.frameIndex = 0

    this.intervalId = null

    this.isSpinning = false
  }

  /**
   * Start the spinner animation
   */
  start() {
    if (this.isSpinning) {
      return
    }

    this.isSpinning = true

    this.frameIndex = 0

    this.intervalId = setInterval(() => {
      const frame = this.frames[this.frameIndex]

      process.stdout.write(`\r${this.text}${frame} `)

      this.frameIndex = (this.frameIndex + 1) % this.frames.length
    }, this.interval)
  }

  /**
   * Stop the spinner animation and clear it from the terminal
   *
   * @param {boolean} [keepText=true] - Whether to keep the text after stopping
   */
  stop(keepText = true) {
    if (!this.isSpinning) {
      return
    }

    this.isSpinning = false

    if (this.intervalId) {
      clearInterval(this.intervalId)

      this.intervalId = null
    }

    if (keepText) {
      process.stdout.write(`\r${this.text}`)
    } else {
      // clear the entire line

      process.stdout.write('\r' + ' '.repeat(this.text.length + 2) + '\r')
    }
  }

  /**
   * Update the spinner text while it's running
   *
   * @param {string} text - The new text to display
   */
  setText(text) {
    this.text = text
  }
}
