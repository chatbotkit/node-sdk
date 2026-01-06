/**
 * @internal
 * @returns {string}
 */
export function getSolutionFolderPath(): string;
/**
 * @internal
 * @param {string} name
 * @returns {string}
 */
export function getSolutionFileName(name: string): string;
/**
 * @internal
 * @param {string} name
 * @returns {string}
 */
export function getSolutionFilePath(name: string): string;
/**
 * @internal
 * @param {string} name
 * @returns {{ fileName: string, filePath: string }}
 */
export function getSolutionFileNameAndPath(name: string): {
    fileName: string;
    filePath: string;
};
/**
 * @internal
 * @param {any} value
 * @returns {any}
 */
export function replaceEnvVars(value: any): any;
/**
 * @template T
 * @param {T[]} array
 * @returns {{[key: string]: T|undefined}}
 */
export function getArrayBackedObject<T>(array: T[]): {
    [key: string]: T | undefined;
};
/**
 * @template T
 * @typedef {{
 *   [K in keyof T]-?: undefined extends T[K]
 *   ? z.ZodOptional<z.ZodType<Exclude<T[K], undefined>>>
 *   : z.ZodType<T[K]>
 * }} ZodSchemaFor
 */
/**
 * The schema for a basic resource configuration.
 */
export const BasicResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    slug?: string | undefined;
    id?: string | undefined;
}, {
    slug?: string | undefined;
    id?: string | undefined;
}>;
/**
 * @typedef {{
 *   slug: z.ZodOptional<z.ZodString>,
 *   id: z.ZodOptional<z.ZodString>,
 * }} BasicResourceConfigSchemaFields
 */
/**
 * @template T
 * @template U
 * @typedef {z.ZodObject<BasicResourceConfigSchemaFields & {
 *   type: z.ZodLiteral<T>,
 *   properties: z.ZodObject<ZodSchemaFor<U>>
 * }>} ResourceConfigSchemaFor
 */
/**
 * The schema for a blueprint resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'blueprint', import('@chatbotkit/sdk/blueprint/v1').BlueprintCreateRequest>}
 */
export const BlueprintResourceConfigSchema: ResourceConfigSchemaFor<"blueprint", import("@chatbotkit/sdk/blueprint/v1").BlueprintCreateRequest>;
/**
 * The schema for a bot resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'bot', import('@chatbotkit/sdk/bot/v1').BotCreateRequest>}
 */
export const BotResourceConfigSchema: ResourceConfigSchemaFor<"bot", import("@chatbotkit/sdk/bot/v1").BotCreateRequest>;
/**
 * The schema for a dataset resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'dataset', import('@chatbotkit/sdk/dataset/v1').DatasetCreateRequest>}
 */
export const DatasetResourceConfigSchema: ResourceConfigSchemaFor<"dataset", import("@chatbotkit/sdk/dataset/v1").DatasetCreateRequest>;
/**
 * The schema for a file resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'file', import('@chatbotkit/sdk/file/v1').FileCreateRequest>}
 */
export const FileResourceConfigSchema: ResourceConfigSchemaFor<"file", import("@chatbotkit/sdk/file/v1").FileCreateRequest>;
/**
 * The schema for a secret resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'secret', import('@chatbotkit/sdk/secret/v1').SecretCreateRequest>}
 */
export const SecretResourceConfigSchema: ResourceConfigSchemaFor<"secret", import("@chatbotkit/sdk/secret/v1").SecretCreateRequest>;
/**
 * The schema for a skillset resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'skillset', import('@chatbotkit/sdk/skillset/v1').SkillsetCreateRequest>}
 */
export const SkillsetResourceConfigSchema: ResourceConfigSchemaFor<"skillset", import("@chatbotkit/sdk/skillset/v1").SkillsetCreateRequest>;
/**
 * The schema for a widget integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'widgetIntegration', import('@chatbotkit/sdk/integration/widget/v1').WidgetIntegrationCreateRequest>}
 */
export const WidgetIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"widgetIntegration", import("@chatbotkit/sdk/integration/widget/v1").WidgetIntegrationCreateRequest>;
/**
 * The schema for a sitemap integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'sitemapIntegration', import('@chatbotkit/sdk/integration/sitemap/v1').SitemapIntegrationCreateRequest>}
 */
export const SitemapIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"sitemapIntegration", import("@chatbotkit/sdk/integration/sitemap/v1").SitemapIntegrationCreateRequest>;
/**
 * The schema for a slack integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'slackIntegration', import('@chatbotkit/sdk/integration/slack/v1').SlackIntegrationCreateRequest>}
 */
export const SlackIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"slackIntegration", import("@chatbotkit/sdk/integration/slack/v1").SlackIntegrationCreateRequest>;
/**
 * The schema for a discord integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'discordIntegration', import('@chatbotkit/sdk/integration/discord/v1').DiscordIntegrationCreateRequest>}
 */
export const DiscordIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"discordIntegration", import("@chatbotkit/sdk/integration/discord/v1").DiscordIntegrationCreateRequest>;
/**
 * The schema for a telegram integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'telegramIntegration', import('@chatbotkit/sdk/integration/telegram/v1').TelegramIntegrationCreateRequest>}
 */
export const TelegramIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"telegramIntegration", import("@chatbotkit/sdk/integration/telegram/v1").TelegramIntegrationCreateRequest>;
/**
 * The schema for a whatsapp integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'whatsappIntegration', import('@chatbotkit/sdk/integration/whatsapp/v1').WhatsAppIntegrationCreateRequest>}
 */
