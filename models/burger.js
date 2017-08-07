module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    	burger_name: {type:DataTypes.STRING
    },
    devoured: {
    	type:DataTypes.BOOLEAN,defaultValue: false
    }
  }, 
  {
  	timestamps: false
	});

  // Burgers.associate = function(models) {
  //   // We're saying that a Burgers should belong to an User
  //   // A Burger can't be created without an User due to the foreign key constraint
  //   Burgers.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Burgers;
};
