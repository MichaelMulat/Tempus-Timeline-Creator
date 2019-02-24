module.exports = function(sequelize, DataTypes) {
  var Timeline = sequelize.define("Timeline", {
    timeline_name: DataTypes.STRING,
  });
  Timeline.associate = function(models) {
    Timeline.hasMany(models.Event);
   };
  return Timeline;
};


