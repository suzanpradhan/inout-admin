import { nonempty } from "@/core/utils/formUtils";
import { z } from "zod";

export const settingSchema = z.object({
    id: z.number().optional(),
    name: z.string().pipe(nonempty),
    avatar: z.custom<File>().optional(),
    is_data_updated: z.boolean().default(true),
});
export type SettingsDetailType = z.infer<typeof settingSchema>;

export const settingUpdatesScnema = settingSchema.extend({
    id: z.number().optional(),
    name: z.string().optional(),
    avatar: z.custom<File>().optional().nullish(),
    is_data_updated: z.boolean().default(true),
})

export interface SettingsDataType {
    id?: number;
    name?: string;
    avatar?: string;
    is_data_updated?: boolean;
}