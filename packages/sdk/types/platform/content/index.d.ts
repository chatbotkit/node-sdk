/**
 * Platform content client.
 */
export class PlatformContentClient extends ChatBotKitClient {
    /**
     * @type {PlatformContentDocClient} doc client
     */
    doc: PlatformContentDocClient;
    /**
     * @type {PlatformContentManualClient} manual client
     */
    manual: PlatformContentManualClient;
    /**
     * @type {PlatformContentTutorialClient} tutorial client
     */
    tutorial: PlatformContentTutorialClient;
}
export default PlatformContentClient;
import { ChatBotKitClient } from '../../client.js';
import { PlatformContentDocClient } from './doc/index.js';
import { PlatformContentManualClient } from './manual/index.js';
import { PlatformContentTutorialClient } from './tutorial/index.js';
