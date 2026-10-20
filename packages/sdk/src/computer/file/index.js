import { ChatBotKitClient } from '../../client.js'
import { readComputerFile, writeComputerFile } from './v1.js'

/**
 * Computer file client.
 */
export class ComputerFileClient extends ChatBotKitClient {
  /**
   * @param {import('../../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)
  }

  /**
   * Reads a text file from the computer.
   *
   * @param {string} computerId
   * @param {import('./v1.js').ComputerFileReadRequest} request
   * @returns {Promise<import('./v1.js').ComputerFileReadResponse>}
   */
  read(computerId, request) {
    return readComputerFile(this, computerId, request)
  }

  /**
   * Writes a text file to the computer.
   *
   * @param {string} computerId
   * @param {import('./v1.js').ComputerFileWriteRequest} request
   * @returns {Promise<import('./v1.js').ComputerFileWriteResponse>}
   */
  write(computerId, request) {
    return writeComputerFile(this, computerId, request)
  }
}

export default ComputerFileClient
