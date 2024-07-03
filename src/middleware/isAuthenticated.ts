import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { getOneById } from "../module/users/user.controller"

export const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => 
{
  if (!req.headers.authorization)
  {
    return res.status(403).json({ error: 'É necessário enviar um token válido' })
  }

  try
  {
    const decoded = jwt.verify(req.headers.authorization.split('bearer ')[1], "secret");
    console.log("Passo 5");
    const user = await getOneById({ _id: decoded as string });
    console.log("Passo 6");
    if (user == null || !user.isAdmin)
    {
      console.log("Passo 7");
      return res.status(403).json({ error: 'Usuário não possui permissão' })
    }
    console.log("Passo 8");
    res.locals.user = user
    console.log("Passo 9");
    next()
  }
  catch (error)
  {
    return res.status(403).json({ error: 'É necessário enviar um token válido' })
  }
}