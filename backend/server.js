const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const app = express();
const port = 3001;
const config = require('./DB.js');
const taskRouter = require('./tasks.route');

//connect to mongodb server
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Cors Enable
app.use(cors());


// append /api for http requests
app.use("/api/tasks", taskRouter);

// launch backend into a port
app.listen(port, function(){
    console.log('Server running on localhost: ' + port);
});