const Product = require(`../models/productModels`)

module.exports = {
    createProducts: (req,res)=>{
        Product.create(req.body)
            .then((newProduct)=>{
                res.status(400).json(newProduct)
            })
            .catch ((err)=>{
                res.status(400).json(err)
            });
    },

    getAllProducts: (req,res)=>{
        Product.find({})
            .then((allProducts)=>{
                console.log(allProducts);
                res.json(allProducts);
            })
            .catch((err)=>{
                console.log(err);
            })
    },
    getOneProduct: (req,res)=>{
        Product.findOne({_id: req.params.single})
            .then((oneProduct)=>{
                console.log(oneProduct);
                res.json(oneProduct);
            })
            .catch((err)=>{
                console.log(err);
            })
    }
};