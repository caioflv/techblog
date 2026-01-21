import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { CustomInput } from "../../components/input"
import { Button } from "../../components/button"
import { TagButton } from "../../components/tag-button"
import { CustomTextArea } from "../../components/text-area"
import { LayoutContext } from "../../contexts/header-context"

import type { Article, CreateEditArticleDTO } from "../../types/article.types"

import styles from "./styles.module.css"
import {
	apiCreateArticle,
	apiEditArticle,
	apiGetArticleById,
	apiGetTags,
} from "../../services/articles"

type Props = {
	id: string
	mode: "new" | "edit"
}

export function CreateEditArticle() {
	const navigate = useNavigate()
	const { id } = useParams<Props>()
	const mode = id ? "edit" : "new"

	const layout = useContext(LayoutContext)

	const [article, setArticle] = useState<Article>({
		id: 0,
		ownerId: 0,
		author: "",
		title: "",
		imageUrl: "https://picsum.photos/seed/id/64/64",
		text: "",
		tags: [],
		updatedAt: "",
	})

	const [tagList, setTagList] = useState<string[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		layout?.setHeader({
			buttonType: "back",
		})

		if (mode === "edit" && id) {
			loadArticleById(Number(id))
		} else {
			setLoading(false)
		}

		if (tagList.length === 0) {
			loadTags()
		}
	}, [mode, id])

	async function loadArticleById(id: number) {
		const response = await apiGetArticleById(id)
		setArticle(response.article)
		setLoading(false)
	}

	async function loadTags() {
		try {
			const response = await apiGetTags()
			if (response) {
				setTagList(response.tags)
			}
		} catch (e) {
			console.log(e)
		}
	}

	function toggleTag(tag: string) {
		setArticle((prev) => ({
			...prev,
			tags: prev.tags.includes(tag)
				? prev.tags.filter((t) => t !== tag)
				: [...prev.tags, tag],
		}))
	}

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault()

		const final: CreateEditArticleDTO = {
			id: article.id,
			title: article.title,
			imageUrl: article.imageUrl,
			text: article.text,
			tags: article.tags,
		}

		if (mode === "new") {
			const response = await apiCreateArticle(final)
			if (response) {
				navigate("/feed", { replace: true })
			}
		}

		if (mode === "edit") {
			const response = await apiEditArticle(final)
			if (response) {
				navigate("/feed", { replace: true })
			}
		}
	}

	if (loading) {
		return <div>Loading tags...</div>
	}

	return (
		<div>
			<header>
				<h1>{mode === "new" ? "Novo artigo" : "Editar artigo"}</h1>
			</header>
			<main>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.inputWrapper}>
						<span>Título do artigo *</span>
						<CustomInput
							placeholder="Título"
							value={article.title}
							onChange={(e) =>
								setArticle((prev) => ({ ...prev, title: e.target.value }))
							}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<span>Imagem do artigo</span>
						<CustomInput
							placeholder="URL da imagem"
							value={article.imageUrl}
							onChange={(e) =>
								setArticle((prev) => ({ ...prev, imageUrl: e.target.value }))
							}
						/>
					</div>
					<div className={styles.inputWrapper}>
						<span>Tags *</span>
						<div className={styles.tags}>
							{tagList.map((tag, index) => (
								<TagButton
									key={index + tag}
									className={styles.tag}
									text={tag}
									startActive={article.tags.includes(tag)}
									onClick={() => toggleTag(tag)}
								/>
							))}
						</div>
					</div>
					<div className={styles.inputWrapper}>
						<span>Conteúdo *</span>
						<CustomTextArea
							placeholder="Escreva aqui seu artigo..."
							value={article.text}
							onChange={(e) =>
								setArticle((prev) => ({ ...prev, text: e.target.value }))
							}
						/>
					</div>
					<Button
						className={styles.submitBtn}
						text={mode === "new" ? "Criar artigo" : "Alterar artigo"}
						type="submit"
					/>
				</form>
			</main>
		</div>
	)
}
