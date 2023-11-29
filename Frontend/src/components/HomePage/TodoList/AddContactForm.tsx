import { useContext, useState} from "react"
import { StyledContainer } from "../../FormRegister/StyledRegister/StyledContainer"
import { StyledMenuContainer } from "./StyledList/StyledMenuContainer"
import { StyledDivHomePage } from "./StyledList/StyledDivHomePage"
import { StyledHeader } from "../../StyledHeader/StyledHeader"
import { faAddressBook, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { StyledButtonHeader } from "../../Button/StyledButtonHeader"
import { ContactIcon } from "../../StyledHeader/ContactIcon"
import { AddContactFormModal } from "../Modal/AddContactFormModal"
import { StyledContainerContact } from "./StyledList/StyledContainerContact"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { StyledSpanHome } from "./StyledList/StyledSpanHome"
import { ContactList } from "./ContactList"
import { ContactContext } from "../../../providers/UserContext/ContactContext.tsx/ContactContext"
import { StyledLink } from "./StyledList/StyledLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from 'react-router-dom'

export const AddContactForm = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user } = useContext(UserContext);

    const { contactList } = useContext(ContactContext);
    
    const navigate = useNavigate()

    const openModal = () => {
        setIsModalOpen(true);
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

      const handleUserLogout = () => {
        localStorage.clear()
        navigate('/')
    }


    return (
        <>
        <StyledContainer>
            <StyledDivHomePage>
            <StyledMenuContainer>
                <StyledHeader>
                    <h2>Cadastrar Contatos</h2>
                    <StyledButtonHeader onClick={openModal}>
                    <ContactIcon icon={faAddressBook} />
                    Cadastrar Contato
                    </StyledButtonHeader>
                </StyledHeader>
                <StyledContainerContact >
                <div> 
                  <h2> Olá, {user?.name}</h2>
                  <StyledLink to={"/"} onClick={handleUserLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />Sair</StyledLink>
                </div>

                <StyledSpanHome>
                    {contactList && contactList.length === 0 ? (
                      <h2>Ainda não possui nenhum contato cadastrado. </h2>
                     ) : (
                        <ContactList />
                      )}
                </StyledSpanHome>
                </StyledContainerContact>
                {isModalOpen && <AddContactFormModal isOpen={isModalOpen} closeModal={closeModal} />}
            </StyledMenuContainer>      
            </StyledDivHomePage>
        </StyledContainer>
        </>
      )
}


