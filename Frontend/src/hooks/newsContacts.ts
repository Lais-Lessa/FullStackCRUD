import { ContactContext } from "../providers/UserContext/ContactContext.tsx/ContactContext";
import { useContext } from 'react'

export const newsContacts = () => useContext(ContactContext)