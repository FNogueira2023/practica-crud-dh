const express = require("express");
const router = express.Router()
const productController = require("../controllers/productController");
const {body} = require('express-validator');

let validateCreateform = [
    body('name').notEmpty().withMessage('Debe completar nombre'),
    body('price').notEmpty().withMessage('Debe completar precio'),
    body('description').notEmpty().withMessage('Debe completar description')
]

router.get("/list", productController.list);
router.get("/detail/:id", productController.detail);
router.get("/create", productController.create);
router.post("/create",validateCreateform, productController.store);
router.get("/edit/:id", productController.edit);
router.put("/edit/:id", productController.update);

module.exports = router