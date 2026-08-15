import { z } from "zod";

export const LocationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    latitude: z.number().min(-90).max(90),
    longitude: z.number().min(-180).max(180),
});
export type Location = z.infer<typeof LocationSchema>;

export const AnglerSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    email: z.email(),
});
export type Angler = z.infer<typeof AnglerSchema>;

export const CatchSchema = z.object({
    id: z.string().uuid(),
    species: z.string(),
    length: z.number().positive(),
    weight: z.number().positive(),
    caughtBy: AnglerSchema,
    location: LocationSchema,
    release: z.boolean(),
    dateCaught: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
});
export type Catch = z.infer<typeof CatchSchema>;

