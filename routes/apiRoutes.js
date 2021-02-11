const db = require("../models");

module.exports =(app)=> {
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({}).then((dbWorkout) => {
            
            db.Workout.aggregate([
                {
                    $addFields: {
                        totalWorkoutDuration:  { $sum:  "$duration"}
                    }
                }
            ]);

            console.log(dbWorkout);
            res.json(dbWorkout);


            
        }).catch(err =>{
            res.json(err);
        });

        
        
            
        

    });

     
}
