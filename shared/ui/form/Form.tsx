'use client'
import { useSearchParams } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { FileIcon } from '../icons/file'
import { formHandler } from './action'
import { useDebounce } from '@/hooks/useDebounce'

const Form = () => {
	const [file, setFile] = useState<File>()
	const onInputChanged = (e: ChangeEvent<HTMLInputElement>) => {
		const fileList = e.currentTarget.files
		if (!fileList) return
		setFile(fileList[0])
	}
	const searchParams = useSearchParams()
	const success = searchParams.get('success')

	const makeMessage = useDebounce((msg: string, warn?: boolean) => {
		if (warn) {
			toast.error(msg)
		} else {
			toast.success(msg)
		}
	}, 500)

	if (success?.toString() === 'true') {
		makeMessage('Заявка успешно отправлена')
	}
	if (success?.toString() === 'false') {
		makeMessage('Заявка не отправлена', true)
	}

	return (
		<form action={formHandler} id="form" className="main-form">
			<strong>Персональная информация</strong>
			<div className="group">
				<div className="field">
					<p>Имя</p>
					<input name="name" type="text" placeholder="Ваше имя*" />
				</div>
				<div className="field">
					<p>E-mail</p>
					<input type="email" name="email" placeholder="Ваша рабочая почта*" />
				</div>
				<div className="field">
					<p>Телефон</p>
					<input type="text" name="phone" placeholder="Ваш телефон" />
				</div>
			</div>
			<strong>Информация о задаче</strong>
			<div className="group">
				<div className="field">
					<p>Описание</p>
					<textarea name="text" placeholder="Что вы хотете заказать из китая?*" />
					<p>
						*Расскажите о грузе как можно больше. Если у вас нет информации или вам
						нужны поиск поставщика и закупка — напишите об это
					</p>
				</div>
				<div className="field">
					<p>Файл</p>
					<label htmlFor="file">
						<FileIcon />
						<p>{file?.name ? file.name : 'Прикрепить Файл'}</p>
					</label>
					<input
						onChange={e => onInputChanged(e)}
						accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
						id="file"
						name="file"
						type="file"
					/>
				</div>
			</div>
			<input className="button" type="submit" value="Рассказать о задаче" />
		</form>
	)
}

export default Form
