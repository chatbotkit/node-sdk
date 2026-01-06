/**
 * Available tools for agent CLI
 *
 * @type {Record<string, {
 *   description: string,
 *   input: z.ZodObject<any>,
 *   handler: (input: any) => Promise<any>,
 *   default?: boolean
 * }>}
 */
export const tools: Record<string, {
    description: string;
    input: z.ZodObject<any>;
    handler: (input: any) => Promise<any>;
    default?: boolean;
}>;
import { z } from 'zod';
