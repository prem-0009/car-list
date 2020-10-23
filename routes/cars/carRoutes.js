const router = require('express').Router();

const Car = require('./models/cars.js');

router.get('/get-cars', (req, res)=>{
    Car.find().then((foundCars)=>{
        return res.render('main/index', {carList: foundCars})
        
    })
    .catch((err)=>{ res.json({err}) })
});

router.post('/add-car', (req, res)=>{
    console.log(req.body)
    Car.findOne({name:req.body.name})
    .then((foundCar)=>{
        if(foundCar){
            res.send('car already exist');
        } else{
            if(!req.body.name  ){
                res.send('fill all required');
            }
            let newCar = new Car({
                name:req.body.name,
                type:req.body.type,
                // year:req.body.year,
                
            });
            // console.log(req.body)
            // console.log('newCar')
            newCar.save().then(()=>{
                res.redirect(`/cars/get-cars`)
            })
            .catch((err)=>{
                return res.status(400).json({message:'car not created', err})})
        }
    })
    .catch((err) => {
        return res.status(500).json({ message: "server error", err });
      });
});

// router.get("/add-car", (req, res) => {
//     // console.log('hi');
//     // console.log(req.body)
//     res.render("main/index.ejs");
//   });
// router.post('/add-cars/:')


module.exports = router;