var db = require("../models");

module.exports = function (app) {
  //Get all the timelines in the database
  app.get("/api/timelines", function (req, res) {
    db.Timeline.findAll({}).then(function (dbTimeline) {
      res.json(dbTimeline);
    });
  });

  // GET one of timeline by Id and include the Event 
  app.get("/api/timelines/:id", function (req, res) {
    db.Timeline.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Event]
    }).then(function (dbTimelines) {
      res.json(dbTimelines);
    });
  });

  //Create a new timeline in the database
  app.post("/api/timelines/", function (req, res) {
    db.Timeline.create(req.body).then(function (dbTimeline) {
      res.json(dbTimeline);
    }).catch(function (err) {
      res.status(500).send({ errors: err.errors })
    });
  });

  app.get("/api/events/:timeline_id", function (req, res) {
    db.Event.findAll({
      where: {
        TimelineId: req.params.timeline_id
      },
      include: [db.Timeline]
    }).then(function (dbEvents) {
      res.json(dbEvents);
    });
  });


  app.post("/api/events/:timeline_id", function (req, res) {
    db.Event.create(req.body).then(function (dbEvent) {
      res.json(dbEvent);
    });
  });

  // Delete an event 
  app.delete("/api/events/:event_id", function (req, res) {
    db.Event.destroy({
      where: {
        id: req.params.event_id
      }
    }).then(function (dbEvent) {
      res.json(dbEvent);
    }).catch(function (err) {
      res.status(500).send({ errors: err.errors })
    });
  });

  // Delete a timeline by id
  app.delete("/api/timelines/:id", function (req, res) {
    db.Timeline.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbTimeline
    ) {
      res.json(dbTimeline);
    });
  });


  app.get("/api/categories/", function (req, res) {
    db.Category.findAll({}).then(function (dbCat) {
      res.json(dbCat);
    });
  });

  //Create a new category in the database
  app.post("/api/categories/", function (req, res) {
    db.Category.create(req.body).then(function (dbcategories) {
      res.json(dbcategories);
    });
  });
};
