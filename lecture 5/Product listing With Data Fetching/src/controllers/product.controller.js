
import ProductModel from './../models/product.model.js';
 const productModel = new ProductModel();
 export default class ProductController {
  getProducts = (req, res) => {
    const products = productModel.fetchProducts();

     return res.render('product.ejs', {products})
  };
}
