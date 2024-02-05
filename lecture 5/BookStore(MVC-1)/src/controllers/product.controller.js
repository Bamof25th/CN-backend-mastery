// import path from 'path'
import ProductModel from '../model/product.model.js';


export default class ProductController{
     getProduct(req, res){
  
      let products = ProductModel.get();

      // console.log(products);
      
      return res.render('products.ejs', {products : products})

      // console.log(path.resolve())
        // res.sendFile(path.join(
        //   path.resolve(), 'src', 'views', 'products.html'
        //   ));   
      };
}