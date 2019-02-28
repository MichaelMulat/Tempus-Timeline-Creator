module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,              // checks for url format (http://foo.com)
        notNull: true,            // won't allow null
        notEmpty: true,           // don't allow empty strings
      }
    },
    event_type: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,              // checks for url format (http://foo.com)
        notNull: true,            // won't allow null
        notEmpty: true,           // don't allow empty strings
      }
    },
    start_date: {
      type: DataTypes.DATE,
      validate: {
        isDate: true,             // only allow date strings
        notNull: true,            // won't allow null
        notEmpty: true,           // don't allow empty strings
      }
    },
    end_date: {
      type: DataTypes.DATE,
      validate: {
        notNull: false,            // allow null
        notEmpty: false,           // allow empty strings
      }
    },
    location: {
      type: DataTypes.TEXT,
      validate: {
        notNull: false,            // allow null
        notEmpty: false,           // allow empty strings
      }
    },
    color: {
      type: DataTypes.STRING,
      validate: {
        defaultValue: "#ffffff",   // default Value color
      }
    },
    source: {
      type: DataTypes.TEXT,
      validate: {
        isUrl: true,              // checks for url format (http://foo.com)
        notNull: false,            // allow null
        notEmpty: false,           // allow empty strings
      }
    }
  });

  Event.associate = function(models) {
    Event.belongsTo(models.Timeline);
  };

  return Event;
}