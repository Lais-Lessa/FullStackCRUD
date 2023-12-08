import { useContext, useState } from "react"
import { IContact } from "../../../providers/UserContext/ContactContext.tsx/@types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faEdit } from '@fortawesome/free-solid-svg-icons'
import { StyledListCard } from "./StyledCard/StyledListCard"
import { StyledButtonCardRemove } from "../../Button/StyledButtonCardRemover"
import { StyledButtonCardEdit } from "../../Button/StyledButtonCardEdit"
import { EditModal } from "./EditModal"
import { api } from "../../../services/Api"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { toast } from 'react-toastify'

interface IContactCardProps{
  contact: IContact 
}

export const ContactCard = ({ contact }: IContactCardProps) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [selectedContactId, setSelectedContactId] = useState<string | null>(null);

  const { setGlobalLoading } = useContext(UserContext)

  const openModal = () => {
      setSelectedContactId(String(contact.id))
      setIsModalOpen(true);
      };

  const closeModal = () => {
    setSelectedContactId(null)
    setIsModalOpen(false);
  };
  
  const handleDeleteContact = async () => {

    setGlobalLoading(false)
    
    const userConfirmed = window.confirm("Você deseja mesmo excluir este contato?") 

    if(userConfirmed){
      try {
        await api.delete(`contact/${contact.id}`);
        setGlobalLoading(true)
    }
    catch (error) {
      toast.error('Erro ao buscar dados do contato', {
        className: 'toast-error',
      })
    }
    }
  };

  return (
    <StyledListCard key={contact.id}> 
      <p>Nome: {contact.name}</p>
      <p>E-mail: {contact.email}</p>
      <p>Telefone: {contact.phoneNumber}</p>
      <div>
        <StyledButtonCardRemove onClick={() => handleDeleteContact()}>
          <FontAwesomeIcon icon={faTrashCan} /> Remover
        </StyledButtonCardRemove>
        <StyledButtonCardEdit onClick={openModal}>
          <FontAwesomeIcon icon={faEdit} /> Editar
        </StyledButtonCardEdit>
      </div>
      {isModalOpen && (
        <EditModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          contactId={contact.id !== null ? contact.id : null}
        />
      )}
    </StyledListCard>
  )
}
