// const { getP } = require('../models/products.js')
const { body } = require('express-validator')
// const validateProductMiddleware = (req,res,next) => {
//     const products = getP()
//     const errors = []
//     const {title, currentPrice,mrp, imageURL} = req.body
//      //Title : cannot be empty and it  cannot be less than 3 characters
//      if(title == '' || title.length < 3){
//         errors.push('Incorrect product title')
//     }

//     //currentPrice : cannot be empty and can not be non numeric
//     if(currentPrice=='' || isNaN(Number(currentPrice))){
//         errors.push('Incorrect curentPrice')
//     }

//     //mrp : cannot be empty and can not be non numeric
//     if(mrp=='' || isNaN(Number(mrp))){
//         errors.push('Incorrect M.R.P')
//     }

//     //Image URL : cannot be empty and it has to be valid url
//     try{
//         const url1 = new URL(imageURL)
//     }catch(error){
//         errors.push('Incorrect Image URL')
//     }
    
//     if(errors.length!=0){
//         return res.render('dashboard',{products,errorMessage:errors[0]})
//     }
    
//     next()
// }




const validationRules = [
    body('title').not().isEmpty().withMessage('Product Title can not be empty.').isLength({min:3}).withMessage('Product title should be atleast 3 characters.'),
    body('currentPrice').not().isEmpty().withMessage('Current Price can not be empty.').isNumeric().withMessage('Current Price needs to be numeric.'),
    body('mrp').not().isEmpty().withMessage('M.R.P can not be empty.').isNumeric().withMessage('M.R.P needs to be numeric.'),
    body('imageURL').not().isEmpty().withMessage('Image URL can not be empty').isURL().withMessage('Image URL is not valid.')
]

module.exports = { validationRules }





