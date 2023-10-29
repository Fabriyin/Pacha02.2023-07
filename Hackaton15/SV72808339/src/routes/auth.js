const {Router} = require('express')
const {check} = require('express-validator')

const {validarCampos} = require('../middlewares/validarCampos.js')
const {crearUsuario} = require('../controllers/auth.js')

const router = Router()


router.post('/register', [
    check('name','El campo nombre es obligatorio').not().isEmpty(),
    check('email','El campo contraseña es obligatorio').isEmail(),
    check('password','El campo correo es obligatorio').not().isEmpty(),
    validarCampos

], crearUsuario)

module.exports = router