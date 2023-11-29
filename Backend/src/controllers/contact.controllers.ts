import { Request, Response } from "express";
import { User } from "../entities/User.entity";
import { contactDestroy, contactReadServices, contactServices, createContact, updateContact } from "../services/contact.services";

export const create = async (req: Request, res: Response): Promise<Response> => {

    const user: User | undefined = res.locals.foundEntity

    if (!user) {
        return res.status(400).json({ error: 'User not found in res.locals.foundEntity' });
    }

    const contact = await createContact(req.body, user)

    return res.status(201).json(contact);
}

export const read = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(res.locals.foundEntity.id)
    const contact = await contactReadServices(id)
    return res.status(200).json(contact);
};

export const readContact = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    const contact = await contactServices(id)
    return res.status(200).json(contact);
};

export const update = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    const { id } = req.params

    const { name, email, phoneNumber } = req.body

    const retriever = await updateContact(
        Number(id),
        name,
        email,
        phoneNumber
    )

    if(retriever){
        return res.status(200).json(retriever)
    }else{
        return res.status(404).json({ error: 'Contact not found' })
      }
  };

export const destroy = async (req: Request, res: Response): Promise<Response> => {
    const id: number = Number(req.params.id)
    await contactDestroy(id)
    return res.status(204).json();
};