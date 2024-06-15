import express, { Request, Response } from 'express'
//import cors from 'cors'

//importação das rotas de autenticação
import authRoute from './module/auth/auth.route'

const app = express()
app.use(express.json())
//app.use(cors())

// criação dos sufixos para serem utilizados em todas as todas de usuário
app.use('/auth', authRoute)

app.listen(1234, () => { console.log("Servidor ON")})