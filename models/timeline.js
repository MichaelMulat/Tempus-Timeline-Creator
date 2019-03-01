module.exports = function(sequelize, DataTypes) {
  var Timeline = sequelize.define("Timeline", {
    timelineName: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: false,            // won't allow null
        notEmpty: true,           // don't allow empty strings
      }
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        allowNull: true,            // allow null
        notEmpty: false,           // allow empty strings
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,              // checks for url format (http://foo.com)
      }
    }
  });
  Timeline.associate = function(models) {
    Timeline.hasMany(models.Event);
    Timeline.belongsTo(models.Category);
  };
  return Timeline;
};
