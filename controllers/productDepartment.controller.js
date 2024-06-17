const productDepartmentRepository = require("../repositories/productDepartment.repository");
const { BadRequestError, NotFoundError } = require("../errors/general.errors");
const catchAsync = require("../utils/catch.async");

    exports.getAllProductDepartments = catchAsync(async (req, res, next) => {
        const productDeps = await productDepartmentRepository.find();
        if (!productDeps) {
          return next(new BadRequestError("data"));
        }
        if (productDeps.length === 0) {
          return next(new NotFoundError("fault domains"));
        }
        res.status(200).json({
          status: "success",
          results: productDeps.length,
          data: productDeps,
        });
      });

      exports.createProductDepartment = catchAsync(async (req, res, next) =>{
        const newProductDepartment = await productDepartmentRepository.create({
          name: req.body.name,
          name_hebrew: req.body.name_hebrew,
        });
        if (!newProductDepartment) {
          return next(new BadRequestError("data"));
        } 
        return res.status(201).json({
          status: 'success',
          data: newProductDepartment,
        })
      })