import { useParams } from "react-router-dom"
import { TagButton } from "../../components/tag-button"
import { CustomTextArea } from "../../components/text-area"
import { Button } from "../../components/button"
import { useContext, useEffect, useState } from "react"
import { LayoutContext } from "../../contexts/header-context"

import type { Article } from "../../types/article.types"

import styles from "./styles.module.css"
import { apiGetArticleById } from "../../services/articles"

export function ArticleRead() {
	const { id } = useParams()

	const [article, setArticle] = useState<Article | null>(null)
	const [loading, setLoading] = useState(true)

	const layout = useContext(LayoutContext)

	useEffect(() => {
		layout?.setHeader({
			buttonType: "back",
		})
		if (!article) {
			loadArticleById(Number(id))
		} else {
			setLoading(false)
		}
	}, [id, article])

	async function loadArticleById(id: number) {
		const response = await apiGetArticleById(id)
		setArticle(response.article)
		setLoading(false)
	}
	if (loading || !article) {
		return <div>Loading article...</div>
	}

	return (
		<div>
			<header className={styles.header}>
				<h2>{article.title}</h2>
				<p>
					Publicado por {article.author} - {article.updatedAt}
				</p>
				<div className={styles.tags}>
					{article.tags.map((tag, index) => (
						<TagButton
							key={index + tag}
							className={styles.tag}
							text={tag}
							disabled={true}
						/>
					))}
				</div>
			</header>
			<main>
				<section className={styles.article}>
					<p>{article.text}</p>
				</section>
				<section className={styles.comments}>
					<p>Comentários (Não implementado)</p>
					<CustomTextArea placeholder="Escreva um comentário..." />
					<Button text="Comentar" />
				</section>
			</main>
		</div>
	)
}
