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
    const  token  = localStorage.getItem("@TOKEN")
    
    const addContact = async (formData: IAddContactFormData) => {

            try {
                await api.post(`contact/`, formData);
                await fetchContacts()

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

  const fetchContacts = async () => {

    try {

        const { data } = await api.get('/contact', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setContactList(data); 
    
    } catch (error) {
      toast.error('Oops! Algo deu errado ao carregar o seu contato, tente novamente mais tarde');
    } finally {
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
            fetchContacts
          }}
        >
          {children}
        </ContactContext.Provider>
      );
}

