const mongoose = require("mongoose");


const productSchema= new mongoose.Schema({


    // "id": "HST2",
    // "title": "Skate Baba Half Sleeve T-Shirt",
    // "price": "759",
    // "image1": "https://images.bewakoof.com/t540/skate-baba-half-sleeve-t-shirt-465124-1642487209-1.jpg",
    // "image2": "https://images.bewakoof.com/t540/skate-baba-half-sleeve-t-shirt-465124-1642487209-1.jpg",
    // "image3": "https://images.bewakoof.com/t540/skate-baba-half-sleeve-t-shirt-465124-1642487213-2.jpg",
    // "image4": "https://images.bewakoof.com/t540/skate-baba-half-sleeve-t-shirt-465124-1642487217-3.jpg",
    // "image5": "https://images.bewakoof.com/t540/skate-baba-half-sleeve-t-shirt-465124-1642487209-1.jpg",
    // "description": "Regular fit - Fits just right - not too tight, not too loose.Single Jersey, 100% Cotton Classic, lightweight jersey fabric comprising 100% cotton.",
    // "category": "women's clothing",
    // "tribe": " ₹36",
    // "discount": "65",
    // "rating": {
    //     "rate": 3.6,
    //     "count": 145
    // } ,
    //  "quantity": 1
    id:{type:String,required:false},
    title:{type:String,required:true},
    price:{type:Number,required:true},
    image1:{type:String,required:true},
    image2:{type:String,required:true},
    image3:{type:String,required:true},
    image4:{type:String,required:true},
    image5:{type:String,required:true},
    description:{type:String,required:false},
    category:{type:String,required:true},
    tribe:{type:String,required:true},
    discount:{type:String,required:true},
    rating:{
        rate:{type:Number, required:false},
        count:{type:Number, required:false}
    },
    quantity:{type:Number, required:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports=mongoose.model("product",productSchema);