var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Timeline.findAll({}).then(function(dbTimelines) {
      res.render("index", {
        msg: "These are our timelines",
        timelines: dbTimelines
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/timeline/:id", function(req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render Timeline page
  app.get("/timeline", function(req, res) {
    res.render("timeline");
  });

  // Render add events page
  app.get("/create", function(req, res) {
    res.render("create");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
