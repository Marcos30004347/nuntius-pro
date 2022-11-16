import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().nullable().required(''),
  username: yup.string().nullable().required(''),
  email: yup
    .string()
    .nullable()
    .email('Por favor, digite um endereço de email válido.')
    .typeError('Por favor, digite um endereço de email')
    .required(''),
  password: yup
    .string()
    .nullable()
    .min(6, 'A senha tem que ter no mínimo 6 caracteres')
    .required(''),
  confirmPassword: yup
    .string()
    .nullable()
    .oneOf([yup.ref('password'), null], 'As senhas são diferentes')
    .required(''),
  about: yup.string().nullable().required('')
});
