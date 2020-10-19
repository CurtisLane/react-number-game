var db = require("../models");

module.exports = function(app){
    
    app.get("/api/scores/", (req, res) => {
        db.Scores
        .findAll({ 
            order: [
                ['score', 'ASC']
            ]
        })
        .then(dbScores => {
            res.json(dbScores)
        })
    })

    // app.post("/api/scores/", (req, res) => {
    //     db.scores
    //     .create({
    //         name: req.body.name,
    //         score: req.body.score,
    //         dateTime: new Date()
    //     })
    //     .then(dbScores => {
    //         if (dbScores){
    //             res.json(dbScores)
    //         } else {
    //             res.status(400).send("Error: Failed to insert new record.")
    //         }
    //     })
    // })
}

