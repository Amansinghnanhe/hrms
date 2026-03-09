import { z } from "zod";

export const applyLeaveSchema = z.object({
  body: z.object({
    fromDate: z.string(),
    toDate: z.string(),
    reason: z.string().min(5),
  }),
});

export const updateLeaveStatusSchema = z.object({
  body: z.object({
    status: z.enum(["APPROVED", "REJECTED"]),
  }),
});
