import express from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.post("/product/new", createProduct);

router.put("/product/:id", updateProduct);

router.delete("/product/:id", deleteProduct);

router.get("/product/:id", getProductDetails);

export default router;
