import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .nullable()
    .email('Por favor, digite um endereço de email válido.')
    .typeError('Por favor, digite um endereço de email'),
  password: yup.string().nullable().required('')
});
