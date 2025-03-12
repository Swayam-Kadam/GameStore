const express = require('express');
const router = express.Router();
const Card = require('../models/cards');
const { body, validationResult } = require('express-validator');

//Route-1:-create a card using : POST "/api/card".Doesn't require Auth
router.post('/',[
    body('games').isLength({min:3}).withMessage('length must be minimum 3 character '),      //its a validation for game name has minimum 3 character
    body('price').isNumeric().withMessage('Must Be Number').isFloat({gte:200}).withMessage('price should be above 200') //price should be number and price above 200 rupees
],async(req,res)=>{
    const result = validationResult(req);  //following block is check ValidationResult is not empty then return an error message otherwise store data into database
  if (!result.isEmpty()) {
    return res.status(400).json({ errors: result.array() });
  }
  //check wather the game with this name already exists
  try{
    let game = await Card.findOne({games:req.body.games}) 
  if(game){
    return res.status(400).json({error:"Sorry a game with this name already exists"})
  }
 const card = Card(req.body);
 card.save()          //its store data into mongodb
 res.send(req.body)
}
//catch errors
catch{
    console.error(Error.message);
    res.status(500).send("Some Error occured")
}
});

//Route-2:-Fetch all cards using:GET "/api/card".
router.get('/',async(req,res)=>{
    try {
        const card = await Card.find();  // Fetch all cards from the database
        res.json(card);  // Send the data as a JSON response
    } catch (error) {
        console.error(error.message);
        res.status(500).send("some Error occured")
    }
})
 
module.exports = router