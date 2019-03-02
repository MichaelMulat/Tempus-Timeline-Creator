module.exports = function(sequelize, DataTypes) {
  var Categories = sequelize.define("Category", {
    category: DataTypes.STRING
  });

  Categories.associate = function(models) {
    Categories.hasMany(models.Timeline);
  };

return Categories;
};
