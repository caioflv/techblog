import { Button } from "../../components/button"
import { useContext, useEffect } from "react"
import { LayoutContext } from "../../contexts/header-context"

import styles from "./styles.module.css"

export function Entry() {
	const layout = useContext(LayoutContext)

	useEffect(() => {
		layout?.setHeader({
			buttonType: "login",
		})
	}, [])

	return (
		<main className={styles.main}>
			<h1>
				Insights &<br />
				Learning
			</h1>
			<p>Explorando tendências Tech, um post por vez</p>
			<Button text="Começar a ler" navigateTo="feed" />
		</main>
	)
}
