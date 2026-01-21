import { Router } from "express"
import { sessionsRoutes } from "./sessions-routes"
import { feedRoutes } from "./feed-routes"
import { tagsRoutes } from "./tags-routes"
import { articleRoutes } from "./article-routes"

const routes = Router()

routes.use("/sessions", sessionsRoutes)
routes.use("/feed", feedRoutes)
routes.use("/article", articleRoutes)
routes.use("/tags", tagsRoutes)

export { routes }
