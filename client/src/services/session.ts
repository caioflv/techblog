import type { SessionResult } from "../types/session.types.ts"
import { BASE_URL, SESSIONS_PATH } from "./config.ts"

export async function apiGetSession(body: unknown): Promise<SessionResult> {
	try {
		const url = `${BASE_URL}/${SESSIONS_PATH}`

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error("Erro ao iniciar sessão")
		}

		const data: unknown = await response.json()

		if (typeof data !== "object" || data === null) {
			throw new Error("Estrutura inválida da resposta")
		}

		return data as SessionResult
	} catch (error) {
		console.log(error)
		return null
	}
}
