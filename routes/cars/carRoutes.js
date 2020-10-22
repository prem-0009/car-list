const router = require('express').Router();

const Car = require('./models/cars.js');

router.get('/get-cars', (req, res)=>{
    Car.find().then((foundCars)=>{
        res.render('main/index', {carList: foundCars})
    })
    .catch((err)=>{ res.json({err}) })
});

router.post('/get-cars', (req, res)=>{
    Car.findOne({word:req.body.name})
    .then((foundCar)=>{
        if(foundCar){
            res.send('car already exist')
        } else{
            if(!req.body.name || !req.body.type ||!req.body.year){
                res.send('fill all required');
            }

            let newCar = new Car({
                name:req.body.name,
                type:req.body.type,
                year:req.body.year,
                
            });
            console.log('hi')
            newCar.save().then(()=>{
                res.redirect('/cars/get-cars')
            })
            .catch((err)=>{res.status(400).json({message:'car not create', err})})
        }
    })
    .catch((err) => {
        return res.status(500).json({ message: "server error", err });
      });
});

// router.get("/add-car", (req, res) => {
//     res.render("main/add-car");
//   });
// router.post('/add-cars/:')


module.exports = router;