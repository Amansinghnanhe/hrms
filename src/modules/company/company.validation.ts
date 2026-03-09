import { z } from "zod";


export const createCompanySchema = z.object({
    body: z.object({
        name: z.string().min(2),
        email: z.string().email(),
        phone: z.string().min(10),
        address: z.string().min(5),
        website: z.string().optional(),
    })
});

export const updateCompanySchema = z.object({
    body: z.object({
        name: z.string().optional(),
        phone: z.string().optional(),
        address: z.string().optional(),
        website: z.string().optional(),
        status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
    }),
});