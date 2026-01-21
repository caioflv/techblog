import { Request, Response } from "express"
import z from "zod"
import { knex } from "../database/knex"
import { AppError } from "../utils/app-error"

class ArticleController {
	async show(request: Request, response: Response) {
		const params = z.object({
			id: z.coerce.number(),
		})

		const { id } = params.parse(request.params)

		if (!id) {
			throw new AppError("id not found")
		}

		const [article] = await knex("articles as a")
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
			.where("a.id", id)

		if (!article) {
			throw new AppError("Article not found")
		}

		return response.json({
			article: {
				...article,
				tags: JSON.parse(article.tags ?? "[]"),
			},
		})
	}

	async create(request: Request, response: Response) {
		const bodySchema = z.object({
			title: z.string().min(1),
			imageUrl: z.string().optional().nullable(),
			text: z.string().min(1),
			tags: z.array(z.string()).default([]),
		})
		const result = bodySchema.safeParse(request.body)

		if (!result.success) {
			console.log(result.error.format())
			throw new AppError("Invalid request body", 400)
		}

		const { title, imageUrl, text, tags } = bodySchema.parse(request.body)

		const ownerId = request.user?.id
		if (!ownerId) {
			throw new AppError("Unauthorized", 401)
		}

		const [article] = await knex("articles").insert({
			title,
			image_url: imageUrl,
			text,
			tags: JSON.stringify(tags),
			owner_id: ownerId,
		})

		return response.status(201).json()
	}

	async update(request: Request, response: Response) {
		const bodySchema = z.object({
			id: z.coerce.number(),
			title: z.string().min(1),
			imageUrl: z.string().optional().nullable(),
			text: z.string().min(1),
			tags: z.array(z.string()).default([]),
		})

		const result = bodySchema.safeParse(request.body)

		if (!result.success) {
			console.log(result.error.format())
			throw new AppError("Invalid request body", 400)
		}

		const { id, title, imageUrl, text, tags } = result.data

		const ownerId = request.user?.id

		const article = await knex("articles").where({ id }).first()

		if (!article) {
			throw new AppError("Article not found", 404)
		}

		if (article.ownerId !== ownerId) {
			throw new AppError("Forbidden", 403)
		}

		await knex("articles")
			.where({ id })
			.update({
				title,
				image_url: imageUrl,
				text,
				tags: JSON.stringify(tags),
				updated_at: knex.fn.now(),
			})

		return response.status(204).send()
	}
}

export { ArticleController }
