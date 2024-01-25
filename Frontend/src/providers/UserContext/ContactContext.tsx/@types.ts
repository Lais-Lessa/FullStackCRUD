import { TAddNewsFormSchema, TEditContactFormSchema } from "../../../schemas/AddContactFormSchema";
import { IUser } from "../@types";

export interface ITodosProviderProps{
    children: React.ReactNode;
} 

export interface IContact{
    id: number;
    name: string;
    email: string;
    phoneNumber: string;
}


export interface IAddContactFormData{
    name: string;
    email: string;
    phoneNumber: string;
}


export interface IContactContext {
    contactList: IContact[];
    addContact: (formData: TAddNewsFormSchema) => void;
    editContact: (formData: TEditContactFormSchema, contactId: number) => void;
    editingContact: IContact | null;
    setEditingContact: React.Dispatch<React.SetStateAction<IContact | null>>;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    setContactList: React.Dispatch<React.SetStateAction<IContact[]>>
    user: IUser | null
    fetchContacts: () => Promise<void>
   
}

export interface EditModalProps {
    isOpen: boolean;
    closeModal: () => void;
    contactId: number | null;
}