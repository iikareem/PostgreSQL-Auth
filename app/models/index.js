const {Sequelize, DataTypes} = require('sequelize')

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DATABASE_NAME, 'postgres', process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});


//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
});

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize


db.users = require('./userModel') (sequelize, DataTypes)


module.exports = db



