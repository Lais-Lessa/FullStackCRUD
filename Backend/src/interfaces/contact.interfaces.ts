import { z } from "zod";
import { contactCreateSchema, contactReadSchema, contactSchema } from "../schemas/contact.schema";
import { Repository } from "typeorm";
import { Contact } from "../entities/Contact.entity";

type contactCreate = z.infer<typeof contactCreateSchema>;
type contactRead = z.infer<typeof contactReadSchema>
type contactReturn = z.infer<typeof contactSchema>;

type ContactRepo = Repository<Contact>;

export { contactCreate, ContactRepo, contactReturn, contactRead };