const express = require('express');
const taskRouter = express.Router();

// import schema model 
let Task = require('./task.model');

//Route for task creation
taskRouter.route('/add').post((req, res) => {
    let task = new Task(req.body);
    task.save().then(task => {
        res.status(200).json({'task': 'task added successfully!'});
    }).catch(err => {
        res.status(400).send("unable to save task");
    });
});


//Route for listing current tasks in db
taskRouter.route('/').get((req,res) => {
    Task.find((err, tasks) => {
        if(err){console.log(err);}
        else{res.json(tasks);}
    });
});

//Route to list one task by id
taskRouter.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Task.findById(id, (err, task) => {
        res.json(task);
    });
  });

//Route for updating tasks
taskRouter.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id, (err, task) => {
        if(!task){
            res.status(404).send("data is not found");
        }
        else{
            //Assign new title and/or difficulty
            task.title = req.body.title;
            task.difficulty = req.body.difficulty;

            //save the newly updated task
            task.save().then(task => {
                res.json('Update complete');
            }).catch(err => {
                res.status(400).send("unable to update task");
            });
        }
    });
});

//Route for deleting tasks
taskRouter.route('/delete/:id').get((req, res) => {
    Task.findByIdAndRemove(req.params.id, (err, task) => {
        if(err){res.json(err);}
        else{res.json('Successfully removed');}
    });
});

module.exports = taskRouter;