import express from "express";
import { userRouter } from "./routers/user.router";
import { contactRouter } from "./routers/contact.router";
import handleMiddleware from "./middlewares/handleError.middleware";
import cors from 'cors';

const app = express();

app.use(cors())

app.use(express.json());
app.use("/users", userRouter);
app.use("/contact", contactRouter);
app.use(handleMiddleware.error);

export default app;