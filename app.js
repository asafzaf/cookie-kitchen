// app.js

require('dotenv').config({path: '.env.dev'});
const express = require('express');
const app = express();
const globalErrorHandler = require("./controllers/error.controller");
const port = process.env.PORT || 3000;

const mainRouter = require('./routers/main.router');
// Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", mainRouter);

app.all("*", (req, res, next) => {
    next(new NotFoundError(req.originalUrl));
  });
  
app.use(globalErrorHandler);


// Start the server
const server = app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
