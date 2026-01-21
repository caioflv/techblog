import { env } from "../env"
import { knex } from "../database/knex"
import { AppError } from "./app-error"
import bcrypt from "bcrypt"
import { sign } from "jsonwebtoken"

class AuthService {
	static async authenticate(email: string, password: string) {
		const user = await knex<Users>("users").where({ email }).first()

		if (!user) {
			throw new AppError("User not found", 401)
		}

		const passwordMatch = await bcrypt.compare(password, user.password)

		if (!passwordMatch) {
			throw new AppError("Password not match", 401)
		}

		const token = sign({ id: user.id }, env.AUTH_SECRET!, {
			expiresIn: "1d",
		})

		return {
			token,
			user: {
				id: user.id,
				nickname: user.nickname,
			},
		}
	}
}

export { AuthService }
