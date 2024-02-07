import { z } from "zod";

export const animalSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),
  image: z.string().url("Invalid URL"),
});
