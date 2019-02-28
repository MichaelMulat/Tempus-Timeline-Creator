module.exports = function(sequelize, DataTypes) {
  var Timeline = sequelize.define("Timeline", {
    timelineName: {
      type: DataTypes.TEXT,
      validate: {
        notNull: true,            // won't allow null
        notEmpty: true,           // don't allow empty strings
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        notNull: false,            // allow null
        notEmpty: false,           // allow empty strings
      }
    }
  });
  Timeline.associate = function(models) {
    Timeline.hasMany(models.Event);
    Timeline.belongsTo(models.Category);
  };
  return Timeline;
};
