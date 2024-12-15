const path = require('path')
const { getP, createP,updateP,deleteP } = require('../models/products.js')

const displayDashboard = (req,res) => {
    const products = getP()
    res.render('dashboard', {
        products:products,
        errorMessage:''
    })
}

const fetchProducts = (req,res) => {
    const products = getP()
    res.send (products)
}

const createProduct = (req,res) => {
    const products = getP()
    const errors = []
    const {title, currentPrice,mrp, imageURL} = req.body

    //Title : cannot be empty and it  cannot be less than 3 characters
    if(title == '' || title.length < 3){
        errors.push('Incorrect product title')
    }

    //currentPrice : cannot be empty and can not be non numeric
    if(currentPrice=='' || isNaN(Number(currentPrice))){
        errors.push('Incorrect curentPrice')
    }

    //mrp : cannot be empty and can not be non numeric
    if(mrp=='' || isNaN(Number(mrp))){
        errors.push('Incorrect M.R.P')
    }

    //Image URL : cannot be empty and it has to be valid url
    try{
        const url1 = new URL(imageURL)
    }catch(error){
        errors.push('Incorrect Image URL')
    }
    
    if(errors.length!=0){
        return res.render('dashboard',{products,errorMessage:errors[0]})
    }

    const newProduct = {title, currentPrice,mrp, imageURL}
    createP(newProduct)
    res.redirect('/dashboard')
}

const updateProduct = (req,res) => {
    const { id } = req.params
    const {title, currentPrice,mrp,imageURL} = req.body
    const updatedProduct = {title, currentPrice,mrp,imageURL}
    updateP(parseInt(id), updatedProduct)
    res.send('Product updated successfully')
}

const deleteProduct = (req, res) => {
    const { id } = req.params
    deleteP(parseInt(id))
    res.send('Product deleted successfully')
  }
module.exports = {
    fetchProducts,
    createProduct,
    displayDashboard,
    updateProduct,
    deleteProduct
}