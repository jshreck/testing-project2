
// Creating the model for the user 
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: 'Username already in use!'
            }
        },
        password: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'Please enter a valid email'
                }
            },
        },
        template: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    });

    User.associate = function (models) {
        User.hasMany(models.BlogPost, {
            onDelete: "cascade"
        });
    };

    return User;
};