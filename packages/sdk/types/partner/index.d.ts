/**
 * Partner client.
 */
export class PartnerClient extends ChatBotKitClient {
    /**
     * @type {PartnerUserClient} user client
     */
    user: PartnerUserClient;
}
export default PartnerClient;
import { ChatBotKitClient } from '../client.js';
import { PartnerUserClient } from './user/index.js';
