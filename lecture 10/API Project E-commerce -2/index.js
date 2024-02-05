// import express
import express from "express";
// imported routers for products
import productRouter from "./src/features/product/product.routes.js";
import usersRouter from "./src/features/users/user.routes.js";
// import basicAuthorizer from "./src/middleware/basicAuth.middleware.js";
import jwtAuth from "./src/middleware/jwtAuth.middileware.js";
// create server
const app = express();
// defeined port
const port = 3000;

//Body parser middleware
app.use(express.json());

// For all the request related to product , redirect to product routes.
// localhost:3000/api/products
app.use("/api/products", jwtAuth, productRouter);
app.use("/api/users", usersRouter);

// Default request handeler
app.get("/", (req, res) => {
  res.send("welcome to ecommerse application apis");
});

// listening to the port
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
