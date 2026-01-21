import { Request, Response } from "express"
import z from "zod"
import { knex } from "../database/knex"
import { AppError } from "../utils/app-error"

class TagsController {
	async index(request: Request, response: Response) {
		const tags = await knex<string[]>("tags").select("name")

		if (!tags) {
			throw new AppError("Tags not found")
		}

		const parsedTags = tags.map((t) => t.name)

		return response.json({
			tags: parsedTags,
		})
	}
}

export { TagsController }
