'use client'
import { useRouter } from 'next/navigation'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	navigate?: string
}

const Button = (props: ButtonProps) => {
	const router = useRouter()
	return (
		<button
			{...props}
			{...(props.navigate && { onClick: () => router.push(props.navigate!) })}
			className={props.className + ' button'}
		/>
	)
}

export default Button
