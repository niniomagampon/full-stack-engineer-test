const { body, validationResult } = require("express-validator");
const User = require("../model/user.model");
const hashpash = require('../utilities/hashpass')

const validateRegister = [
    body('firstName').notEmpty().withMessage("First Name is required."),
    body('lastName').notEmpty().withMessage("Last Name is required."),
    body('emailAddress').notEmpty().withMessage("Email Address is required."),
    body('emailAddress').isEmail().withMessage("Please enter a valid email address."),
    body('password').notEmpty().withMessage("Password is required."),
    body('password').isLength({ min: 8 }).withMessage("Password should contain 8."),
    body('confirmPassword').notEmpty().withMessage("Confirm Password is required."),
    body('confirmPassword').custom((value, { req }) => {
        if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password');
        }
        return true;
    }),
    body('emailAddress').custom(async (value, { req }) => {
        const result = await User.findAll({
            where: {
                emailAddress: value
            }
        })
        if (result.length !== 0) {
            throw new Error('Email Address has already been used.')
        }
        return true
    }),
    (req, res, next) => {

        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                result: false,
                errors: errors.array()
            });
        }

        next()
    }
]

const validateLogin = [
    body('emailAddress').notEmpty().withMessage("Email Address is required."),
    body('password').notEmpty().withMessage("Password is required."),
    body('password').custom(async (value, { req }) => {
        const result = await User.findAll({
            where: {
                emailAddress: req.body.emailAddress
            }
        })
        if (result.length === 0) {
            throw new Error('User Not Found')
        } else {
            const data = result[0].dataValues
            const comparePass = await hashpash.hashCompare(value, data.password)

            if (!comparePass) {
                throw new Error('Incorrect password');
            }
        }
        return true
    }),
    (req, res, next) => {

        const errors = validationResult(req);


        if (!errors.isEmpty()) {
            return res.status(400).json({
                result: false,
                errors: errors.array()
            });
        }

        next()
    }

]


module.exports = { validateRegister, validateLogin }