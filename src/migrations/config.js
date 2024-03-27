require('dotenv').config();

module.exports = {
  local: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  dev: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  prod: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  stage: {
    dialect: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
};
