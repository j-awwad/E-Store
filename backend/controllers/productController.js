import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js';

// @desc Fetch all products
// @routes     Get/api/products
// @access     public
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products)
});

// @desc Fetch a product
// @routes     Get/api/product/:id
// @access     public
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        res.status(404);
        throw new Error('Resouce not found');
    }
})

export {getProducts, getProductById}