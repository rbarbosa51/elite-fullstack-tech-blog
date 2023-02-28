const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        date: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        creator_id: {
            type: DataTypes.INTEGER,
            references: {
              model: "user",
              key: "id",
              unique: false,
            },
          },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'post',
    }
);
module.exports = Post;