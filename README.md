# MERN-Task-App
Task application using the MERN stack. MongoDB, Express, ReactJs, and Node.js

## Future Updates:

Some tabs have not yet completed such as the budget and workouts on the navigation bar.

This app will take on a dashboard type gui instead of using a navbar.

I am interested in using [Material UI](https://material-ui.com/) for design improvement due to its
sleek appearance. 

## Installation:

### What you will need
* [git](https://git-scm.com/downloads)
* [Node.js + npm](https://nodejs.org/en/)
* [MongoDB Server](https://www.mongodb.com/download-center/community)

### Cloning the repository
Create folder where you would like to store the files of the project.
Then navigate to that folder with:
```
cd C:\path\to\program_directory 
```
Inside the desired directory:
```
git clone https://github.com/will-gebbie/MERN-Task-App.git
```

### Install Dependencies
Now the node modules must be installed in order for this program to run properly
```
cd program_directory\MERN-Task-App
npm install

cd program_directory\MERN-Task-App\client
npm install

cd program_directory\MERN-Task-App\backend
npm install
```

### Create Task Database
Make sure you have installed MongoDB Server

For Windows: Create a folder called C:\data

Now lets start up the database terminal with:
```
mongo
```
If any problems occur here, then MongoDB is probably not added to PATH

If it works, then type:
```
use merndata
db.createCollection("tasks")
db.tasks.insert({
  title: "First Task",
  priority: "Low",
  due_date: "Month/Day @ HH:MM AM/PM"
 })
 ```
 Now press Ctrl+C to quit

Now we are able to run the program!

### Using the Web Application
```
cd program_directory\MERN-Task-App
npm start
```
This should automatically open your browser to localhost:3000,
but if it doesnt, just open your preferred browser and type in localhost:3000 in the search bar.
