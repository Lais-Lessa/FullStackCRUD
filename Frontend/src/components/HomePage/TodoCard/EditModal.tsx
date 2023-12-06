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
import { EditModalProps } from '../../../providers/UserContext/ContactContext.tsx/@types';
import { formatPhoneNumberInput, handleNumber } from '../../../utils/utils';


export const EditModal: React.FC<EditModalProps> = ({ isOpen, closeModal, contactId}) => {

  const { editContact, editingContact } = useContext(ContactContext);

  if (!isOpen) {

    return null; 
  }

  const formattedContactId = typeof contactId === 'string' ? Number(contactId) : contactId;


  const { register, handleSubmit, reset, formState: { errors } } = useForm <TEditContactFormSchema> ({
    resolver: zodResolver(editContactFormSchema),
    defaultValues: {
      ...editingContact
    },
  });
  
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
          const dataFormated = {
            ...contatoBanco, phoneNumber: formatPhoneNumberInput(contatoBanco.phoneNumber)
          }
          reset(dataFormated)
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
            <Input type="text" label="Nome Completo:"  {...register('name')} error={errors.name} className="custom-input" />
            <Input  type="email" label="E-mail:"  {...register('email')} error={errors.email} className="custom-input" />
            <Input  callback={handleNumber} type="text" label="Telefone:"  {...register('phoneNumber')} error={errors.phoneNumber} className="custom-input" />
            <StyledButtonModal onClick={handleSubmit(submit)}>Editar Contato</StyledButtonModal>
          </StyledFormModal>
        </StyledEditModal>
      )}
    </>
  );
};
