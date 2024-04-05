import { z } from 'zod'

const privateConfigSchema = z.object({
	MAILER: z.object({
		host: z.string(),
		port: z.number(),
		secure: z.boolean(),
		auth: z.object({
			user: z.string(),
			pass: z.string()
		})
	})
})

export const privateConfig = privateConfigSchema.parse({
	...process.env,
	MAILER: JSON.parse(process.env.MAILER!)
})
