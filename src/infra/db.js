import Sequelize from "sequelize";

const db = new Sequelize('hermes_corporation', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
});
export default db;