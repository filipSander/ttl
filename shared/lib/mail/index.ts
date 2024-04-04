import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import { SendMailError } from '../errors'
import { FormData } from '@/shared/ui/form/dto'

export class MailService {
	private _mailerOption = JSON.parse(process.env.MAILER!)
	private _transporter: nodemailer.Transporter

	constructor() {
		this._transporter = nodemailer.createTransport(this._mailerOption)
	}

	public async sendMailRq(dto: any) {
		const attachments = dto.file
			? [
					{
						filename: dto.file?.name,
						content: Buffer.from(await dto.file.arrayBuffer())
					}
				]
			: []
		const options: Mail.Options = {
			subject: 'Запрос c cайта ttl',
			html: `Имя: ${dto.name}, E-mail: ${dto.email}, Телефон: ${dto.phone ? dto.phone : 'не указан'}, Текст ${dto.text}`,
			attachments: attachments
		}

		return await this._sendMail(options)
	}

	private async _sendMail(options: Mail.Options) {
		try {
			const info = await this._transporter.sendMail({
				to: this._mailerOption.auth.user,
				...options,
				from: this._mailerOption.auth.user
			})
			return info.messageId
		} catch (e) {
			throw new SendMailError('Ошибка при отправке письма: ' + e)
		}
	}
}

export const mailService = new MailService()
