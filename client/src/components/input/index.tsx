import styles from "./styles.module.css"

type Props = React.ComponentProps<"input">

export function CustomInput({ className, ...rest }: Props) {
	return (
		<input
			{...rest}
			className={`
				${styles.input} 
				${className} 
			`}
		></input>
	)
}
