import { Router } from 'express'
import { login } from './auth.controller'

const router = Router()

router.post('/login', async (req, res) => 
{
    const result = await login({ email: req.body.email, password: req.body.password });
    return res.json(result);
})

export default router