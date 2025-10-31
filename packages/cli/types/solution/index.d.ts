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
 * The schema for a basic resource configuration.
 */
export const BasicResourceConfigSchema: z.ZodObject<{
    type: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strip", z.ZodTypeAny, {
    type: string;
    name: string;
    properties: Record<string, unknown>;
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: string;
    name: string;
    properties: Record<string, unknown>;
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a bot resource configuration.
 */
export const BotResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"bot">;
    properties: z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        backstory: z.ZodOptional<z.ZodString>;
        datasetId: z.ZodOptional<z.ZodString>;
        skillsetId: z.ZodOptional<z.ZodString>;
        moderation: z.ZodOptional<z.ZodBoolean>;
        privacy: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    }, {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "bot";
    name: string;
    properties: {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "bot";
    name: string;
    properties: {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a dataset resource configuration.
 */
export const DatasetResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"dataset">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "dataset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "dataset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a skillset resource configuration.
 */
export const SkillsetResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"skillset">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "skillset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "skillset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a widget integration resource configuration.
 */
export const WidgetIntegrationResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"widgetIntegration">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "widgetIntegration";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "widgetIntegration";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a sitemap integration resource configuration.
 */
export const SitemapIntegrationResourceConfigSchema: z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"sitemapIntegration">;
    properties: z.ZodObject<{
        url: z.ZodString;
        datasetId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        datasetId: string;
        url: string;
    }, {
        datasetId: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "sitemapIntegration";
    name: string;
    properties: {
        datasetId: string;
        url: string;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "sitemapIntegration";
    name: string;
    properties: {
        datasetId: string;
        url: string;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>;
/**
 * The schema for a resource configuration.
 */
export const ResourceConfigSchema: z.ZodUnion<[z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"bot">;
    properties: z.ZodObject<{
        model: z.ZodOptional<z.ZodString>;
        backstory: z.ZodOptional<z.ZodString>;
        datasetId: z.ZodOptional<z.ZodString>;
        skillsetId: z.ZodOptional<z.ZodString>;
        moderation: z.ZodOptional<z.ZodBoolean>;
        privacy: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    }, {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "bot";
    name: string;
    properties: {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "bot";
    name: string;
    properties: {
        backstory?: string | undefined;
        model?: string | undefined;
        datasetId?: string | undefined;
        skillsetId?: string | undefined;
        moderation?: boolean | undefined;
        privacy?: boolean | undefined;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>, z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"dataset">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "dataset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "dataset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>, z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"skillset">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "skillset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "skillset";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>, z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"widgetIntegration">;
    properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
}, "strip", z.ZodTypeAny, {
    type: "widgetIntegration";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "widgetIntegration";
    name: string;
    properties: {};
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>, z.ZodObject<{
    slug: z.ZodOptional<z.ZodString>;
    id: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
} & {
    type: z.ZodLiteral<"sitemapIntegration">;
    properties: z.ZodObject<{
        url: z.ZodString;
        datasetId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        datasetId: string;
        url: string;
    }, {
        datasetId: string;
        url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    type: "sitemapIntegration";
    name: string;
    properties: {
        datasetId: string;
        url: string;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}, {
    type: "sitemapIntegration";
    name: string;
    properties: {
        datasetId: string;
        url: string;
    };
    slug?: string | undefined;
    id?: string | undefined;
    description?: string | undefined;
}>]>;
/**
 * The schema for a solution configuration.
 */
export const SolutionConfigSchema: z.ZodObject<{
    version: z.ZodLiteral<1>;
    resources: z.ZodArray<z.ZodUnion<[z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"bot">;
        properties: z.ZodObject<{
            model: z.ZodOptional<z.ZodString>;
            backstory: z.ZodOptional<z.ZodString>;
            datasetId: z.ZodOptional<z.ZodString>;
            skillsetId: z.ZodOptional<z.ZodString>;
            moderation: z.ZodOptional<z.ZodBoolean>;
            privacy: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        }, {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "bot";
        name: string;
        properties: {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }, {
        type: "bot";
        name: string;
        properties: {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"dataset">;
        properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        type: "dataset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }, {
        type: "dataset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"skillset">;
        properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        type: "skillset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }, {
        type: "skillset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"widgetIntegration">;
        properties: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    }, "strip", z.ZodTypeAny, {
        type: "widgetIntegration";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }, {
        type: "widgetIntegration";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }>, z.ZodObject<{
        slug: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
    } & {
        type: z.ZodLiteral<"sitemapIntegration">;
        properties: z.ZodObject<{
            url: z.ZodString;
            datasetId: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            datasetId: string;
            url: string;
        }, {
            datasetId: string;
            url: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "sitemapIntegration";
        name: string;
        properties: {
            datasetId: string;
            url: string;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }, {
        type: "sitemapIntegration";
        name: string;
        properties: {
            datasetId: string;
            url: string;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    }>]>, "many">;
}, "strip", z.ZodTypeAny, {
    version: 1;
    resources: ({
        type: "bot";
        name: string;
        properties: {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "dataset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "skillset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "widgetIntegration";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "sitemapIntegration";
        name: string;
        properties: {
            datasetId: string;
            url: string;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    })[];
}, {
    version: 1;
    resources: ({
        type: "bot";
        name: string;
        properties: {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "dataset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "skillset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "widgetIntegration";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "sitemapIntegration";
        name: string;
        properties: {
            datasetId: string;
            url: string;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
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
        type: "bot";
        name: string;
        properties: {
            backstory?: string | undefined;
            model?: string | undefined;
            datasetId?: string | undefined;
            skillsetId?: string | undefined;
            moderation?: boolean | undefined;
            privacy?: boolean | undefined;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "dataset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "skillset";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "widgetIntegration";
        name: string;
        properties: {};
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
    } | {
        type: "sitemapIntegration";
        name: string;
        properties: {
            datasetId: string;
            url: string;
        };
        slug?: string | undefined;
        id?: string | undefined;
        description?: string | undefined;
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
     * @returns {string}
     */
    get name(): string;
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
     * Sync the resource.
     *
     * @returns {Promise<void>}
     */
    sync(): Promise<void>;
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
            type: "bot";
            name: string;
            properties: {
                backstory?: string | undefined;
                model?: string | undefined;
                datasetId?: string | undefined;
                skillsetId?: string | undefined;
                moderation?: boolean | undefined;
                privacy?: boolean | undefined;
            };
            slug?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
        } | {
            type: "dataset";
            name: string;
            properties: {};
            slug?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
        } | {
            type: "skillset";
            name: string;
            properties: {};
            slug?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
        } | {
            type: "widgetIntegration";
            name: string;
            properties: {};
            slug?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
        } | {
            type: "sitemapIntegration";
            name: string;
            properties: {
                datasetId: string;
                url: string;
            };
            slug?: string | undefined;
            id?: string | undefined;
            description?: string | undefined;
        })[];
    };
    /**
     * @returns {import('@chatbotkit/sdk').ChatBotKit}
     */
    get baseClient(): import("@chatbotkit/sdk").ChatBotKit;
    /**
     * Get the resources.
     *
     * @returns {(BotResource|DatasetResource|SkillsetResource|WidgetIntegrationResource|SitemapIntegrationResource)[]}
     */
    get resources(): (BotResource | DatasetResource | SkillsetResource | WidgetIntegrationResource | SitemapIntegrationResource)[];
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
export type SolutionConfig = z.infer<typeof SolutionConfigSchema>;
export type ResourceConfig = z.infer<typeof ResourceConfigSchema>;
import { z } from 'zod';
