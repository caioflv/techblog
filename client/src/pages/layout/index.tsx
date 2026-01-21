import { Outlet } from "react-router-dom"
import { useState } from "react"
import { LayoutContext, type HeaderConfig } from "../../contexts/header-context"
import { Header } from "../../components/header"

import styles from "./styles.module.css"

export function Layout() {
	const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({
		buttonType: "logout",
	})

	return (
		<div className={styles.page}>
			<LayoutContext.Provider value={{ setHeader: setHeaderConfig }}>
				<Header {...headerConfig}></Header>
				<main className={styles.main}>
					<Outlet />
				</main>
				<footer className={styles.footer}></footer>
			</LayoutContext.Provider>
		</div>
	)
}
