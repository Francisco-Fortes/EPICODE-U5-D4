import express from "express";
import ProductsModel from "./model.js";

const productsRouter = express.Router();
// GET /product => returns the list of products
// GET /product /123 => returns a single product
// POST /product => create a new product
// PUT /product /123 => edit the product
// DELETE /product /123 => delete the product with the given id
// It should be possible to filter products by name OR surname
// it should be possible to filter products by price range
// it should be possible to filter products by categories
// NOTE: When the product is deleted, all reviews related to the product must be deleted

export default productsRouter;
