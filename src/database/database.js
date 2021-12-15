import Sequelize from 'sequelize';
require('dotenv').config();

const password = process.env.DB_PASS;

export const sequelize = new Sequelize('postgres', 'postgres', password, {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
  logging: false,
});
