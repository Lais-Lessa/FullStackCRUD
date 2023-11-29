import { z } from 'zod'

export const AddContactFormSchema = z.object({

  name: z
    .string().min(1, 'O nome é obrigatório'),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório')
    .email('O e-mail deve estar no formato correto'),
   phoneNumber: z
   .string().refine((value) => value || /\(\d{2}\) \d{5}-\d{4}/.test(value), {
    message: 'Formato de telefone inválido. Use (XX) XXXXX-XXXX.',
  }),
})

export const editContactFormSchema = z.object({
  name: z
  .string(),
  email: z
  .string()
  .email('O e-mail deve estar no formato correto'),
  phoneNumber: z.string()
  })

export type TAddNewsFormSchema = z.infer<typeof AddContactFormSchema>
export type TEditContactFormSchema = z.infer<typeof editContactFormSchema>