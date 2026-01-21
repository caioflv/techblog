import { useNavigate } from "react-router-dom"

import styles from "./styles.module.css"

type Props = React.ComponentProps<"button"> & {
	text?: string
	navigateTo?: string
}

export function PaginationButton({
	className,
	text,
	navigateTo,
	disabled,
	onClick,
	...rest
}: Props) {
	const navigate = useNavigate()

	function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
		if (disabled) return

		onClick?.(e)

		if (navigateTo !== undefined) {
			if (navigateTo === "-1") navigate(-1)
			else navigate(navigateTo)
		}
	}

	return (
		<button
			{...rest}
			className={`
				${styles.button} 
				${className} 
				${disabled ? styles.disabled : ""}
			`}
			onClick={handleClick}
			disabled={disabled}
		>
			{text}
		</button>
	)
}
