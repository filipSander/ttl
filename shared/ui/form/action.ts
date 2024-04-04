'use server'

import { mailService } from '@/shared/lib/mail'

import { redirect } from 'next/navigation'
export async function formHandler(data: FormData) {
	const { file, name, email, phone, text } = Object.fromEntries(data)
	const fileid = await mailService.sendMailRq({ name, email, phone, text, file })
	console.log(fileid)
	redirect('/?success=true')
}
