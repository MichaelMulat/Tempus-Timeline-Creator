var db = require("../models");

module.exports = function(app) {
  // get all the timelines in the database
  app.get("/api/timelines", function(req, res) {
    db.Timeline.findAll({}).then(function(dbTimeline) {
      res.json(dbTimeline);
    });
  });

  // create a new timeline in the database
  app.post("/api/timelines/", function(req, res) {
    db.Timeline.create(req.body).then(function(dbTimeline) {
      res.json(dbTimeline);
    });
  });

  app.get("/api/timelines/:id", function(req, res) {
    db.Timeline.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTimelines) {
      res.json(dbTimelines);
    });
  });

  app.post("/api/events/:timeline_id", function(req, res) {
    db.Event.create(req.body).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  // Delete a timeline by id
  app.delete("/api/timelines/:id", function(req, res) {
    db.Timeline.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
