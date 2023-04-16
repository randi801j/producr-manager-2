const ProductController = require("../controllers/productControllers");

module.exports = (app)=>{
    app.post("/api/products", ProductController.createProducts);
    app.get("/api/products",ProductController.getAllProducts);
    app.get("/api/products/:single",ProductController.getOneProduct);
}