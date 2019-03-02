module.exports = function (sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    event: DataTypes.STRING,
    event_type: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE,
    location: DataTypes.TEXT,
    color: DataTypes.STRING,
    source: DataTypes.TEXT
  });

  Event.associate = function (models) {
    Event.belongsTo(models.Timeline);
  };

  return Event;
}