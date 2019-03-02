module.exports = function(sequelize, DataTypes) {
  var Timeline = sequelize.define("Timeline", {
    timelineName: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT
  });

  Timeline.associate = function(models) {
    Timeline.hasMany(models.Event);
    Timeline.belongsTo(models.Category);
  };

return Timeline;
};
