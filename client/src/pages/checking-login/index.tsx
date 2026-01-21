import { useContext, useEffect } from "react"
import { LayoutContext } from "../../contexts/header-context"

//import styles from "./styles.module.css"

export function CheckingLogin() {
	const layout = useContext(LayoutContext)

	useEffect(() => {
		layout?.setHeader({
			buttonType: "none",
		})
	}, [])

	return <div>Checking...</div>
}
