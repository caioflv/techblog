import { useNavigate } from "react-router-dom"
import type { HeaderConfig } from "../../contexts/header-context"
import { useAuth } from "../../hooks/use-auth"
import { Button } from "../button"
import styles from "./styles.module.css"

export function Header({ buttonType }: HeaderConfig) {
	const auth = useAuth()
	const navigate = useNavigate()

	const buttons = {
		none: null,
		logout: (
			<Button
				className={styles.button}
				text="Sair"
				navigateTo="/"
				onClick={auth.logout}
			/>
		),
		login: (
			<Button
				className={styles.button}
				text="Entrar"
				onClick={() => navigate("/session")}
			/>
		),
		back: (
			<Button
				className={styles.button}
				text="Voltar"
				onClick={() => navigate(-1)}
			/>
		),
	}

	return (
		<header className={styles.header}>
			<h1>TechBlog</h1>
			{auth.status === "authenticated" && <span>{auth.user?.nickname}</span>}
			{buttons[buttonType]}
		</header>
	)
}
