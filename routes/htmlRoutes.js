var db = require("../models");

module.exports = function(app) {
  // Load index page with tthe timelines
  app.get("/", function(req, res) {
    db.Timeline.findAll({}).then(function(dbTimelines) {
      res.render("index", {
        timelines: dbTimelines
      });
    });
  });

  // Render all the timelines add timeline page
  app.get("/create", function(req, res) {
    db.Timeline.findAll({}).then(function(dbTimelines) {
      res.render("create", {
        timelines: dbTimelines
      });
    });
  });

  // Load Timeline page and pass in a timeline by id
  app.get("/timelines/:id", function(req, res) {
    db.Timeline.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTimelines) {
      res.render("timeline", {
        timelines: dbTimelines
      });
    });
  });

  // Render Timeline page
  app.get("/timeline", function(req, res) {
    res.render("timeline");
  });

  app.get("/edit/:id", function (req, res) {
    db.Timeline.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTimelines) {
      res.render("edit", {
        timelines: dbTimelines
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
