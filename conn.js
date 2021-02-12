const { Sequelize, DataTypes } = require('sequelize');

//DB Conn.
const DATABASE_URL = 'postgres://nqtrbemn:3Y9Git59-UCSrTLMVYkUnsw9tBW7p6bY@ziggy.db.elephantsql.com:5432/nqtrbemn';
const sequelize = new Sequelize(DATABASE_URL);

sequelize.define('product', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    photo_url: {
        allowNull: false,
        type: DataTypes.STRING
    },
    price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10,2),
    },
    offer: {
        allowNull: false,
        type: DataTypes.DECIMAL(10,2),
        defaultValue: 0,
    }
});

module.exports = sequelize;
