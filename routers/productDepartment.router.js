const express = require("express");
const productDepartmentController = require('../controllers/productDepartment.controller');

const router = express.Router();

router.route('/').get(productDepartmentController.getAllProductDepartments).post(productDepartmentController.createProductDepartment);

module.exports = router;