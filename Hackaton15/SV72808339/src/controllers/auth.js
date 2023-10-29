const User = require('../models/User.js')
const bcrypt = require('bcryptjs')

const  crearUsuario = async (req, res) => {
    try {
        const {email,password,nombre} = req.body;

        const user = new User(req.body);
        const salt = bcrypt.genSaltSync()


        user.password = bcrypt.hashSync(password, salt)
        await user.save()
        res.send(user)
    } catch (error) {
        res.status(500).json({error})
    }
    
}

module.exports = {
    crearUsuario
}