export const WhatsAppIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"whatsappIntegration", import("@chatbotkit/sdk/integration/whatsapp/v1").WhatsAppIntegrationCreateRequest>;
/**
 * The schema for a messenger integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'messengerIntegration', import('@chatbotkit/sdk/integration/messenger/v1').MessengerIntegrationCreateRequest>}
 */
export const MessengerIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"messengerIntegration", import("@chatbotkit/sdk/integration/messenger/v1").MessengerIntegrationCreateRequest>;
/**
 * The schema for a notion integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'notionIntegration', import('@chatbotkit/sdk/integration/notion/v1').NotionIntegrationCreateRequest>}
 */
export const NotionIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"notionIntegration", import("@chatbotkit/sdk/integration/notion/v1").NotionIntegrationCreateRequest>;
/**
 * The schema for an email integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'emailIntegration', import('@chatbotkit/sdk/integration/email/v1').EmailIntegrationCreateRequest>}
 */
export const EmailIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"emailIntegration", import("@chatbotkit/sdk/integration/email/v1").EmailIntegrationCreateRequest>;
/**
 * The schema for a trigger integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'triggerIntegration', import('@chatbotkit/sdk/integration/trigger/v1').TriggerIntegrationCreateRequest>}
 */
export const TriggerIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"triggerIntegration", import("@chatbotkit/sdk/integration/trigger/v1").TriggerIntegrationCreateRequest>;
/**
 * The schema for a support integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'supportIntegration', import('@chatbotkit/sdk/integration/support/v1').SupportIntegrationCreateRequest>}
 */
export const SupportIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"supportIntegration", import("@chatbotkit/sdk/integration/support/v1").SupportIntegrationCreateRequest>;
/**
 * The schema for an extract integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'extractIntegration', import('@chatbotkit/sdk/integration/extract/v1').ExtractIntegrationCreateRequest>}
 */
export const ExtractIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"extractIntegration", import("@chatbotkit/sdk/integration/extract/v1").ExtractIntegrationCreateRequest>;
/**
 * The schema for a mcpserver integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'mcpserverIntegration', import('@chatbotkit/sdk/integration/mcpserver/v1').McpServerIntegrationCreateRequest>}
 */
export const McpServerIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"mcpserverIntegration", import("@chatbotkit/sdk/integration/mcpserver/v1").McpServerIntegrationCreateRequest>;
/**
 * The schema for a twilio integration resource configuration.
 *
 * @type {ResourceConfigSchemaFor<'twilioIntegration', import('@chatbotkit/sdk/integration/twilio/v1').TwilioIntegrationCreateRequest>}
 */
export const TwilioIntegrationResourceConfigSchema: ResourceConfigSchemaFor<"twilioIntegration", import("@chatbotkit/sdk/integration/twilio/v1").TwilioIntegrationCreateRequest>;
/**
 * The schema for a resource configuration.
 */
export const ResourceConfigSchema: z.ZodUnion<[ResourceConfigSchemaFor<"blueprint", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    visibility?: "private" | "protected" | "public";
}>, ResourceConfigSchemaFor<"bot", import("@chatbotkit/sdk/bot/v1").BotCreateRequest>, ResourceConfigSchemaFor<"dataset", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    store?: string;
    reranker?: string;
    recordMaxTokens?: number;
    searchMinScore?: number;
    searchMaxRecords?: number;
    searchMaxTokens?: number;
    matchInstruction?: string;
    mismatchInstruction?: string;
    separators?: string;
    visibility?: "private" | "protected" | "public";
}>, ResourceConfigSchemaFor<"file", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    visibility?: "private" | "protected" | "public";
}>, ResourceConfigSchemaFor<"secret", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    kind?: "shared" | "personal";
    type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference";
    value?: string;
    config?: {
        [key: string]: unknown;
    };
    visibility?: "private" | "protected" | "public";
}>, ResourceConfigSchemaFor<"skillset", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    visibility?: "private" | "protected" | "public";
}>, ResourceConfigSchemaFor<"widgetIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    theme?: string;
    layout?: string;
    title?: string;
    intro?: string;
    initial?: string;
    placeholder?: string;
    origin?: string;
    sessionDuration?: number;
    language?: string;
    plugins?: string;
    stream?: boolean;
    verbose?: boolean;
    tools?: boolean;
    unfurl?: boolean;
    math?: boolean;
    carousel?: boolean;
    form?: boolean;
    attachments?: boolean;
    autoScroll?: boolean;
    startFirst?: boolean;
    contactCollection?: boolean;
    exportConversation?: boolean;
    restartConversation?: boolean;
    maximize?: boolean;
    messagePeek?: boolean;
    voiceIn?: boolean;
    voiceOut?: boolean;
    poweredBy?: boolean;
}>, ResourceConfigSchemaFor<"sitemapIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    datasetId?: string;
    url?: string;
    glob?: string;
    selectors?: string;
    javascript?: boolean;
    syncSchedule?: string;
    expiresIn?: number;
}>, ResourceConfigSchemaFor<"slackIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    signingSecret?: string;
    botToken?: string;
    userToken?: string;
    sessionDuration?: number;
    contactCollection?: boolean;
    references?: boolean;
    ratings?: boolean;
    visibleMessages?: number;
    autoRespond?: string;
}>, ResourceConfigSchemaFor<"discordIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    appId?: string;
    botToken?: string;
    publicKey?: string;
    handle?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
}>, ResourceConfigSchemaFor<"telegramIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    botToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
}>, ResourceConfigSchemaFor<"whatsappIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    phoneNumberId?: string;
    accessToken?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
}>, ResourceConfigSchemaFor<"messengerIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    accessToken?: string;
    sessionDuration?: number;
    attachments?: boolean;
}>, ResourceConfigSchemaFor<"notionIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    datasetId?: string;
    token?: string;
    syncSchedule?: string;
    expiresIn?: number;
}>, ResourceConfigSchemaFor<"emailIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
    attachments?: boolean;
}>, ResourceConfigSchemaFor<"triggerIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    authenticate?: boolean;
    triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly";
    sessionDuration?: number;
}>, ResourceConfigSchemaFor<"supportIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    email?: string;
}>, ResourceConfigSchemaFor<"extractIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    schema?: {
        [key: string]: unknown;
    };
    request?: string;
}>, ResourceConfigSchemaFor<"mcpserverIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    skillsetId?: string;
}>, ResourceConfigSchemaFor<"twilioIntegration", {
    name?: string;
    description?: string;
    meta?: {
        [key: string]: unknown;
    };
    blueprintId?: string;
    botId?: string;
    contactCollection?: boolean;
    sessionDuration?: number;
}>]>;
/**
 * The schema for a solution configuration.
 */
