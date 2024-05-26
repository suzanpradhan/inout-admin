import { nonempty } from '@/core/utils/formUtils';
import { z } from 'zod';

export const registerFormSchema = z
    .object({
        name: z.string().pipe(nonempty),
        email: z.string().email(),
        password: z.string().pipe(nonempty),
        confirmPassword: z.string().pipe(nonempty),
        phone: z.string().pipe(nonempty),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ['confirmPassword'],
    });

export type RegisterRequestType = z.infer<typeof registerFormSchema>;

export type RegisterResponseType = {
    email: string;
    username: string;
};