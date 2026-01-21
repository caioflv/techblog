import { Router } from "express"
import { TagsController } from "../controllers/tags-controller"

const tagsRoutes = Router()
const tagsController = new TagsController()

tagsRoutes.get("/", tagsController.index)

export { tagsRoutes }
