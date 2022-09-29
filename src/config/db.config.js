import { Sequelize } from "sequelize";
import mysql from "mysql2";

export const dbConnection = async (dbName, username, password, host) => {
  const sequelize = new Sequelize(dbName, username, password, {
    host,
    dialect: "mysql",
  });

  return sequelize;
};

export const createNewDB = (dbName, host, user, password) => {
  const con = mysql.createConnection({ host, user, password });

  con.connect((err) => {
    con.query(`CREATE DATABASE ${dbName}`);
  });
};
