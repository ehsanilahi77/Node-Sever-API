const express = require('express');
const Product = require("../models/productModel");
const router = express.Router();
const {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/productController");

// get all products
router.get('/',getAllProducts)

// get product by id
router.get('/:id', getProductById)

//create a product
router.post('/', createProduct)

// update a product
router.put('/:id', updateProduct)

// delete a product
router.delete('/:id', deleteProduct)

module.exports = router;