import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import EjsLayouts from 'express-ejs-layouts';
import path from 'path';
import  addProductValidateMiddleware  from './src/middlewares/validation.middleware.js';

const server = express();

// main.js publically exposed
server.use(express.static('public'))

// parse form data - instruct to encode the data
server.use(express.urlencoded({ extended: true }));

//Setup view engine Settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));

// express-ejs-layout as a middleware
server.use(EjsLayouts);

// create an instance of ProductContrller
const productController = new ProductController();
server.get('/' , productController.getProduct);
server.get('/add-product', productController.getAddForm);
server.get('/update-product/:id', productController.getUpdateProductView);

// DELETE Product
server.post('/delete-product/:id', productController.deleteProduct)

// VALIDATION Middleware
server.post('/', addProductValidateMiddleware, productController.addNewProduct);
server.post('/update-product', productController.postUpdateProduct)

server.use(express.static('src/views'));

server.listen(3400);

console.log('Listining to 3400');

