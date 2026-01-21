import express, { Request, Response, NextFunction } from "express"
import path from "path"
import cors from "cors"

import { routes } from "./routes/index"
import { env } from "./env"
import { AppError } from "./utils/app-error"

const PORT = env.PORT

const clientPath = path.resolve(process.cwd(), "../client/dist")

const app = express()

app.use(express.json())

app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
	}),
)

app.use(express.static(clientPath))

app.use("/api", routes)

app.use((error: any, request: Request, response: Response, _: NextFunction) => {
	if (error instanceof AppError) {
		return response.status(error.statusCode).json({
			message: error.message,
		})
	}

	console.error(error)

	return response.status(500).json({
		message: "Internal server error",
	})
})

app.get(/.*/, (req, res) => {
	const indexPath = path.join(clientPath, "index.html")
	res.sendFile(indexPath, (err) => {
		if (err) {
			console.error("Failed to send index.html:", err)
			res.status(500).send("Internal error")
		}
	})
})

app.listen(PORT, "0.0.0.0", () => {
	console.log(`Server is running on port ${PORT}`)
	console.log(`Front path on: ${clientPath}`)
})
