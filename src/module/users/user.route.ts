import { Router } from 'express'
import { getAll, getOneById, getOneByEmail, store, update, remove } from './user.controller'
import { userSchemaPOST, userSchemaPUT } from '../users/user.schema'
import { validateSchema } from '../../middleware/validateSchema'

const router = Router()

router.get('/', async (req, res) => 
{
    try
    {
        const result = await getAll();
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

router.get('/:id', async (req, res) => 
{
    try
    {
        const result = await getOneById({ _id: req.params.id });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

router.get('/:email', async (req, res) => 
{
    try
    {
        const result = await getOneByEmail({ email: req.params.email });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

router.post('/', validateSchema(userSchemaPOST), async (req, res) => 
{
    try
    {
        const result = await store({ name: req.body.name, email: req.body.email, password: req.body.password,
                                    isAdmin: req.body.isAdmin });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

router.put('/:id', validateSchema(userSchemaPUT), async (req, res) => 
{
    try
    {
        const result = await update({ _id: req.params.id, ...res.locals.validated });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

router.delete('/:id', async (req, res) => 
{
    try
    {
        const result = await remove({ _id: req.params.id });
        return res.json(result);
    }
    catch (error: any)
    {
        return res.status(401).json({ error: error.message });
    }
})

export default router