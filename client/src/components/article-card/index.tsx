import React from "react"
import { useNavigate } from "react-router-dom"

import type { Article } from "../../types/article.types"

import styles from "./styles.module.css"
import { TagButton } from "../tag-button"
import { Button } from "../button"

type Props = React.ComponentProps<"div"> & {
	article: Article
	allowEdit?: boolean
}

export function ArticleCard({ article, allowEdit }: Props) {
	const navigate = useNavigate()

	let slicedArticle = article.text.slice(0, 80)
	slicedArticle = slicedArticle.slice(0, slicedArticle.lastIndexOf(" "))

	function openArticle() {
		navigate(`/article/${article.id}`)
	}
	function editArticle() {
		navigate(`/article/${article.id}/edit`)
	}

	return (
		<div onClick={openArticle} className={styles.articlePreview}>
			<img
				src={article.imageUrl.replace("id", String(article.ownerId))}
				alt=""
			/>
			<div className={styles.articleContent}>
				<div className={styles.title}>
					<span>{article.title}</span>
					{allowEdit && (
						<Button
							className={styles.edit}
							text="Editar"
							onClick={(e) => {
								e.stopPropagation()
								editArticle()
							}}
						/>
					)}
				</div>
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

				<p>{slicedArticle}...</p>
			</div>
		</div>
	)
}
