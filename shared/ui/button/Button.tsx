'use client'
import { useRouter } from 'next/navigation'
import { HTMLMotionProps, motion } from 'framer-motion'
interface ButtonProps extends HTMLMotionProps<'button'> {
	navigate?: string
}

const Button = (props: ButtonProps) => {
	const router = useRouter()
	return (
		<motion.button
			{...props}
			{...(props.navigate && { onClick: () => router.push(props.navigate!) })}
			whileTap={{ scale: 0.9 }}
			className={props.className + ' button'}
		/>
	)
}

export default Button
