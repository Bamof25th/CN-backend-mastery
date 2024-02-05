export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static getAll() {
    return products;
  }

  static update(productObject){
    const index = products.findIndex((p)=> p._id === productObject.id);
            products[index] = productObject;
  }

  static delete(id){
    const index = products.findIndex((p)=> p._id === id);
            products.splice(index, 1);
  }

  static add(productObject) {
    let newProduct = new ProductModel(
      products.length + 1,
      productObject.name,
      productObject.desc,
      productObject.price,
      productObject.imageUrl
    );
    products.push(newProduct);
  }

  static getById(id){
    // Query to find product id on array is present or not
      return products.find((p) => p.id == id );
  }
}

var products = [
  new ProductModel(
    1,
    "product 1",
    "this is product one",
    470,
    "https://m.media-amazon.com/images/I/91bYsX41DVL._SY425_.jpg"
  ),
  new ProductModel(
    2,
    "product 2",
    "this is product two",
    480,
    "https://m.media-amazon.com/images/I/71g2ednj0JL._SY425_.jpg"
  ),
  new ProductModel(
    3,
    "product 3",
    "this is product three",
    230,
    "https://m.media-amazon.com/images/I/71Yb9hJXocL._SY425_.jpg"
  ),
];
