export type Article = {
	id: number
	ownerId: number
	author: string
	updatedAt: string

	title: string
	imageUrl: string
	text: string
	tags: string[]
}

export type CreateEditArticleDTO = {
	id?: number
	title: string
	imageUrl: string
	text: string
	tags: string[]
}
