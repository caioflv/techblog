import { Router } from "express"
import { ArticleController } from "../controllers/article-controller"
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated"

const articleRoutes = Router()
const articleController = new ArticleController()

articleRoutes.get("/:id", articleController.show)
articleRoutes.post("/", ensureAuthenticated, articleController.create)
articleRoutes.patch("/", ensureAuthenticated, articleController.update)

export { articleRoutes }
