'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Username is Requiered"},
        notEmpty: {msg: "Username is Requiered"}
      },
      unique: {
        args: true,
        msg: 'Username has been already exist'
      }

    }, 
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {msg: "Email is Requiered"},
        notEmpty: {msg: "Email is Requiered"},
        isEmail: true
      },
      unique: {
        args: true,
        msg: 'Email has been already exist'
      }
      
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: 'Password is required!'},
        notEmpty: { msg: 'Password is required!'},
        len: {
          args: [5],
          msg: 'Password min 5 character'
        }
      }

    }, 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};