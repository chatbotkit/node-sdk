/**
 * Platform content client.
 */
export class PlatformContentClient extends ChatBotKitClient {
    /**
     * @type {PlatformContentManualClient} manual client
     */
    manual: PlatformContentManualClient;
}
export default PlatformContentClient;
import { ChatBotKitClient } from '../../client.js';
import { PlatformContentManualClient } from './manual/index.js';
