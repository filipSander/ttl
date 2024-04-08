'use client'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'
import { formHandler } from './action'
import Submit from './submit'
import File from './file'

const Form = () => {
	const [state, formAction] = useFormState(formHandler, undefined)

	useEffect(() => {
		if (state)
			toast.promise(
				new Promise((resolve, reject) => {
					state.includes('Сообщение отправлено') ? resolve(state) : reject(state)
				}),
				{
					success: 'Сообщение отправлено',
					error: 'Проблема при отправке',
					pending: 'Отправка...'
				}
			)
	}, [state])

	return (
		<form action={formAction} id="form" className="main-form">
			<strong>Персональная информация</strong>
			<div className="group">
				<div className="field">
					<p>Имя</p>
					<input
						required
						maxLength={50}
						name="name"
						type="text"
						placeholder="Ваше имя*"
					/>
				</div>
				<div className="field">
					<p>E-mail</p>
					<input
						type="email"
						required
						maxLength={50}
						name="email"
						placeholder="Ваша рабочая почта*"
					/>
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
					<textarea
						name="text"
						required
						maxLength={1000}
						placeholder="Что вы хотете заказать из китая?*"
					/>
					<p>
						*Расскажите о грузе как можно больше. Если у вас нет информации или вам
						нужны поиск поставщика и закупка — напишите об это
					</p>
				</div>
				<File />
			</div>
			<Submit value="Рассказать о задаче" />
		</form>
	)
}

export default Form
