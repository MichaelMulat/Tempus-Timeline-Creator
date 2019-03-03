module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "This field is required."
        }
      }
    },
    event_type: {
      type: DataTypes.TEXT
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: "This field is required."
        }
      }
    },
    end_date: {
      type: DataTypes.DATE
    },
    location: {
      type: DataTypes.TEXT
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        defaultValue: "#ffffff" // default Value color
      }
    },
    source: {
      type: DataTypes.TEXT
    }
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Timeline);
  };

  return Event;
};
