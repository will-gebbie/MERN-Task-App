const express = require('express');
const cors = require('cors');
const router = express.Router();
const mongojs = require('mongojs');
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const db = mongojs('mongodb://127.0.0.1:27017/tasks');

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Cors Enable
app.use(cors());

//ROUTING START

// Get All Tasks
router.get('/getData', cors(), function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

// Get Single Task
router.get('/getData/:id', function(req, res, next){
    db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

//Save Task
router.post('/putData', function(req, res, next){
    const task = req.body;
    if(!task.title || !(task.isDone + '')){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

// Delete Task
router.delete('/deleteData/:id', function(req, res, next){
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
        if(err){
            res.send(err);
        }
        res.json(task);
    });
});

// Update Task
router.put('/updateData/:id', function(req, res, next){
    const task = req.body;
    const updTask = {};
    
    if(task.isDone){
        updTask.isDone = task.isDone;
    }
    
    if(task.title){
        updTask.title = task.title;
    }
    
    if(!updTask){
        res.status(400);
        res.json({
            "error":"Bad Data"
        });
    } else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)},updTask, {}, function(err, task){
            if(err){
                res.send(err);
            }
            res.json(task);
        });
    }
});

//ROUTING END

// append /api for http requests
app.use("/api", router);

// launch backend into a port
app.listen(port, function(){
    console.log('App running on localhost: ' + port);
});