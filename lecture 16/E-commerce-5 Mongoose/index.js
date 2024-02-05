// import express
import "./env.js";
import express from "express";
import swagger from "swagger-ui-express";
import cors from "cors";
// imported routers for products
import productRouter from "./src/features/product/product.routes.js";
import usersRouter from "./src/features/users/user.routes.js";
import cartRouter from "./src/features/cartItems/cartItem.routes.js";
import orderRouters from "./src/features/order/order.routes.js";
import likeRouter from "./src/features/like/like.routes.js";
// import basicAuthorizer from "./src/middleware/basicAuth.middleware.js";
import jwtAuth from "./src/middleware/jwtAuth.middileware.js";
// swagger-documentation
import apiDocs from "./swagger.json" assert { type: "json" };
// loggerMiddileware file we made
import loggerMiddleware from "./src/middleware/logger.middleware.js";
import ApplicationError from "./src/errorHandler/applicationError.js";

// mongoDB file
import { connectToMongoDB } from "./src/config/mongodb.js";
import { connectusingMongoose } from "./src/config/mongooseConfig.js";
import mongoose from "mongoose";

// create server
const app = express();

// defeined port
const port = 3000;

//Body parser middleware
app.use(express.json());

//CORS policy configuration
var corsOptions = {
  origin: "http://localhost:5500",
};
app.use(cors(corsOptions));

//Logging Middleware

app.use(loggerMiddleware);

// For all the request related to product , redirect to product routes.
// localhost:3000/api/products
app.use("/api-docs", swagger.serve, swagger.setup(apiDocs));
app.use("/api/products", jwtAuth, productRouter);
app.use("/api/users", usersRouter);
app.use("/api/cartItems", jwtAuth, cartRouter);
app.use("/api/orders", jwtAuth, orderRouters);
app.use("/api/likes", jwtAuth, likeRouter);

// Default request handeler
app.get("/", (req, res) => {
  res.send("welcome to e-commerse application API's");
});

//ErrorHandeler middleware
app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof mongoose.Error.ValidationError) {
    res.status(400).send(err.message);
  }
  if (err instanceof ApplicationError) {
    res.status(err.code).send(err.message);
  }
  // serverErrors
  res.status(500).send("Something went wrong, Please try again Later");
});

//404 Middleware to handle 404
app.use((req, res) => {
  res
    .status(404)
    .send(
      "404, API NOT FOUND - Please check our Documentation for more information at - localhost:3000/api-docs"
    );
});

// listening to the port
app.listen(port, () => {
  console.log(`Server started on ${port}`);
  // connectToMongoDB();
  connectusingMongoose();
});

//  these are not used as we replaced it with CORS

// app.use((req,res,next)=>{
//   res.header('Access-Control-Allow-Origin', 'http://localhost:5500');
//   res.header('Access-Control-Allow-Headers', '*');
//   res.header('Access-Control-Allow-Methods', '*');

// / return Ok for preflight request .
//   if(req.method == "OPTIONS"){
//     return res.sendStatus(200);
//   }
//   next();
// })
