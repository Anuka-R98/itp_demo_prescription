const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');//use to convert jason format to java script object
const cors = require('cors');
//invoke express
const app = express();

//import routes
const postRoutes = require('./routes/routes');

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded({limit: "30mb",extended:true}));

app.use(postRoutes);

const PORT = 8005;

//const DB_URL = 'mongodb+srv://Apple:1234@itpdemo.pho53.mongodb.net/Prescriptions_DB?retryWrites=true&w=majority'
const DB_URL = 'mongodb+srv://itpproject:projectpass@cluster0.ximc9.mongodb.net/Prescriptions_DB?retryWrites=true&w=majority';

mongoose.connect(DB_URL).then(()=>{  
    console.log('DB Connected! ');}
    ).catch((err)=>{ console.log('DB Connection Error', err)});

    app.listen(PORT, () => {
    console.log(`Server is running! on port ${PORT}`);
  });
