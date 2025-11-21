/**
 * Platform client.
 */
export class PlatformClient extends ChatBotKitClient {
    /**
     * @type {PlatformModelClient} model client
     */
    model: PlatformModelClient;
    /**
     * @type {PlatformAbilityClient} ability client
     */
    ability: PlatformAbilityClient;
    /**
     * @type {PlatformActionClient} action client
     */
    action: PlatformActionClient;
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
    /**
     * @type {PlatformSecretClient} secret client
     */
    secret: PlatformSecretClient;
    /**
     * @type {PlatformExampleClient} example client
     */
    example: PlatformExampleClient;
    /**
     * @type {PlatformReportClient} report client
     */
    report: PlatformReportClient;
}
export default PlatformClient;
import { ChatBotKitClient } from '../client.js';
import { PlatformModelClient } from './model/index.js';
import { PlatformAbilityClient } from './ability/index.js';
import { PlatformActionClient } from './action/index.js';
import { PlatformDocClient } from './doc/index.js';
import { PlatformManualClient } from './manual/index.js';
import { PlatformTutorialClient } from './tutorial/index.js';
import { PlatformSecretClient } from './secret/index.js';
import { PlatformExampleClient } from './example/index.js';
import { PlatformReportClient } from './report/index.js';
