const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Product title is required"]
        },
        price: {
            type: Number,
            required: [true, "Product price is required"]
        },
        image: {
            type: String,
            required: false
        },
        stars: {
            type: Number,
            required: [true, "Product stars is required"],
            min: 1,
            max: 5,
            default: 1,
        },
        category: {
            type: String,
            required: [true, "Category title is required"],
            default: 'men'
        },
    },
{
    timestamps: true
}
)

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

