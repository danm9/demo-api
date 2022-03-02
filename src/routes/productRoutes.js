import {
  addNewProduct,
  getProducts,
  updateProduct,
  getProductWithID,
  deleteProduct,
} from "../controllers/productController.js";

const productRoutes = (app) => {
  app
    .route("/products")
    .get((req, res, next) => {
      next();
    }, getProducts)

    .post(addNewProduct);

  app
    .route("/product/:productID")
    .get(getProductWithID)

    .put(updateProduct)

    .delete(deleteProduct);
};

export default productRoutes;
