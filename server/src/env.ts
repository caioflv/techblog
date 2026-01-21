import "dotenv/config"
import { z } from "zod"

const envSchema = z.object({
	DATABASE_FILE: z.string().min(1),
	AUTH_SECRET: z.string().min(1),
	PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env)
