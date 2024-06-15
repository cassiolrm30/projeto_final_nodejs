// importação do mongoose já configurado para acessar nosso banco local
import mongoose from '../../config/database'

const UserSchema = new mongoose.Schema
({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    password: String
},
{
    timestamps: true,
    versionKey: false
})

// exportação sem o DEFAULT para que possamos importar o modelo com o nome exato que foi criado
export const userModel = mongoose.model('usuarios', UserSchema)