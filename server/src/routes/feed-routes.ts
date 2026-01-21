import { Router } from "express"
import { FeedController } from "../controllers/feed-controller"

const feedRoutes = Router()
const feedController = new FeedController()

feedRoutes.get("/", feedController.index)

export { feedRoutes }
