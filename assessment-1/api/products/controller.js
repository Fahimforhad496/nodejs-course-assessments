let productService = require('./product.service');

function getProducts() {
  return productService.getProducts();
}

function getProduct(id) {
  return productService.getProductById(id);
}

function createProduct(product) {
  return productService.createProduct(product);
}

function deleteProduct(id) {
  return productService.deleteProductById(id);
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
};