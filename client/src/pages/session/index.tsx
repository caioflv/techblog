import { useContext, useEffect, useState } from "react"
import { LayoutContext } from "../../contexts/header-context"

import styles from "./styles.module.css"
import { CustomInput } from "../../components/input"
import { Button } from "../../components/button"
import { useAuth } from "../../hooks/use-auth"
import { useNavigate } from "react-router-dom"

export function Session() {
	const layout = useContext(LayoutContext)
	const auth = useAuth()
	const navigate = useNavigate()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	useEffect(() => {
		layout?.setHeader({
			buttonType: "back",
		})

		if (auth.status === "authenticated") {
			navigate("/feed", { replace: true })
		}
	}, [auth])

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		try {
			await auth.login({ email, password })
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h1>Bem-vindo de volta</h1>
			<div className={styles.inputWrapper}>
				<span>Email</span>
				<CustomInput
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className={styles.inputWrapper}>
				<span>Senha</span>
				<CustomInput
					placeholder="Senha"
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</div>
			<Button className={styles.submitBtn} text={"Entrar"} type="submit" />
		</form>
	)
}
