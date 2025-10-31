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
     * @note overlapping name with the `secret` property
     * @type {PlatformSecretClient} secret client
     */
    secrets: PlatformSecretClient;
    /**
     * @type {PlatformExampleClient} example client
     */
    example: PlatformExampleClient;
}
export default PlatformClient;
import { ChatBotKitClient } from '../client.js';
import { PlatformModelClient } from './model/index.js';
import { PlatformAbilityClient } from './ability/index.js';
import { PlatformActionClient } from './action/index.js';
import { PlatformSecretClient } from './secret/index.js';
import { PlatformExampleClient } from './example/index.js';
