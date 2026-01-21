import type { Article, CreateEditArticleDTO } from "../types/article.types"
import { BASE_URL, TOKEN, FEED_PATH, ARTICLE_PATH, TAGS_PATH } from "./config"

export type GetFeedResult = null | {
	feed: Article[]
	tags: string[]
	totalPages: number
}

export async function apiGetFeed(
	page: number = 1,
	limit: number = 5,
): Promise<GetFeedResult> {
	const url = `${BASE_URL}/${FEED_PATH}?page=${page}&limit=${limit}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error("Erro ao carregar o feed")
	}

	const data = await response.json()

	if (typeof data === "object" && "feed" in data && "tags" in data) {
		return data
	}

	return null
}

export async function apiGetArticleById(id: number) {
	const url = `${BASE_URL}/${ARTICLE_PATH}/${id}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error("Erro ao carregar tags")
	}

	return response.json()
}

export async function apiGetTags() {
	const url = `${BASE_URL}/${TAGS_PATH}`

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error("Erro ao carregar tags")
	}

	return response.json()
}

export async function apiCreateArticle({
	title,
	imageUrl,
	text,
	tags,
}: CreateEditArticleDTO) {
	try {
		const body = {
			title,
			imageUrl,
			text,
			tags,
		}

		const url = `${BASE_URL}/${ARTICLE_PATH}`

		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${TOKEN}`,
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error("Erro ao criar artigo")
		}

		return response.ok
	} catch (error) {
		console.log(error)
		return false
	}
}

export async function apiEditArticle({
	id,
	title,
	imageUrl,
	text,
	tags,
}: CreateEditArticleDTO) {
	try {
		const body = {
			id,
			title,
			imageUrl,
			text,
			tags,
		}
		const url = `${BASE_URL}/${ARTICLE_PATH}`

		const response = await fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${TOKEN}`,
			},
			body: JSON.stringify(body),
		})

		if (!response.ok) {
			throw new Error("Erro ao editar artigo")
		}

		return response.ok
	} catch (error) {
		console.log(error)
		return false
	}
}
