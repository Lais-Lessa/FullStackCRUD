import { Contact } from "../entities/Contact.entity";
import { User } from "../entities/User.entity";
import {  contactCreate } from "../interfaces/contact.interfaces";
import { contactRepo } from "../repositories";
import { contactCreateSchema } from "../schemas/contact.schema";


export const createContact = async (payload: contactCreate, user: User): Promise<any> => {

    const contact: Contact = contactRepo.create({
        ...payload,
        user
    })

    await contactRepo.save(contact)

    return contactCreateSchema.parse(contact)
};

export const contactReadServices = async (userId: number): Promise<any> => {
  const contacts = await contactRepo.find({
    where: {
    user: { id: userId }
  }, relations: ['user']})
   
   return contacts
};


export const contactServices =  async function contactRead(contactId: number): Promise<Contact | null> {
    const contact = await contactRepo.findOne({
      where: {
        id: contactId
      }
    });

    return contact || null
} 

export const updateContact = async (
  id: number,
  name?: string,
  email?: string,
  phoneNumber?: string,
) => {
  const repo = await contactRepo.findOne({ where: { id } });
  
  if (!repo) {
    console.log("Contato não encontrado");
    return null; 
  }

  if (name !== undefined) {
    repo.name = name;
  }

  if (email !== undefined) {
    repo.email = email;
  }

  if (phoneNumber !== undefined) {
    repo.phoneNumber = phoneNumber;
  }

  await contactRepo.save(repo);

  return repo;
};

export const contactDestroy = async (contactId: number): Promise<void> => {
  const contactToRemove = await contactRepo.findOne({
    where: {
      id: contactId
    }
  });

  if (!contactToRemove) {
    throw new Error(`Contato com ID ${contactId} não encontrado.`);
  }

  await contactRepo.remove(contactToRemove);
};