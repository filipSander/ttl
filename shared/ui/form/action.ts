'use server'
import { mailService } from '@/shared/lib/mail'
import { handlerShema } from './dto'

export async function formHandler(
	state: any,
	data: FormData
): Promise<string | undefined> {
	const result = handlerShema.safeParse(Object.fromEntries(data))
	if (!result.success) return 'Не правильно заполнены поля'

	const fileid = await mailService.sendMailRq(result.data)
	console.log('Message sent: ', fileid)
	return 'Сообщение отправлено' + Date.now().toString()
}
