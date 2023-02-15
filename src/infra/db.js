import Sequelize from "sequelize";

const db = new Sequelize('hermes_corporation', 'root', 'root', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
});

export default db;