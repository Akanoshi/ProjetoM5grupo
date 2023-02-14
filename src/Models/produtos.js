import Sequelize from "sequelize";
import db from "../infra/db.js";

const Produto = db.define("produtos" , {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    img: {
        type: Sequelize.BLOB,
        allowNull: true,
    }
})

Produto.sync()
Produto.sync({alter: true})

export default Produto;
