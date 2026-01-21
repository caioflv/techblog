import { useState } from "react"

import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"

type Props = React.ComponentProps<"button"> & {
	text?: string
	navigateTo?: string
}

export function Button({
	className,
	text,
	navigateTo,
	onClick,
	disabled,
	type = "button",
	...rest
}: Props) {
	const [clicked, setClicked] = useState(false)
	const navigate = useNavigate()

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		if (disabled) return

		onClick?.(e)

		if (navigateTo !== undefined) {
			if (navigateTo === "-1") navigate(-1)
			else navigate(navigateTo)
		}

		setClicked(true)
	}

	return (
		<button
			{...rest}
			className={`
				${styles.button} 
				${className} 
				${clicked ? styles.animation : ""}
			`}
			onAnimationEnd={() => setClicked(false)}
			disabled={disabled}
			onClick={handleClick}
			type={type}
		>
			{text}
		</button>
	)
}
