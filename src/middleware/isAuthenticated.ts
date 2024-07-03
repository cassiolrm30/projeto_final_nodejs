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
    const user = await getOneById({ _id: decoded as string });
    if (user == null || !user.isAdmin)
    {
      return res.status(403).json({ error: 'Usuário não possui permissão' })
    }
    res.locals.user = user
    next()
  }
  catch (error)
  {
    return res.status(403).json({ error: 'É necessário enviar um token válido' })
  }
}