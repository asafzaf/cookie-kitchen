const productRepository = require("../repositories/product.repository");
const { BadRequestError, NotFoundError } = require("../errors/general.errors");
const catchAsync = require("../utils/catch.async");

    exports.getAllProduct = catchAsync(async (req, res, next) => {
        const product = await productRepository.find();
        if (!product) {
          return next(new BadRequestError("data"));
        }
        if (product.length === 0) {
          return next(new NotFoundError("fault domains"));
        }
        res.status(200).json({
          status: "success",
          results: product.length,
          data: product,
        });
      });

      exports.createProduct = catchAsync(async (req, res, next) =>{
        const newProduct = await productRepository.create({
          name: req.body.name,
          name_hebrew: req.body.name_hebrew,
          department: req.body.department,
        });
        if (!newProduct) {
          return next(new BadRequestError("data"));
        } 
        return res.status(201).json({
          status: 'success',
          data: newProduct,
        })
      })