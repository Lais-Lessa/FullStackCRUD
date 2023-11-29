import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TEditContactFormSchema, editContactFormSchema } from '../../../schemas/AddContactFormSchema';
import { ContactContext } from '../../../providers/UserContext/ContactContext.tsx/ContactContext';
import { Input } from '../../Input/Input';
import { StyledButtonModal } from '../../Button/StyledButtonModal';
import { StyledHeaderModal } from '../Modal/StyledModal/StyledHeaderModal';
import { StyledFormModal } from '../Modal/StyledModal/StyledFormModal';
import { StyledEditModal } from './StyledCard/StyledEditModal';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../../services/Api';
import { toast } from 'react-toastify'

interface EditModalProps {
    isOpen: boolean;
    closeModal: () => void;
    contactId:number | null;
}

export const EditModal: React.FC<EditModalProps> = ({ isOpen, closeModal, contactId}) => {
  const { editContact, editingContact } = useContext(ContactContext);
  
  if (!isOpen) {
    return null; 
  }

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TEditContactFormSchema>({
    resolver: zodResolver(editContactFormSchema),
    defaultValues: {
      ...editingContact
    },
  });

  const formattedContactId = typeof contactId === 'string' ? Number(contactId) : contactId;

  const submit: SubmitHandler<TEditContactFormSchema> = async (formData: TEditContactFormSchema) => {
    
    if (formattedContactId !== null) {
      editContact(formData, formattedContactId);
      closeModal();
    }
  };
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        if(formattedContactId !== null) {

          const response = await api.get(`/contact/${formattedContactId}`);
          const contatoBanco = response.data;
          reset({name: contatoBanco.name, email: contatoBanco.email, phoneNumber: contatoBanco.phoneNumber })
        }
    } catch (error) {
      toast.error('Erro ao buscar dados do contato', {
        className: 'toast-error',
      })
    }
  };
  
    fetchData();
  
}, [formattedContactId]);

  return (
    <>
      {isOpen && (
        <StyledEditModal>
          <StyledHeaderModal>
            <h2>Editar Contato</h2>
            <p onClick={closeModal}>X</p>
          </StyledHeaderModal>
          <StyledFormModal>
            <Input isPhoneNumber={false} type="text" label="Nome Completo:" placeholder="Digite seu nome completo" {...register('name')} error={errors.name} className="custom-input"/>
            <Input isPhoneNumber={false} type="email" label="E-mail:" placeholder="Digite seu email aqui" {...register('email')} error={errors.email} className="custom-input"/>
            <Input isPhoneNumber={true} type="text" label="Telefone:" placeholder="Digite seu telefone aqui" {...register('phoneNumber')} error={errors.phoneNumber} className="custom-input"/>
            <StyledButtonModal onClick={handleSubmit(submit)}>Editar Contato</StyledButtonModal>
          </StyledFormModal>
        </StyledEditModal>
      )}
    </>
  );
};
