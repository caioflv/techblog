import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import { AppError } from "../utils/app-error"
import { authConfig } from "../configs/auth"

interface TokenPayload {
	id: number
	role: string
}

function ensureAuthenticated(
	request: Request,
	response: Response,
	next: NextFunction,
) {
	const authHeader = String(request.headers.authorization)

	if (!authHeader) {
		throw new AppError("JWT token not found", 401)
	}

	const [, token] = authHeader.split(" ")

	const { id } = verify(token, authConfig.jwt.secret) as TokenPayload

	request.user = {
		id,
	}

	return next()
}

export { ensureAuthenticated }
