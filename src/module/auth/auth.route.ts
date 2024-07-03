import { Router } from 'express'
import { login } from './auth.controller'
import { loginSchema } from './auth.schema'
import { validateSchema } from '../../middleware/validateSchema'

const router = Router()

router.post('/login', validateSchema(loginSchema), async (req, res) => 
{
    try
    {
        const result = await login({ email: req.body.email, password: req.body.password });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

/*
router.get('/me', async (req, res) => 
{
    try
    {
        const result = await login({ email: req.body.email, password: req.body.password });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})
*/  
            
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjdhZDQyYmM2ZDljYWMyNzc2ZTZkMTYiLCJpYXQiOjE3MTkzMjc0OTF9.R2pTNemWoBCNLofnm4x4702b7uGS6wxvPaibgzXfLrk

export default router