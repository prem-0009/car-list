const Car = require("../models/cars.js");
const moment = require('moment')


module.exports = {
  addCar: (req, res)=>{
    
    Car.findOne({name:req.body.name})
    .then((foundCar)=>{
        if(foundCar){
            res.send('car already exist');
        } else{
            if(!req.body.name  ){
                
                res.send('fill all required');
            } else {

            let newCar = new Car({
                name:req.body.name,
                type:req.body.type,
                year:req.body.year,
                
            });
            
            newCar.save().then(()=>{
               return res.redirect(`/cars/get-cars`)
            })
            .catch((err)=>{
                return res.status(400).json({message:'car not created', err})})
            }
        }
    })
    .catch((err) => {
        return res.status(500).json({ message: "server error", err });
      });
},
};
