# Fitness-Tracker 

<img src="/public/images/homepage.jpeg">
       
# [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Technologies](#technologies)
- [Questions](#questions)



 ## Description
Fitness Tracker is an application that allows the use to log multiple exercises in a workout on a given day.  The name, type, weight, sets, reps, and duration of exerise are all tracked.  If the exercise is cardio the app will track the distance traveled.



## Installation

### View the Project Live

If you would like to view this project live, use the link below
https://pure-garden-16137.herokuapp.com/

### Run the Project Locally
** This project requires node.js and MongoDb to run locally so make sure those are installed on your device.  **

* Step 1: Navigage to the directory you want to store the project.  Clone this repository to your local computer using the command below.

```
git@github.com:Glove1911/Fitness-Tracker.git
```
* Step 2: Navigate to the directory that you cloned the project.
Example:
```
cd directory/projectdirectory
```

* Step 3: Install the npm package dependencies from the package.json file.
```
npm install
```

* Step 4: Make sure MongoDb is set up on your computer and a local instance is running for your program to interact with. [MongoDb documentaton](https://docs.mongodb.com/guides/)

* Step 5: While in the project directory, run the program using node using the command below. Open you browser and navigate to localhost:8080 to view the application.
```
node server.js
```  

## Usage
### Create New  Workout
 On the home  page, click 'New Workout' button.

<img src="/public/images/homepage2.jpeg" alt="home page" width="500px" height="250px">

### Enter Exercise Type
1. On the exercise page select cardio or resistance from drop down.
2. Enter exercise name and if resitance, enter weight, sets, reps, and duration.  For cardio, enter name of exercise, distance, and duration.
3. Click 'Add Exercise'.   Continue to add exercises until workout is complete then click 'Complete'.

<img src="/public/images/addexercise2.jpeg" alt="exercise page" width="500px" height= "250px">

### Dashboard Page
A graphical representation of the exercises completed, the total duration in minutes, and the total weight lifted during the can be accessed by clicking 'Dashboard'.

<img src= "/public/images/statspage.jpeg" alt= "stats page" width= "500px" height="250px">

## License
MIT


## Contribution



## Technologies
* Node.js
* Express.js
* MongoDb




## Questions
(https://github.com/Glove1911) 


Please contact me at [harrison_glover@yahoo.com](mailto:harrison_glover@yahoo.com) with any questions.