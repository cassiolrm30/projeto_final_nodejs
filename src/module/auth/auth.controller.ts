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
    return false;
  return userRaw.toObject().password === password;
}

export default { login }