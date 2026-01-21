import { Request, Response } from "express"
import z from "zod"
import { knex } from "../database/knex"
import { AppError } from "../utils/app-error"

class FeedController {
	async index(request: Request, response: Response) {
		const page = Number(request.query.page ?? 1)
		const limit = Number(request.query.limit ?? 5)
		const offset = (page - 1) * limit

		const feed = await knex("articles as a")
			.join("users as u", "u.id", "a.owner_id")
			.select(
				"a.id",
				"a.owner_id",
				"a.title",
				"a.image_url",
				"a.text",
				"a.tags",
				"a.updated_at",
				"u.nickname as author",
			)
			.orderBy("a.updated_at", "desc")
			.limit(limit)
			.offset(offset)

		if (!feed) {
			throw new AppError("Feed not found")
		}

		const tags = await knex<string[]>("tags").select("name")
		const parsedTags = tags.map((t) => t.name)

		const parsedFeed = feed.map((article) => ({
			...article,
			tags: JSON.parse(article.tags),
		}))

		const totalResult = await knex("articles").count("* as count").first()
		const totalItems = Number(totalResult?.count ?? 0)
		const totalPages = Math.ceil(totalItems / limit)

		return response.json({
			feed: parsedFeed,
			tags: parsedTags,
			totalPages,
		})
	}
}

export { FeedController }
