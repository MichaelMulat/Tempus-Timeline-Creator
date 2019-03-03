module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      validate: {
        defaultValue: "Other"         // set a default value to other
      }
    }
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Timeline);
  };
  return Categories;
};