import { useFormStatus } from 'react-dom'
import Button from '../button/Button'

const Submit = ({ value }: { value: string }) => {
	const { pending } = useFormStatus()

	return (
		<Button disabled={pending} type="submit">
			{pending ? 'Отправка...' : value}
		</Button>
	)
}

export default Submit
