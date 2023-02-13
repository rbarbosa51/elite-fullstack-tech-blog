const {Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        article_id: {
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
        modelName: 'comment',
    }
);