import express from 'express';
import ProductController from './src/controllers/product.controller.js';
import EjsLayouts from 'express-ejs-layouts';
import path from 'path';

const server = express();

//Setup view engine Settings
server.set('view engine', 'ejs');
server.set('views', path.join(path.resolve(), 'src', 'views'));

// express-ejs-layout as a middleware
server.use(EjsLayouts)

// create an instance of ProductContrller
const productController = new ProductController()
server.get('/' , productController.getProduct)
server.use(express.static('src/views'));

server.listen(3400);

console.log('Listining to 3400');

