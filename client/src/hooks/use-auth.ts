import { useContext } from "react"
import { AuthContext } from "../contexts/auth-provider"

export function useAuth() {
	const ctx = useContext(AuthContext)
	if (!ctx) {
		throw new Error("useAuth deve ser usado dentro de AuthProvider")
	}
	return ctx
}

export function useUser() {
	const { status, user } = useAuth()
	if (status !== "authenticated" || !user) {
		throw new Error("useUser só pode ser usado quando autenticado")
	}
	return user
}
