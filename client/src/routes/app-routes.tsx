import { Routes, Route } from "react-router"

import { Layout } from "../pages/layout"
import { NotFound } from "../pages/not-found"
import { Entry } from "../pages/entry"
import { Feed } from "../pages/feed"
import { ArticleRead } from "../pages/article-read"
import { CreateEditArticle } from "../pages/create-edit-article"
import { Session } from "../pages/session"
import { SessionGate } from "../pages/session-gate"

export function AppRoutes() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" index element={<Entry />} />
				<Route path="/session" element={<Session />} />
				<Route path="/feed" element={<Feed />} />
				<Route path="/article/:id" element={<ArticleRead />} />

				<Route element={<SessionGate />}>
					<Route path="/article/new" element={<CreateEditArticle />} />
					<Route path="/article/:id/edit" element={<CreateEditArticle />} />
				</Route>
			</Route>

			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}
