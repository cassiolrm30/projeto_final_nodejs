import { z } from 'zod'

export const loginSchema = z.object
({
    email: z.string({ required_error: 'É necessário conter um e-mail' })
            .email({ message: 'Este e-mail não é válido.' }),
    password: z.string({ required_error: 'É necessário conter uma senha' })
               .min(5, { message: 'O mínimo para o campo senha são 5 caracteres' })
})