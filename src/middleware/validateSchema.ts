import { Request, Response, NextFunction } from 'express'
import { ZodSchema } from 'zod'

export const validateSchema = (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => 
{
  try
  {
    const validated = schema.parse(req.body);
    res.locals.validated = validated;
    return next();
  }
  catch (e: any)
  {
    return res.status(400).json({ error: e.errors })
  }
}