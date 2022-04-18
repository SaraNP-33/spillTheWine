const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
  checkPassword(loginPw) {
    console.log(loginPw, "the password is getting here");
    return bcrypt.compareSync(loginPw, this.password);
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  
},
{
  hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    beforeCreate: async (newUserData) => {
      console.log(newUserData, "before create")
      newUserData.password = await bcrypt.hash(newUserData.password, 10);
      return newUserData;
    },
    beforeUpdate: async (updatedUserData) => {
      console.log(updatedUserData,"before update")
      updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
      return updatedUserData;
    }
  },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName:'user',
  },
);

module.exports = User;