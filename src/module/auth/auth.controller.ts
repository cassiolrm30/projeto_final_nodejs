import jwt from 'jsonwebtoken'
import { getOneByEmail } from '../users/user.controller'

interface parametros
{
  email: string
  password: string
}

export const login = async ({ email, password }: parametros) =>
{
  const userRaw = await getOneByEmail({ email })
  if (!userRaw)
    throw new Error('Usuário não encontrado')

  const user = userRaw.toObject()

  if (user.password !== password)
    throw new Error('Não autenticado')

  delete user.password;
  const token = jwt.sign({ _id: user._id }, 'secret');
  return { user, token }
}

export default { login }