export const SolutionConfigSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    resources: z.ZodArray<z.ZodUnion<[ResourceConfigSchemaFor<"blueprint", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        visibility?: "private" | "protected" | "public";
    }>, ResourceConfigSchemaFor<"bot", import("@chatbotkit/sdk/bot/v1").BotCreateRequest>, ResourceConfigSchemaFor<"dataset", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        store?: string;
        reranker?: string;
        recordMaxTokens?: number;
        searchMinScore?: number;
        searchMaxRecords?: number;
        searchMaxTokens?: number;
        matchInstruction?: string;
        mismatchInstruction?: string;
        separators?: string;
        visibility?: "private" | "protected" | "public";
    }>, ResourceConfigSchemaFor<"file", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        visibility?: "private" | "protected" | "public";
    }>, ResourceConfigSchemaFor<"secret", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        kind?: "shared" | "personal";
        type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference";
        value?: string;
        config?: {
            [key: string]: unknown;
        };
        visibility?: "private" | "protected" | "public";
    }>, ResourceConfigSchemaFor<"skillset", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        visibility?: "private" | "protected" | "public";
    }>, ResourceConfigSchemaFor<"widgetIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        theme?: string;
        layout?: string;
        title?: string;
        intro?: string;
        initial?: string;
        placeholder?: string;
        origin?: string;
        sessionDuration?: number;
        language?: string;
        plugins?: string;
        stream?: boolean;
        verbose?: boolean;
        tools?: boolean;
        unfurl?: boolean;
        math?: boolean;
        carousel?: boolean;
        form?: boolean;
        attachments?: boolean;
        autoScroll?: boolean;
        startFirst?: boolean;
        contactCollection?: boolean;
        exportConversation?: boolean;
        restartConversation?: boolean;
        maximize?: boolean;
        messagePeek?: boolean;
        voiceIn?: boolean;
        voiceOut?: boolean;
        poweredBy?: boolean;
    }>, ResourceConfigSchemaFor<"sitemapIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        datasetId?: string;
        url?: string;
        glob?: string;
        selectors?: string;
        javascript?: boolean;
        syncSchedule?: string;
        expiresIn?: number;
    }>, ResourceConfigSchemaFor<"slackIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        signingSecret?: string;
        botToken?: string;
        userToken?: string;
        sessionDuration?: number;
        contactCollection?: boolean;
        references?: boolean;
        ratings?: boolean;
        visibleMessages?: number;
        autoRespond?: string;
    }>, ResourceConfigSchemaFor<"discordIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        appId?: string;
        botToken?: string;
        publicKey?: string;
        handle?: string;
        contactCollection?: boolean;
        sessionDuration?: number;
    }>, ResourceConfigSchemaFor<"telegramIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        botToken?: string;
        contactCollection?: boolean;
        sessionDuration?: number;
        attachments?: boolean;
    }>, ResourceConfigSchemaFor<"whatsappIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        phoneNumberId?: string;
        accessToken?: string;
        contactCollection?: boolean;
        sessionDuration?: number;
        attachments?: boolean;
    }>, ResourceConfigSchemaFor<"messengerIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        accessToken?: string;
        sessionDuration?: number;
        attachments?: boolean;
    }>, ResourceConfigSchemaFor<"notionIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        datasetId?: string;
        token?: string;
        syncSchedule?: string;
        expiresIn?: number;
    }>, ResourceConfigSchemaFor<"emailIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        contactCollection?: boolean;
        sessionDuration?: number;
        attachments?: boolean;
    }>, ResourceConfigSchemaFor<"triggerIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        authenticate?: boolean;
        triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly";
        sessionDuration?: number;
    }>, ResourceConfigSchemaFor<"supportIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        email?: string;
    }>, ResourceConfigSchemaFor<"extractIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        schema?: {
            [key: string]: unknown;
        };
        request?: string;
    }>, ResourceConfigSchemaFor<"mcpserverIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        skillsetId?: string;
    }>, ResourceConfigSchemaFor<"twilioIntegration", {
        name?: string;
        description?: string;
        meta?: {
            [key: string]: unknown;
        };
        blueprintId?: string;
        botId?: string;
        contactCollection?: boolean;
        sessionDuration?: number;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    version: 1;
    resources: ({
        type: "blueprint";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "bot";
        properties: {
            model?: import("@chatbotkit/sdk/model/v1").Model | undefined;
            backstory?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            privacy?: boolean | undefined;
            moderation?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "dataset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            store?: string | undefined;
            reranker?: string | undefined;
            recordMaxTokens?: number | undefined;
            searchMinScore?: number | undefined;
            searchMaxRecords?: number | undefined;
            searchMaxTokens?: number | undefined;
            matchInstruction?: string | undefined;
            mismatchInstruction?: string | undefined;
            separators?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "file";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "secret";
        properties: {
            value?: string | undefined;
            type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference" | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            config?: {
                [key: string]: unknown;
            } | undefined;
            kind?: "shared" | "personal" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "skillset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "widgetIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            tools?: boolean | undefined;
            stream?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            theme?: string | undefined;
            layout?: string | undefined;
            title?: string | undefined;
            intro?: string | undefined;
            initial?: string | undefined;
            placeholder?: string | undefined;
            origin?: string | undefined;
            sessionDuration?: number | undefined;
            language?: string | undefined;
            plugins?: string | undefined;
            verbose?: boolean | undefined;
            unfurl?: boolean | undefined;
            math?: boolean | undefined;
            carousel?: boolean | undefined;
            form?: boolean | undefined;
            autoScroll?: boolean | undefined;
            startFirst?: boolean | undefined;
            contactCollection?: boolean | undefined;
            exportConversation?: boolean | undefined;
            restartConversation?: boolean | undefined;
            maximize?: boolean | undefined;
            messagePeek?: boolean | undefined;
            voiceIn?: boolean | undefined;
            voiceOut?: boolean | undefined;
            poweredBy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "sitemapIntegration";
        properties: {
            datasetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            url?: string | undefined;
            glob?: string | undefined;
            selectors?: string | undefined;
            javascript?: boolean | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "slackIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            signingSecret?: string | undefined;
            botToken?: string | undefined;
            userToken?: string | undefined;
            references?: boolean | undefined;
            ratings?: boolean | undefined;
            visibleMessages?: number | undefined;
            autoRespond?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "discordIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
            appId?: string | undefined;
            publicKey?: string | undefined;
            handle?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "telegramIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "whatsappIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            phoneNumberId?: string | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "messengerIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "notionIntegration";
        properties: {
            datasetId?: string | undefined;
            token?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "emailIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "triggerIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            authenticate?: boolean | undefined;
            triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "supportIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            email?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "extractIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            schema?: {
                [key: string]: unknown;
            } | undefined;
            request?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "mcpserverIntegration";
        properties: {
            skillsetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "twilioIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    })[];
}, {
    version: 1;
    resources: ({
        type: "blueprint";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "bot";
        properties: {
            model?: import("@chatbotkit/sdk/model/v1").Model | undefined;
            backstory?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            privacy?: boolean | undefined;
            moderation?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "dataset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            store?: string | undefined;
            reranker?: string | undefined;
            recordMaxTokens?: number | undefined;
            searchMinScore?: number | undefined;
            searchMaxRecords?: number | undefined;
            searchMaxTokens?: number | undefined;
            matchInstruction?: string | undefined;
            mismatchInstruction?: string | undefined;
            separators?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "file";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "secret";
        properties: {
            value?: string | undefined;
            type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference" | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            config?: {
                [key: string]: unknown;
            } | undefined;
            kind?: "shared" | "personal" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "skillset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "widgetIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            tools?: boolean | undefined;
            stream?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            theme?: string | undefined;
            layout?: string | undefined;
            title?: string | undefined;
            intro?: string | undefined;
            initial?: string | undefined;
            placeholder?: string | undefined;
            origin?: string | undefined;
            sessionDuration?: number | undefined;
            language?: string | undefined;
            plugins?: string | undefined;
            verbose?: boolean | undefined;
            unfurl?: boolean | undefined;
            math?: boolean | undefined;
            carousel?: boolean | undefined;
            form?: boolean | undefined;
            autoScroll?: boolean | undefined;
            startFirst?: boolean | undefined;
            contactCollection?: boolean | undefined;
            exportConversation?: boolean | undefined;
            restartConversation?: boolean | undefined;
            maximize?: boolean | undefined;
            messagePeek?: boolean | undefined;
            voiceIn?: boolean | undefined;
            voiceOut?: boolean | undefined;
            poweredBy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "sitemapIntegration";
        properties: {
            datasetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            url?: string | undefined;
            glob?: string | undefined;
            selectors?: string | undefined;
            javascript?: boolean | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "slackIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            signingSecret?: string | undefined;
            botToken?: string | undefined;
            userToken?: string | undefined;
            references?: boolean | undefined;
            ratings?: boolean | undefined;
            visibleMessages?: number | undefined;
            autoRespond?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "discordIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
            appId?: string | undefined;
            publicKey?: string | undefined;
            handle?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "telegramIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "whatsappIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            phoneNumberId?: string | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "messengerIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "notionIntegration";
        properties: {
            datasetId?: string | undefined;
            token?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "emailIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "triggerIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            authenticate?: boolean | undefined;
            triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "supportIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            email?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "extractIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            schema?: {
                [key: string]: unknown;
            } | undefined;
            request?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "mcpserverIntegration";
        properties: {
            skillsetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "twilioIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    })[];
}>;
/**
 * @typedef {z.infer<typeof SolutionConfigSchema>} SolutionConfig
 * @typedef {z.infer<typeof ResourceConfigSchema>} ResourceConfig
 */
/**
 * Represents a resource.
 */
export class Resource {
    /**
     * @param {ResourceConfig} config
     */
    constructor(config: ResourceConfig);
    config: {
        type: "blueprint";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "bot";
        properties: {
            model?: import("@chatbotkit/sdk/model/v1").Model | undefined;
            backstory?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            privacy?: boolean | undefined;
            moderation?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "dataset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            store?: string | undefined;
            reranker?: string | undefined;
            recordMaxTokens?: number | undefined;
            searchMinScore?: number | undefined;
            searchMaxRecords?: number | undefined;
            searchMaxTokens?: number | undefined;
            matchInstruction?: string | undefined;
            mismatchInstruction?: string | undefined;
            separators?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "file";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "secret";
        properties: {
            value?: string | undefined;
            type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference" | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
            config?: {
                [key: string]: unknown;
            } | undefined;
            kind?: "shared" | "personal" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "skillset";
        properties: {
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            visibility?: "private" | "protected" | "public" | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "widgetIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            tools?: boolean | undefined;
            stream?: boolean | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            theme?: string | undefined;
            layout?: string | undefined;
            title?: string | undefined;
            intro?: string | undefined;
            initial?: string | undefined;
            placeholder?: string | undefined;
            origin?: string | undefined;
            sessionDuration?: number | undefined;
            language?: string | undefined;
            plugins?: string | undefined;
            verbose?: boolean | undefined;
            unfurl?: boolean | undefined;
            math?: boolean | undefined;
            carousel?: boolean | undefined;
            form?: boolean | undefined;
            autoScroll?: boolean | undefined;
            startFirst?: boolean | undefined;
            contactCollection?: boolean | undefined;
            exportConversation?: boolean | undefined;
            restartConversation?: boolean | undefined;
            maximize?: boolean | undefined;
            messagePeek?: boolean | undefined;
            voiceIn?: boolean | undefined;
            voiceOut?: boolean | undefined;
            poweredBy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "sitemapIntegration";
        properties: {
            datasetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            url?: string | undefined;
            glob?: string | undefined;
            selectors?: string | undefined;
            javascript?: boolean | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "slackIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            signingSecret?: string | undefined;
            botToken?: string | undefined;
            userToken?: string | undefined;
            references?: boolean | undefined;
            ratings?: boolean | undefined;
            visibleMessages?: number | undefined;
            autoRespond?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "discordIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
            appId?: string | undefined;
            publicKey?: string | undefined;
            handle?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "telegramIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            botToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "whatsappIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
            phoneNumberId?: string | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "messengerIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            accessToken?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "notionIntegration";
        properties: {
            datasetId?: string | undefined;
            token?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            syncSchedule?: string | undefined;
            expiresIn?: number | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "emailIntegration";
        properties: {
            attachments?: boolean | undefined;
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "triggerIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            authenticate?: boolean | undefined;
            triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly" | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "supportIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            email?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "extractIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            schema?: {
                [key: string]: unknown;
            } | undefined;
            request?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "mcpserverIntegration";
        properties: {
            skillsetId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    } | {
        type: "twilioIntegration";
        properties: {
            botId?: string | undefined;
            name?: string | undefined;
            description?: string | undefined;
            meta?: {
                [key: string]: unknown;
            } | undefined;
            blueprintId?: string | undefined;
            sessionDuration?: number | undefined;
            contactCollection?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
    };
    /**
     * @returns {string}
     */
    get type(): string;
    /**
     * @returns {string}
     */
    get slug(): string;
    /**
     * @returns {string|undefined}
     */
    get id(): string | undefined;
    /**
     * @returns {string|undefined}
     */
    get name(): string | undefined;
    /**
     * @returns {string|undefined}
     */
    get description(): string | undefined;
    /**
     * @returns {import('@chatbotkit/sdk').ChatBotKit}
     */
    get baseClient(): import("@chatbotkit/sdk").ChatBotKit;
    /**
     * Get the resource client.
     *
     * @returns {{
     *   create: (properties: Record<string,any>) => Promise<{id: string}>,
     *   update: (id: string, properties: Record<string,any>) => Promise<{id: string}>
     * }}
     */
    get client(): {
        create: (properties: Record<string, any>) => Promise<{
            id: string;
        }>;
        update: (id: string, properties: Record<string, any>) => Promise<{
            id: string;
        }>;
    };
    /**
     * Get the properties to use for create operations.
     * Override this method in subclasses to filter properties for creates.
     *
     * @returns {Record<string, any>}
     */
    get createProperties(): Record<string, any>;
    /**
     * Get the properties to use for update operations.
     * Override this method in subclasses to filter properties for updates.
     *
     * @returns {Record<string, any>}
     */
    get updateProperties(): Record<string, any>;
    /**
     * Sync the resource.
     *
     * @returns {Promise<void>}
     */
    sync(): Promise<void>;
}
/**
 * Represents a blueprint resource.
 */
export class BlueprintResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').BlueprintClient}
     */
    override get client(): import("@chatbotkit/sdk").BlueprintClient;
}
/**
 * Represents a bot resource.
 */
export class BotResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').BotClient}
     */
    override get client(): import("@chatbotkit/sdk").BotClient;
}
/**
 * Represents a dataset resource.
 */
export class DatasetResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').DatasetClient}
     */
    override get client(): import("@chatbotkit/sdk").DatasetClient;
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/dataset/v1').DatasetUpdateRequest}
     */
    override get updateProperties(): import("@chatbotkit/sdk/dataset/v1").DatasetUpdateRequest;
}
/**
 * Represents a file resource.
 */
export class FileResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').FileClient}
     */
    override get client(): import("@chatbotkit/sdk").FileClient;
}
/**
 * Represents a secret resource.
 */
export class SecretResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').SecretClient}
     */
    override get client(): import("@chatbotkit/sdk").SecretClient;
}
/**
 * Represents a skillset resource.
 */
export class SkillsetResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk').SkillsetClient}
     */
    override get client(): import("@chatbotkit/sdk").SkillsetClient;
}
/**
 * Represents a widget integration resource.
 */
export class WidgetIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/widget').WidgetIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/widget").WidgetIntegrationClient;
}
/**
 * Represents a sitemap integration resource.
 */
export class SitemapIntegrationResource extends Resource {
    /**
     * @returns {import('@chatbotkit/sdk/integration/sitemap').SitemapIntegrationClient}
     */
    get client(): import("@chatbotkit/sdk/integration/sitemap").SitemapIntegrationClient;
}
/**
 * Represents a slack integration resource.
 */
export class SlackIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/slack').SlackIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/slack").SlackIntegrationClient;
}
/**
 * Represents a discord integration resource.
 */
export class DiscordIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/discord').DiscordIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/discord").DiscordIntegrationClient;
}
/**
 * Represents a telegram integration resource.
 */
export class TelegramIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/telegram').TelegramIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/telegram").TelegramIntegrationClient;
}
/**
 * Represents a whatsapp integration resource.
 */
export class WhatsAppIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/whatsapp').WhatsAppIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/whatsapp").WhatsAppIntegrationClient;
}
/**
 * Represents a messenger integration resource.
 */
export class MessengerIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/messenger').MessengerIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/messenger").MessengerIntegrationClient;
}
/**
 * Represents a notion integration resource.
 */
export class NotionIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/notion').NotionIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/notion").NotionIntegrationClient;
}
/**
 * Represents an email integration resource.
 */
export class EmailIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/email').EmailIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/email").EmailIntegrationClient;
}
/**
 * Represents a trigger integration resource.
 */
export class TriggerIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/trigger').TriggerIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/trigger").TriggerIntegrationClient;
}
/**
 * Represents a support integration resource.
 */
export class SupportIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/support').SupportIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/support").SupportIntegrationClient;
}
/**
 * Represents an extract integration resource.
 */
export class ExtractIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/extract').ExtractIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/extract").ExtractIntegrationClient;
}
/**
 * Represents a mcpserver integration resource.
 */
export class McpServerIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/mcpserver').McpServerIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/mcpserver").McpServerIntegrationClient;
}
/**
 * Represents a twilio integration resource.
 */
export class TwilioIntegrationResource extends Resource {
    /**
     * @override
     * @returns {import('@chatbotkit/sdk/integration/twilio').TwilioIntegrationClient}
     */
    override get client(): import("@chatbotkit/sdk/integration/twilio").TwilioIntegrationClient;
}
/**
 * Represents a solution.
 */
export class Solution {
    /**
     * @param {SolutionConfig} config
     */
    constructor(config: SolutionConfig);
    config: {
        version: 1;
        resources: ({
            type: "blueprint";
            properties: {
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "bot";
            properties: {
                model?: import("@chatbotkit/sdk/model/v1").Model | undefined;
                backstory?: string | undefined;
                datasetId?: string | undefined;
                skillsetId?: string | undefined;
                privacy?: boolean | undefined;
                moderation?: boolean | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
                blueprintId?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "dataset";
            properties: {
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
                blueprintId?: string | undefined;
                store?: string | undefined;
                reranker?: string | undefined;
                recordMaxTokens?: number | undefined;
                searchMinScore?: number | undefined;
                searchMaxRecords?: number | undefined;
                searchMaxTokens?: number | undefined;
                matchInstruction?: string | undefined;
                mismatchInstruction?: string | undefined;
                separators?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "file";
            properties: {
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
                blueprintId?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "secret";
            properties: {
                value?: string | undefined;
                type?: "plain" | "basic" | "bearer" | "oauth" | "template" | "reference" | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
                blueprintId?: string | undefined;
                config?: {
                    [key: string]: unknown;
                } | undefined;
                kind?: "shared" | "personal" | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "skillset";
            properties: {
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                visibility?: "private" | "protected" | "public" | undefined;
                blueprintId?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "widgetIntegration";
            properties: {
                attachments?: boolean | undefined;
                botId?: string | undefined;
                tools?: boolean | undefined;
                stream?: boolean | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                theme?: string | undefined;
                layout?: string | undefined;
                title?: string | undefined;
                intro?: string | undefined;
                initial?: string | undefined;
                placeholder?: string | undefined;
                origin?: string | undefined;
                sessionDuration?: number | undefined;
                language?: string | undefined;
                plugins?: string | undefined;
                verbose?: boolean | undefined;
                unfurl?: boolean | undefined;
                math?: boolean | undefined;
                carousel?: boolean | undefined;
                form?: boolean | undefined;
                autoScroll?: boolean | undefined;
                startFirst?: boolean | undefined;
                contactCollection?: boolean | undefined;
                exportConversation?: boolean | undefined;
                restartConversation?: boolean | undefined;
                maximize?: boolean | undefined;
                messagePeek?: boolean | undefined;
                voiceIn?: boolean | undefined;
                voiceOut?: boolean | undefined;
                poweredBy?: boolean | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "sitemapIntegration";
            properties: {
                datasetId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                url?: string | undefined;
                glob?: string | undefined;
                selectors?: string | undefined;
                javascript?: boolean | undefined;
                syncSchedule?: string | undefined;
                expiresIn?: number | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "slackIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
                signingSecret?: string | undefined;
                botToken?: string | undefined;
                userToken?: string | undefined;
                references?: boolean | undefined;
                ratings?: boolean | undefined;
                visibleMessages?: number | undefined;
                autoRespond?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "discordIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
                botToken?: string | undefined;
                appId?: string | undefined;
                publicKey?: string | undefined;
                handle?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "telegramIntegration";
            properties: {
                attachments?: boolean | undefined;
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
                botToken?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "whatsappIntegration";
            properties: {
                attachments?: boolean | undefined;
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
                phoneNumberId?: string | undefined;
                accessToken?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "messengerIntegration";
            properties: {
                attachments?: boolean | undefined;
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                accessToken?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "notionIntegration";
            properties: {
                datasetId?: string | undefined;
                token?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                syncSchedule?: string | undefined;
                expiresIn?: number | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "emailIntegration";
            properties: {
                attachments?: boolean | undefined;
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "triggerIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                authenticate?: boolean | undefined;
                triggerSchedule?: "never" | "quarterhourly" | "halfhourly" | "hourly" | "daily" | "weekly" | "monthly" | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "supportIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                email?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "extractIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                schema?: {
                    [key: string]: unknown;
                } | undefined;
                request?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "mcpserverIntegration";
            properties: {
                skillsetId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        } | {
            type: "twilioIntegration";
            properties: {
                botId?: string | undefined;
                name?: string | undefined;
                description?: string | undefined;
                meta?: {
                    [key: string]: unknown;
                } | undefined;
                blueprintId?: string | undefined;
                sessionDuration?: number | undefined;
                contactCollection?: boolean | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
        })[];
    };
    /**
     * @returns {import('@chatbotkit/sdk').ChatBotKit}
     */
    get baseClient(): import("@chatbotkit/sdk").ChatBotKit;
    /**
     * Get the resources.
     *
     * @returns {(BlueprintResource|BotResource|DatasetResource|FileResource|SecretResource|SkillsetResource|WidgetIntegrationResource|SitemapIntegrationResource|SlackIntegrationResource|DiscordIntegrationResource|TelegramIntegrationResource|WhatsAppIntegrationResource|MessengerIntegrationResource|NotionIntegrationResource|EmailIntegrationResource|TriggerIntegrationResource|SupportIntegrationResource|ExtractIntegrationResource|McpServerIntegrationResource|TwilioIntegrationResource)[]}
     */
    get resources(): (BlueprintResource | BotResource | DatasetResource | FileResource | SecretResource | SkillsetResource | WidgetIntegrationResource | SitemapIntegrationResource | SlackIntegrationResource | DiscordIntegrationResource | TelegramIntegrationResource | WhatsAppIntegrationResource | MessengerIntegrationResource | NotionIntegrationResource | EmailIntegrationResource | TriggerIntegrationResource | SupportIntegrationResource | ExtractIntegrationResource | McpServerIntegrationResource | TwilioIntegrationResource)[];
    /**
     * @returns {BlueprintResource[]}
     */
    get blueprints(): BlueprintResource[];
    /**
     * @returns {{[key: string]: BlueprintResource|undefined}}
     */
    get blueprint(): {
        [key: string]: BlueprintResource | undefined;
    };
    /**
     * @returns {BotResource[]}
     */
    get bots(): BotResource[];
    /**
     * @returns {{[key: string]: BotResource|undefined}}
     */
    get bot(): {
        [key: string]: BotResource | undefined;
    };
    /**
     * @returns {DatasetResource[]}
     */
    get datasets(): DatasetResource[];
    /**
     * @returns {{[key: string]: DatasetResource|undefined}}
     */
    get dataset(): {
        [key: string]: DatasetResource | undefined;
    };
    /**
     * @returns {FileResource[]}
     */
    get files(): FileResource[];
    /**
     * @returns {{[key: string]: FileResource|undefined}}
     */
    get file(): {
        [key: string]: FileResource | undefined;
    };
    /**
     * @returns {SecretResource[]}
     */
    get secrets(): SecretResource[];
    /**
     * @returns {{[key: string]: SecretResource|undefined}}
     */
    get secret(): {
        [key: string]: SecretResource | undefined;
    };
    /**
     * @returns {SkillsetResource[]}
     */
    get skillsets(): SkillsetResource[];
    /**
     * @returns {{[key: string]: SkillsetResource|undefined}}
     */
    get skillset(): {
        [key: string]: SkillsetResource | undefined;
    };
    /**
     * @returns {WidgetIntegrationResource[]}
     */
    get widgetIntegrations(): WidgetIntegrationResource[];
    /**
     * @returns {{[key: string]: WidgetIntegrationResource|undefined}}
     */
    get widgetIntegration(): {
        [key: string]: WidgetIntegrationResource | undefined;
    };
    /**
     * @returns {SitemapIntegrationResource[]}
     */
    get sitemapIntegrations(): SitemapIntegrationResource[];
    /**
     * @returns {{[key: string]: SitemapIntegrationResource|undefined}}
     */
    get sitemapIntegration(): {
        [key: string]: SitemapIntegrationResource | undefined;
    };
    /**
     * @returns {SlackIntegrationResource[]}
     */
    get slackIntegrations(): SlackIntegrationResource[];
    /**
     * @returns {{[key: string]: SlackIntegrationResource|undefined}}
     */
    get slackIntegration(): {
        [key: string]: SlackIntegrationResource | undefined;
    };
    /**
     * @returns {DiscordIntegrationResource[]}
     */
    get discordIntegrations(): DiscordIntegrationResource[];
    /**
     * @returns {{[key: string]: DiscordIntegrationResource|undefined}}
     */
    get discordIntegration(): {
        [key: string]: DiscordIntegrationResource | undefined;
    };
    /**
     * @returns {TelegramIntegrationResource[]}
     */
    get telegramIntegrations(): TelegramIntegrationResource[];
    /**
     * @returns {{[key: string]: TelegramIntegrationResource|undefined}}
     */
    get telegramIntegration(): {
        [key: string]: TelegramIntegrationResource | undefined;
    };
    /**
     * @returns {WhatsAppIntegrationResource[]}
     */
    get whatsappIntegrations(): WhatsAppIntegrationResource[];
    /**
     * @returns {{[key: string]: WhatsAppIntegrationResource|undefined}}
     */
    get whatsappIntegration(): {
        [key: string]: WhatsAppIntegrationResource | undefined;
    };
    /**
     * @returns {MessengerIntegrationResource[]}
     */
    get messengerIntegrations(): MessengerIntegrationResource[];
    /**
     * @returns {{[key: string]: MessengerIntegrationResource|undefined}}
     */
    get messengerIntegration(): {
        [key: string]: MessengerIntegrationResource | undefined;
    };
    /**
     * @returns {NotionIntegrationResource[]}
     */
    get notionIntegrations(): NotionIntegrationResource[];
    /**
     * @returns {{[key: string]: NotionIntegrationResource|undefined}}
     */
    get notionIntegration(): {
        [key: string]: NotionIntegrationResource | undefined;
    };
    /**
     * @returns {EmailIntegrationResource[]}
     */
    get emailIntegrations(): EmailIntegrationResource[];
    /**
     * @returns {{[key: string]: EmailIntegrationResource|undefined}}
     */
    get emailIntegration(): {
        [key: string]: EmailIntegrationResource | undefined;
    };
    /**
     * @returns {TriggerIntegrationResource[]}
     */
    get triggerIntegrations(): TriggerIntegrationResource[];
    /**
     * @returns {{[key: string]: TriggerIntegrationResource|undefined}}
     */
    get triggerIntegration(): {
        [key: string]: TriggerIntegrationResource | undefined;
    };
    /**
     * @returns {SupportIntegrationResource[]}
     */
    get supportIntegrations(): SupportIntegrationResource[];
    /**
     * @returns {{[key: string]: SupportIntegrationResource|undefined}}
     */
    get supportIntegration(): {
        [key: string]: SupportIntegrationResource | undefined;
    };
    /**
     * @returns {ExtractIntegrationResource[]}
     */
    get extractIntegrations(): ExtractIntegrationResource[];
    /**
     * @returns {{[key: string]: ExtractIntegrationResource|undefined}}
     */
    get extractIntegration(): {
        [key: string]: ExtractIntegrationResource | undefined;
    };
    /**
     * @returns {McpServerIntegrationResource[]}
     */
    get mcpserverIntegrations(): McpServerIntegrationResource[];
    /**
     * @returns {{[key: string]: McpServerIntegrationResource|undefined}}
     */
    get mcpserverIntegration(): {
        [key: string]: McpServerIntegrationResource | undefined;
    };
    /**
     * @returns {TwilioIntegrationResource[]}
     */
    get twilioIntegrations(): TwilioIntegrationResource[];
    /**
     * @returns {{[key: string]: TwilioIntegrationResource|undefined}}
     */
    get twilioIntegration(): {
        [key: string]: TwilioIntegrationResource | undefined;
    };
    /**
     * Sync the solution.
     *
     * @returns {Promise<void>}
     */
    sync(): Promise<void>;
}
export namespace Solution {
    /**
     * Lists solutions.
     *
     * @returns {Promise<string[]>}
     */
    export function list(): Promise<string[]>;
    /**
     * Creates a new solution.
     *
     * @param {string} name
     * @returns {Promise<void>}
     */
    export function create(name: string): Promise<void>;
    /**
     * Deletes a solution.
     *
     * @param {string} name
     * @returns {Promise<void>}
     */
    function _delete(name: string): Promise<void>;
    export { _delete as delete };
    /**
     * Loads a solution from a configuration object or a file.
     *
     * @param {string|SolutionConfig} config
     * @returns {Promise<Solution>}
     */
    export function load(config: string | SolutionConfig): Promise<Solution>;
    /**
     * Saves a solution to a file.
     *
     * @param {string} name
     * @param {Solution} solution
     * @returns {Promise<void>}
     */
    export function save(name: string, solution: Solution): Promise<void>;
}
/**
 * @internal
 * @template T
 */
export class ArrayBackedObject<T> {
    /**
     * @param {T[]} array
     */
    constructor(array: T[]);
    /** @type {T[]} */
    array: T[];
}
export type ZodSchemaFor<T> = { [K in keyof T]-?: undefined extends T[K] ? z.ZodOptional<z.ZodType<Exclude<T[K], undefined>>> : z.ZodType<T[K]>; };
export type BasicResourceConfigSchemaFields = {
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
};
export type ResourceConfigSchemaFor<T, U> = z.ZodObject<BasicResourceConfigSchemaFields & {
    type: z.ZodLiteral<T>;
    properties: z.ZodObject<ZodSchemaFor<U>>;
}>;
export type SolutionConfig = z.infer<typeof SolutionConfigSchema>;
export type ResourceConfig = z.infer<typeof ResourceConfigSchema>;
import { z } from 'zod';
