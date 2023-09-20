const express = require('express');
var router = express.Router();

const path = require('path');



router.get('/add-product', (req, res, next) => {
   res.sendFile(path.join(__dirname,'../','views','add-product.html'));

});

router.post('/add-product',(req,res,next)=>{
    // database save
    
    // console.log(req.body.productname);
    console.log(req.body);

    // res.status(301)
    res.redirect('/')
});

router.use('/product-list', (req, res, next) => {
    res.send('listing product page')

});

module.exports = router;