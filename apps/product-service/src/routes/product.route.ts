import { Router } from "express";
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/product.controller";

const router: Router = Router()

router.post("/", createProduct);
router.post("/:id", updateProduct);
router.post("/:id", deleteProduct);
router.post("/", getProducts);
router.post("/:id", getProduct);


export default router;