import { AppDataSource } from "./data-source";
import { Contact } from "./entities/Contact.entity";
import { User } from "./entities/User.entity";
import { ContactRepo } from "./interfaces/contact.interfaces";
import { UserRepo } from "./interfaces/user.interfaces";

export const userRepo: UserRepo = AppDataSource.getRepository(User)
export const contactRepo: ContactRepo = AppDataSource.getRepository(Contact)