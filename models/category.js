module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      validate: {
        defaultValue: "Other"
      }
    }
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Timeline);
  };
  return Categories;
};
