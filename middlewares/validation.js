const { body, validationResult } = require('express-validator');

exports.registerValidation = [
    body("name",'Empty name ! please make a your personal name').notEmpty(),
    body("email","please make a correct email").isEmail(),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];

exports.loginValidation = [
    body("email","please make a correct email").isEmail(),
    body('password',"password should be at least 8 caracter").isLength({ min: 8 }),
];

exports.validation =(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}