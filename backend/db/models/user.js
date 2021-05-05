"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [4, 30],
          isNotEmail(value) {
            if (Validator.isEmail(value)) {
              throw new Error("Cannot be an email.");
            }
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 256],
        },
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 30],
        },
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 30],
        },
      },
      userPhoto: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
