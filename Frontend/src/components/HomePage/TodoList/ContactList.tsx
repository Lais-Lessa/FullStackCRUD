import React, { useContext } from "react"
import { ContactContext } from "../../../providers/UserContext/ContactContext.tsx/ContactContext"
import { ContactCard } from "../TodoCard/ContactCard"
import { StyledContactList } from "./StyledList/StyledContactList"
import { StyledCard } from "./StyledList/StyledCard"
import { IContact } from "../../../providers/UserContext/ContactContext.tsx/@types"

export const ContactList = () => {

    const { contactList } = useContext(ContactContext);
    
    return (
      <StyledContactList>
          <>
            <div>
              <h3>Listagem de Contatos</h3>
            </div>
            <StyledCard>
              {contactList.map((contact: IContact, index) => (<React.Fragment key={`${contact.name} ${index}` }> 
                  <ContactCard contact={contact} /> </React.Fragment> 
              ))}
            </StyledCard>
          </>
      </StyledContactList>
    );
  };

