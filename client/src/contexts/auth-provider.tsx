import { createContext, useState } from "react"
import type { AuthContextValue, AuthState, LoginDTO } from "../types/auth.types"
import { apiGetSession } from "../services/session"
import { setToken } from "../services/config"

export const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
	const [state, setState] = useState<AuthState>({
		status: "checking",
		user: null,
		token: null,
	})

	async function login(data: LoginDTO) {
		setState({ status: "checking", token: null, user: null })

		const response = await apiGetSession(data)

		if (response === null) {
			throw new Error("Login inválido")
		}

		setState({
			status: "authenticated",
			user: response.user,
			token: response.token,
		})

		setToken(response.token)
	}

	function logout() {
		setState({
			status: "unauthenticated",
			user: null,
			token: null,
		})
	}

	return (
		<AuthContext.Provider
			value={{
				...state,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
