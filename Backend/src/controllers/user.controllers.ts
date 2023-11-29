import { Request, Response } from "express";
import { userAuthenticate, userCreate, userDestroy, userRead } from "../services/user.services";
import jwt from 'jsonwebtoken';


export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await userAuthenticate(email, password);

      if (user) {
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.SECRET_KEY!, { expiresIn: '5h' });
        return res.status(200).json({ message: "Login successful", user, token });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
} 

export const create = async (req: Request, res: Response): Promise<Response> => {
    const user = await userCreate(req.body)
    return res.status(201).json(user);
}

export const read = async (req: Request, res: Response): Promise<Response> => {
    const user = await userRead();
    return res.status(200).json(user);
}

export const destroy = async (req: Request, res: Response): Promise<Response> => {
    await userDestroy(res.locals.foundEntity)
    return res.status(204).json();
}