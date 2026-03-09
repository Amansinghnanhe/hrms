import {z} from "zod";
export const checkInSchema = z.object({
    body: z.object({}),
});
export const checkOutSchema = z.object({
    body: z.object({}),
});