const {Model, Datatypes, DataTypes} = require('sequelize');
const sequelize = require('../config/connection.js');

class Article extends Model {}

Article.init(
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
            type: DataTypes.DATEONLY,
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
        modelName: 'article',
    }
);