const express = require('express');
var app = express();



const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine','ejs');
app.set('views','./views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');


//middleware
app.use(express.static(path.join(__dirname,'static')));

app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use(userRoutes);

app.use('/',(req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,'views','404.ejs'));
})

//




app.listen(3000, () => {
  
    console.log("server started");
});