const express = require("express");
const {getAllProducts, 
    createProduct,
    updateProduct,
    findProduct,
    deleteProduct} = require("../controllers/productController.js");

const router = express.Router();

router.get("/products",getAllProducts);
router.post("/create",createProduct);
router.put("/updateproduct",updateProduct);
router.post("/findone",findProduct);
router.delete("/delete",deleteProduct);

module.exports = router;