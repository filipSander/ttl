import { z } from 'zod'

export const handlerShema = z.object({
	file: z.instanceof(File).optional(),
	name: z.string(),
	email: z.string(),
	phone: z.string().optional(),
	text: z.string()
})
