export default class ProductModel {
  constructor(_id, _name, _desc, _price, _imageUrl) {
    this.id = _id;
    this.name = _name;
    this.desc = _desc;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }

  static get() {
    return products;
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
