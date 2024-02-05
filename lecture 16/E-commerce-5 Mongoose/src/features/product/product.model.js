import ApplicationError from "../../errorHandler/applicationError.js";
import UserModel from "./../users/user.model.js";
export default class ProductModel {
  constructor( name, desc, price, imageUrl, category, sizes , id) {
    this._id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.imageUrl = imageUrl;
    this.category = category;
    this.sizes = sizes;
  }

  static add(product) {
    product.id = products.length + 1;
    products.push(product);
    return product;
  }

  static get(id) {
    const product = products.find((i) => i.id == id);
    return product;
  }

  static getAll() {
    return products;
  }

  static filter(minPrice, maxPrice, category) {
    const result = products.filter((product) => {
      return (
        (!minPrice || product.price >= minPrice) &&
        (!maxPrice || product.price <= maxPrice) &&
        (!category || product.category == category)
      );
    });
    return result;
  }

  static rateProduct(userID, productID, rating) {
    //  1. Validate user and product.
    const user = UserModel.getAll().find((u) => u.id == userID);
    if (!user) {
      throw new ApplicationError("User not Found",404);
    }

    const product = products.find((p) => p.id == productID);
    if (!product) {
      throw new ApplicationError("Product not Found",400);
    }

    // 2. Check if there are any ratings and if not add Ratings array.
    if (!product.ratings) {
      product.ratings = [];
      product.ratings.push({
        userId: userID,
        rating: rating,
      });
    } else {
      // 3. check if user rating is already available.
      const existingRatingIndex = product.ratings.findIndex(
        (r) => r.userID == userID
      );

      if (existingRatingIndex >= 0) {
        product.ratings[existingRatingIndex] = {
          userId: userID,
          rating: rating,
        };
      } else {
        // 4.if no existing rating then add new rating.
        product.ratings.push({
          userId: userID,
          rating: rating,
        });
      }
    }
  }
}

var products = [
  new ProductModel(
    1,
    "Nike Air Max 90",
    "This iconic shoe gets a vibrant new colorway.",
    200,
    "https://m.media-amazon.com/images/I/5149RsmDq0L._AC_UL480_FMwebp_QL65_.jpg",
    "Shoes",
    ["42", "44", "46"]
  ),
  new ProductModel(
    2,
    "The North Face x Helmut Lang 185 Packable Down Jacket",
    "Stay warm and dry in style.",
    550,
    "http://example.com/product2.jpg",
    "Outerwear",
    ["Small", "Medium", "Large"]
  ),
  new ProductModel(
    3,
    "KitchenAid Professional Stand Mixer",
    "Prepare dough and cake batters in no time.",
    450,
    "http://example.com/product3.jpg",
    "Kitchen Appliances",
    ["One-Size", "Standard"]
  ),
  new ProductModel(
    4,
    "Osterized Kitchen Rack - Ratchet Adjustment",
    "The ratchet mechanism provides an even and steady torque for accurate results.",
    200,
    "http://example.com/product4.jpg",
    "Kitchen Tools",
    ["One-Size", "Standard"]
  ),
];
