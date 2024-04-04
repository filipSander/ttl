interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
	return <button {...props} className={props.className + ' button'} />
}

export default Button
