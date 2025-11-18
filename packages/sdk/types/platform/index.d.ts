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
     * @type {PlatformContentClient} content client
     */
    content: PlatformContentClient;
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
import { PlatformContentClient } from './content/index.js';
import { PlatformSecretClient } from './secret/index.js';
import { PlatformExampleClient } from './example/index.js';
import { PlatformReportClient } from './report/index.js';
