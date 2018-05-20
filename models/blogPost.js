module.exports = function(sequelize, DataTypes) {
  var BlogPost = sequelize.define("BlogPost", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  BlogPost.associate = function(models) {
    BlogPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return BlogPost;
};
