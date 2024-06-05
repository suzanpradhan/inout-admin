import { z } from "zod";

export const employeeSchema = z.object({
    id: z.number().optional(),
    order: z.number().optional(),
    fullname: z.string().min(4, {
        message: 'Fullname must be at least 4 characters.',
    }),
    is_staff: z.boolean().default(true),
    is_attend: z.boolean().default(false),
});
export type EmployeeDetailType = z.infer<typeof employeeSchema>;

export const employeeDeleteDetailSchema = z.object({
    id: z.number().optional(),
});
export type EmployeeDeleteDetailSchema = z.infer<typeof employeeDeleteDetailSchema>;

export const employeeStatusSchema = z.object({
    id: z.number(),
    is_attend: z.boolean(),
});
export type EmployeeStatusType = z.infer<typeof employeeStatusSchema>;

export interface OrderType {
    id: number;
    order: number;
}

export interface EmployeeDeleteFormType {
    id: number;
}

interface EmployeePosition {
    id: number;
    name: string;
}

export interface EmployeeDataType {
    id: number;
    order?: number;
    fullname?: string;
    positions?: EmployeePosition[];
    is_staff: boolean;
    is_attend?: boolean;
    created_by?: number;
    modified_by?: number;
    created_on?: string;
    modified_on?: string;
}