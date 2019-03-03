module.exports = function(sequelize, DataTypes) {
  var Timeline = sequelize.define("Timeline", {
    timelineName: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field is required.'
        }             
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'This field is required.'
        }             
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
    }
  });
  Timeline.associate = function(models) {
    Timeline.hasMany(models.Event);
    Timeline.belongsTo(models.Category);
  };
  return Timeline;
};
