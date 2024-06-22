import { boolean, z } from 'zod'

export const userSchemaPOST = z.object
({
    name: z.string({ required_error: 'O nome é obrigatório' })
           .min(5, {  message: 'O mínimo para o campo nome são 5 caracteres' }),
    email: z.string({ required_error: 'É necessário conter um e-mail' })
            .email({ message: 'Este e-mail não é válido' }),
    password: z.string({ required_error: 'É necessário conter uma senha' })
               .min(5, { message: 'O mínimo para o campo senha são 5 caracteres' }),
    isAdmin: z.boolean().optional()
})

export const userSchemaPUT = z.object
({
    name: z.string({ required_error: 'O nome é obrigatório' })
           .min(5, {  message: 'O mínimo para o campo nome são 5 caracteres' }).optional(),
    email: z.string({ required_error: 'É necessário conter um e-mail' })
            .email({ message: 'Este e-mail não é válido' }).optional(),
    password: z.string({ required_error: 'É necessário conter uma senha' })
               .min(5, { message: 'O mínimo para o campo senha são 5 caracteres' }).optional(),
    isAdmin: z.boolean().optional()
})