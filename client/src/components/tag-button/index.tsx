import { useState } from "react"

import styles from "./styles.module.css"
import { useNavigate } from "react-router-dom"

type Props = React.ComponentProps<"button"> & {
	text?: string
	navigateTo?: string
	startActive?: boolean
}

export function TagButton({
	className,
	text,
	navigateTo,
	onClick,
	startActive = false,
	type = "button",
	disabled = false,
	...rest
}: Props) {
	const [clicked, setClicked] = useState(false)
	const [toggle, setToggled] = useState(startActive)
	const navigate = useNavigate()

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		if (disabled) return

		onClick?.(e)

		if (navigateTo !== undefined) {
			if (navigateTo === "-1") navigate(-1)
			else navigate(navigateTo)
		}

		setClicked(true)
		setToggled(!toggle)
	}

	return (
		<button
			{...rest}
			className={`
				${styles.button} 
				${className} 
				${clicked ? styles.animation : ""}
				${toggle ? styles.toggle : ""}
			`}
			onAnimationEnd={() => setClicked(false)}
			onClick={handleClick}
			type={type}
		>
			{text}
		</button>
	)
}
