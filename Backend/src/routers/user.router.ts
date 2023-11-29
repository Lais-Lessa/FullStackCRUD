import { Router } from 'express'
import * as userControllers from "../controllers/user.controllers"
import { validateBody } from '../middlewares/validateBody.middlewares'
import { userCreateSchema } from '../schemas/user.schemas'
import { idExistsUser } from '../middlewares/idExistsUser.middleware'


export const userRouter: Router = Router()

userRouter.post("/", validateBody(userCreateSchema), userControllers.create)
userRouter.post("/login", userControllers.login)
userRouter.get("/users", userControllers.read)
userRouter.delete("/users/:id", idExistsUser, userControllers.destroy )