const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");

// get all products
const getAllProducts = asyncHandler(async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);

    } catch (e) {
        res.status(500).json({message: e.message});
    }
})

// get product by id
const getProductById = asyncHandler(async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    } catch (e) {
        res.status(500);
        throw new Error(e.message);
    }
})

// create a product
const createProduct = asyncHandler(async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);

    } catch (error) {
        res.status(500);
        throw new Error(e.message);
    }
})

// update a product
const updateProduct = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            res.status(404);
            throw new Error(`Product with id ${id} not found`);
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (e) {
        res.status(500);
        throw new Error(e.message);
    }
})

// delete a product
const deleteProduct = asyncHandler(async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            res.status(404);
            throw new Error(`Product with id ${id} not found`);
        }
        res.status(200).json({message: `Product with id ${id} deleted`});

    } catch (e) {
        res.status(500);
        throw new Error(e.message);
    }
})


module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}