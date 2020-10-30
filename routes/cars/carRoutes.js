const router = require('express').Router();
const {addCar, } = require('./controllers/carController.js')

const Car = require('./models/cars.js');

router.get('/get-cars', (req, res)=>{
    Car.find().then((foundCars)=>{
        return res.render('main/index.ejs', {carList: foundCars})
        
    })
    .catch((err)=>{ res.json({err}) })
});

router.post('/add-car', addCar);


module.exports = router;