import React, { createContext, useState } from "react";
import { IAddContactFormData, IContact, IContactContext, ITodosProviderProps } from "./@types";
import { TEditContactFormSchema } from "../../../schemas/AddContactFormSchema";
import { api } from "../../../services/Api";
import { useUserContext } from "../../../hooks/useUserContext";
import { toast } from 'react-toastify'

export const ContactContext = createContext({} as IContactContext);


export const ContactProvider = ({ children }: ITodosProviderProps) => {

    const [contactList, setContactList] = React.useState<IContact[]>([]);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [ editingContact, setEditingContact] = useState<IContact | null>(null);
    const { user } = useUserContext()
    
    const addContact = async (formData: IAddContactFormData) => {

            try {
                const response = await api.post(`contact/`, formData);
                const newContact = response.data
                setContactList((contactList) => [...contactList, newContact])   
            } catch (error) {
              console.log(error)
                toast.error(
                    'Oops! Algo deu errado ao criar o seu contato, tente novamente mais tarde!',
                    {
                      className: 'toast-error',
                    },
                  )
        }
    };

    const editContact = async (formData: TEditContactFormSchema, contactId: number) => {
      try {
          const response = await api.patch(`contact/${contactId}`, formData);
  
          if (response.status === 200) {
              setContactList((contactList) => {
                  return contactList.map(contact => 
                      contactId === contact.id ? { ...contact, ...formData } : contact
                  );
              });
          } else {
              toast.error('Erro ao editar contato', {
                className: 'toast-error',
              })
          }
      } catch (error) {
        toast.error('Erro ao editar contato', {
          className: 'toast-error',
        })
      }
  };
    
    return (
        <ContactContext.Provider
          value={{
            contactList,
            addContact,
            editContact,
            editingContact,        
            setEditingContact,
            isOpenModal,
            setIsOpenModal,
            setContactList,
            user,
          }}
        >
          {children}
        </ContactContext.Provider>
      );
}
