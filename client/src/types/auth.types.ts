import type { User } from "./user.types"

export type AuthStatus = "checking" | "authenticated" | "unauthenticated"

export type AuthState =
	| {
			status: "checking"
			user: null
			token: null
	  }
	| {
			status: "unauthenticated"
			user: null
			token: null
	  }
	| {
			status: "authenticated"
			user: User
			token: string
	  }

export type AuthContextValue = AuthState & {
	login: (data: LoginDTO) => Promise<void>
	logout: () => void
}

export type LoginDTO = {
	email: string
	password: string
}
