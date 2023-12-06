import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { contactCreateSchema, contactUpdateSchema } from "../schemas/contact.schema";
import * as contactControllers from "../controllers/contact.controllers"
import { validateToken } from "../middlewares/validateTokenMiddlewares";

export const contactRouter: Router = Router()

contactRouter.use(validateToken)

contactRouter.post(
    "",
    validateBody(contactCreateSchema),
    contactControllers.create
)

contactRouter.get("", contactControllers.read)
contactRouter.get("/:id", contactControllers.readContact)
contactRouter.patch("/:id", validateBody(contactUpdateSchema), contactControllers.update)
contactRouter.delete("/:id", contactControllers.destroy)