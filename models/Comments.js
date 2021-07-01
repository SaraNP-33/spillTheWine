const {Model, DataTypes}= require("sequelize")
const sequelize =require("../config/connection")

class Comments extends Model{}

Comments.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    body:{
        type:DataTypes.STRING
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:'user',
            key:'id'
        }
    }
},{
    sequelize,
    modelName:'comments'
}
)

module.exports= Comments;