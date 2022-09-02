const express=require("express");
const router=express.Router();
const Cart=require("../models/cart.model")


router.get("",async(req,res)=>{
    try{
       const carts= await Cart.find().lean().exec()
        return res.status(200).send(carts)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        const cart=await Cart.create(req.body);
        return res.status(201).send(cart); 

    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.get("/:id",async(req,res)=>{
    try{
        const carts= await Cart.findById(req.params.id).lean().exec()
        return res.status(200).send(carts)
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.put("/:id",async(req,res)=>{
    try{
        const carts= await Cart.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send("deleted")
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});
router.post("/:id",async(req,res)=>{
    try{
        const carts= await Cart.findByIdAndUpdate(req.params.id).lean().exec()
        return res.status(200).send("updated")
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});




module.exports=router;