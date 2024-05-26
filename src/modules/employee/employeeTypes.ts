import { z } from "zod";

export const employeeSchema = z.object({
    order: z.string().optional(),
    fullname: z.string().min(4, {
        message: 'Fullname must be at least 4 characters.',
    }),
    is_staff: z.boolean().optional().default(true),
});
export type EmployeeDetailType = z.infer<typeof employeeSchema>;

export interface EmployeeFormType {
    id?: number;
    order?: string;
    fullname?: string;
    is_staff?: boolean;
}

export const employeeDeleteDetailSchema = z.object({
    id: z.number().optional(),
});
export type EmployeeDeleteDetailSchema = z.infer<typeof employeeDeleteDetailSchema>;

export interface EmployeeDeleteFormType {
    id: number;
}


interface EmployeePosition {
    id: number;
    name: string;
}

export interface EmployeeDataType {
    id?: number;
    order?: number;
    fullname?: string;
    positions?: EmployeePosition[];
    is_staff: boolean;
    status?: boolean;
    created_by?: number;
    modified_by?: number;
    created_on?: string;
    modified_on?: string;
}