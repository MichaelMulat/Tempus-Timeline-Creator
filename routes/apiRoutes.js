var db = require("../models");

module.exports = function(app) {
  //get all the timelines in the database
  app.get("/api/timelines", function(req, res) {
    db.Timeline.findAll({}).then(function(dbTimeline) {
      res.json(dbTimeline);
    });
  });

  //create a new timeline in the database
  app.post("/api/timelines", function(req, res) {
    db.Timeline.create(req.body).then(function(dbTimeline) {
      res.json(dbTimeline);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
