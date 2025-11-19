/**
 * Platform content client.
 */
export class PlatformClient extends ChatBotKitClient {
    /**
     * @type {PlatformDocClient} doc client
     */
    doc: PlatformDocClient;
    /**
     * @type {PlatformManualClient} manual client
     */
    manual: PlatformManualClient;
    /**
     * @type {PlatformTutorialClient} tutorial client
     */
    tutorial: PlatformTutorialClient;
}
export default PlatformClient;
import { ChatBotKitClient } from '../../client.js';
import { PlatformDocClient } from './doc/index.js';
import { PlatformManualClient } from './manual/index.js';
import { PlatformTutorialClient } from './tutorial/index.js';
