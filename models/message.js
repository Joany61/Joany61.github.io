'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Message extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Message.init({
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        isLike: DataTypes.INTEGER,
        attachement: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Message',
        associate: function(models) {
            models.Message.belongsTo(models.User, {
                foreignKey: {
                    allowNull: false
                }
            })
        }
    });
    return Message;
};