import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AddContactFormSchema, TAddNewsFormSchema } from '../../../schemas/AddContactFormSchema';
import { ContactContext } from '../../../providers/UserContext/ContactContext.tsx/ContactContext';
import { Input } from '../../Input/Input';
import { StyledModalContainer } from './StyledModal/StyledModalContainer';
import { StyledHeaderModal } from './StyledModal/StyledHeaderModal';
import { StyledFormModal } from './StyledModal/StyledFormModal';
import { StyledButtonModal } from '../../Button/StyledButtonModal';

interface EditContactFormProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const AddContactFormModal: React.FC<EditContactFormProps> = ({ isOpen, closeModal}) => {

  
  const { register, handleSubmit, formState: { errors } } = useForm<TAddNewsFormSchema>({
    resolver: zodResolver(AddContactFormSchema),
  });

  const { addContact } = useContext(ContactContext);

  const submit: SubmitHandler<TAddNewsFormSchema> = async (formData: TAddNewsFormSchema) => {
      addContact(formData);
      closeModal();
  }; 
  
  return (
    <>
    {isOpen && (
            <StyledModalContainer>
                <StyledHeaderModal>
                <h2>Cadastre aqui o seu contato</h2>
                <p onClick={closeModal}>X</p>
                </StyledHeaderModal>
                <StyledFormModal>
                    <Input isPhoneNumber={false} type="text" label="Nome Completo:" placeholder="Digite seu nome completo" {...register('name')} error={errors.name} className="custom-input"/>
                    <Input isPhoneNumber={false} type="email" label="E-mail:" placeholder="Digite seu email aqui" {...register('email')} error={errors.email} className="custom-input"/>
                    <Input isPhoneNumber={true} type="text" label="Telefone:" placeholder="Digite seu telefone aqui" {...register('phoneNumber')} error={errors.phoneNumber} className="custom-input"/>
                    <StyledButtonModal type="submit" onClick={handleSubmit(submit)}>Cadastrar Contato</StyledButtonModal>
                </StyledFormModal>
            </StyledModalContainer>
    )}
    </>
  );
};