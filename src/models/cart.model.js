const mongoose = require("mongoose");


const cartSchema= new mongoose.Schema({

    discount:{type:String,required:true}, 
    id: {type:String,required:true},
    image1:{type:String,required:true},
    image2: {type:String,required:true},
    image3: {type:String,required:true},
    image4: {type:String,required:true},
    image5: {type:String,required:true},
    price: {type:String,required:true},

    quantity: {type:String,required:true},
    rate: {type:String,required:false},
    title: {type:String,required:true},
    tribe: {type:String,required:true}
},{
    timestamps:true,
    versionKey:false
});

module.exports=mongoose.model("cart",cartSchema);