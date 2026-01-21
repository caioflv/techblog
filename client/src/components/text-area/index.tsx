import styles from "./styles.module.css"

type Props = React.ComponentProps<"textarea">

export function CustomTextArea({ className, ...rest }: Props) {
	return (
		<textarea
			{...rest}
			className={`
				${styles.textarea} 
				${className} 
			`}
		></textarea>
	)
}
