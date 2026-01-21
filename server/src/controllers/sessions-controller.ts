import { Request, Response } from "express"
import z from "zod"
import { AuthService } from "../utils/auth-service"

class SessionsController {
	async create(request: Request, response: Response) {
		const bodySchema = z.object({
			email: z.string().email().min(6),
			password: z.string().min(6),
		})

		const { email, password } = bodySchema.parse(request.body)

		const normalizedEmail = email.toLowerCase().trim()

		const auth = await AuthService.authenticate(normalizedEmail, password)

		return response.status(201).json({
			success: true,
			token: auth.token,
			user: auth.user,
		})
	}
}

export { SessionsController }
