'use server'
import { mailService } from '@/shared/lib/mail'
import { handlerShema } from './dto'

export async function formHandler(data: FormData) {
	try {
		const result = handlerShema.parse(Object.fromEntries(data))
		const fileid = await mailService.sendMailRq(result)
		console.log(fileid)
		return 'success'
	} catch (e) {
		return 'error'
	}
}
