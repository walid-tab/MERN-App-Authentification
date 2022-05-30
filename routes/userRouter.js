const express = require('express')
const { register, login } = require('../controllers/userController')
const { isAuth } = require('../middlewares/Auth')
const { registerValidation, validation, loginValidation } = require('../middlewares/validation')
const userRouter = express()

//Register
//method post
userRouter.post('/register',registerValidation,validation,register)

//login
//method post
userRouter.post('/login',loginValidation,validation,login)

//method get
userRouter.get('/current',isAuth,(req, res, next)=>{
    res.send({user:req.user})
})

module.exports = userRouter