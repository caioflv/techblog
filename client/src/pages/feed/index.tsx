import { TagButton } from "../../components/tag-button"
import { CustomInput } from "../../components/input"
import { PaginationButton } from "../../components/pagination-button"
import { useContext, useEffect, useState } from "react"
import { LayoutContext } from "../../contexts/header-context"
import { useAuth } from "../../hooks/use-auth"
import { apiGetFeed, type GetFeedResult } from "../../services/articles"
import { ArticleCard } from "../../components/article-card"
import styles from "./styles.module.css"
import type { Article } from "../../types/article.types"
import { Button } from "../../components/button"

export function Feed() {
	const layout = useContext(LayoutContext)
	const auth = useAuth()

	const [data, setData] = useState<GetFeedResult | null>(null)
	const [page, setPage] = useState(1)
	const [searchText, setSearchText] = useState("")
	const [activeTags, setActiveTags] = useState<string[]>([])

	const [loading, setLoading] = useState(true)

	useEffect(() => {
		layout?.setHeader({
			buttonType: auth.status === "authenticated" ? "logout" : "back",
		})

		loadFeed()
	}, [page])

	async function loadFeed() {
		try {
			const response = await apiGetFeed(page, 5)
			if (response) {
				setData(response)
				setLoading(false)
			}
		} catch (e) {
			console.log(e)
		}
	}

	function handleSetPage(selectedPage: number) {
		setPage(selectedPage)
		window.scrollTo(0, 0)
	}

	function matchesSearch(article: Article, search: string) {
		if (search.trim() === "") return true

		const term = search.toLowerCase()

		return (
			article.title.toLowerCase().includes(term) ||
			article.text.toLowerCase().includes(term) ||
			article.tags.some((tag) => tag.toLowerCase().includes(term))
		)
	}

	function toggleTag(tag: string) {
		setActiveTags((prev) =>
			prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
		)
	}

	if (loading) {
		return <div>Loading feed...</div>
	}

	if (!data) return null

	const filteredArticles = data.feed.filter((article) => {
		const matchesText = matchesSearch(article, searchText)

		const matchesTags =
			activeTags.length === 0
				? true
				: article.tags.some((tag) => activeTags.includes(tag))

		return matchesText && matchesTags
	})

	return (
		<div>
			<header className={styles.header}>
				<CustomInput
					placeholder="Pesquisar"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<section className={styles.tags}>
					<nav className={styles.tagScroll}>
						{data.tags.map((tag, index) => (
							<TagButton
								key={index + tag}
								text={tag}
								onClick={() => toggleTag(tag)}
							/>
						))}
					</nav>
				</section>
			</header>
			<main className={styles.main}>
				<section className={styles.userFeatures}>
					{auth.status === "authenticated" && (
						<Button
							className={styles.createArticle}
							text="Novo artigo"
							navigateTo="/article/new"
						/>
					)}
				</section>
				<section className={styles.articleList}>
					{filteredArticles.map((article) => (
						<ArticleCard
							key={article.id}
							article={article}
							allowEdit={auth?.user?.id === article.ownerId}
						/>
					))}
				</section>
			</main>
			<footer className={styles.footer}>
				<nav className={styles.pageList}>
					{Array.from({ length: data.totalPages }).map((_, index) => (
						<PaginationButton
							key={index}
							text={String(index + 1)}
							disabled={index + 1 === page}
							onClick={() => handleSetPage(index + 1)}
						/>
					))}
				</nav>
			</footer>
		</div>
	)
}
