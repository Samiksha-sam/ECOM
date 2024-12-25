const path = require('path')
const { getP, createP,updateP,deleteP } = require('../models/products.js')
const { validationResult } = require('express-validator')

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
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.render('dashboard', {
            products,
            errorMessage:errors.array()[0].msg
        })
    }
    
    const {title, currentPrice,mrp, imageURL} = req.body
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