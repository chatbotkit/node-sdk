import { UserClient } from './user/index.js'
import { ChatBotKitClient } from '../client.js'

export class DatasetClient extends ChatBotKitClient {
  /**
   * @param {import('../client.js').ChatBotKitClientOptions} options
   */
  constructor(options) {
    super(options)

    this.user = new UserClient(options)
  }
}

export default DatasetClient
