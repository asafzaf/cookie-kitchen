const express = require("express");
const productDepartmentRouter = require('./productDepartment.router');
const productRouter = require('./product.router');


const router = express.Router();

router.use('/productDepartment', productDepartmentRouter);
router.use('/product', productRouter);

// Sample route
router.get('/', (req, res) => {
    console.log('got GET request');
    res.send('Hello World!');
});

// Additional routes
router.get('/about', (req, res) => {
    res.send('About Page');
});

router.post('/data', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
});

module.exports = router;