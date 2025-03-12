const express = require('express');
const router = express.Router();
const Product = require('../models/products')
const {validationResult } = require('express-validator');

//route 1:- Fetch all cards using:GET api/product/fetchall
router.get('/fetchall',async(req,res)=>{
   try {
    const product = await Product.find();
    res.json(product);
        }
    catch(error){
        console.log(error)
        res.status(500).send('some error occure')
    }
})

//route 2:-Add Product Data to mongodb using : POST api/product/addprod

router.post('/addprod',[],async(req,res)=>{
    const result = validationResult(req);
        if(!result.isEmpty()){
            return res.status(400).json({error:result.array()})
        }
    
    try {
        let name = await Product.findOne({games:req.body.name}) 
        if(name){
            return res.status(400).json({error:"Sorry a game with this name already exists"})
        }
 const card = Product(req.body);
 card.save()          //its store data into mongodb
 res.send(req.body)
    } catch (error) {
        console.log(error)
        res.status(500).send('some error occure')
    }
})

module.exports = router