/**
 * Platform client.
 */
export class PlatformClient extends ChatBotKitClient {
    /**
     * @type {PlatformModelClient} model client
     */
    user: PlatformModelClient;
    /**
     * @type {PlatformAbilityClient} ability client
     */
    ability: PlatformAbilityClient;
    /**
     * @note overlapping name with the `secret` property
     * @type {PlatformSecretClient} secret client
     */
    secrets: PlatformSecretClient;
}
export default PlatformClient;
import { ChatBotKitClient } from '../client.js';
import { PlatformModelClient } from './model/index.js';
import { PlatformAbilityClient } from './ability/index.js';
import { PlatformSecretClient } from './secret/index.js';
