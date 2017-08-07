module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    	name: {type:DataTypes.STRING
    }
  }, 
  {
  	timestamps: false
	});

  // Users.associate = function(models) {
  //   // Associating Users with Burgers
  //   // When an User is deleted, also delete any associated Burgers
  //   Users.hasMany(models.Burgers, {
  //     onDelete: "cascade"
  //   });
  // };
  return Users;
};