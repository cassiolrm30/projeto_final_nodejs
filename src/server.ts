import express, { Request, Response } from 'express'
import cors from 'cors'

//importação das rotas de autenticação
import authRoute from './module/auth/auth.route'
import userRoute from './module/users/user.route'
import bookRoute from './module/books/book.route'

const app = express()
app.use(express.json())
app.use(cors())

// criação dos prefixos para serem utilizados em todas as rotas
app.use('/auth', authRoute)
app.use('/usuarios', userRoute)
app.use('/livros', bookRoute)

app.listen(1234, () => { console.log("Servidor ON")})