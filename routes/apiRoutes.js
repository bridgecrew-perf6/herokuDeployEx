const notesData = require("../db/db.json");

module.exports = function (app) {
    // Get Routes for Data
    app.get("/api/notes", function (req, res) {
        console.log(notesData)
        res.json(notesData)
    })
    // Post Routes for Notes
    app.post("/api/notes", function (req, res) {
        newNote = {
            id: notesData.length,
            title: req.body.title,
            text: req.body.text

        }
        console.log(newNote)
        notesData.push(newNote)
        res.json(notesData)
    })
    // Delete Routes for Notes
    app.delete("/api/notes/:id", function (req, res) {
        console.log("delete", req.params.id)
        notesData.splice(req.params.id -1, req.params.id + 1)
        

        res.json(notesData)

    })
};