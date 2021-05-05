import { db as _db } from "./index";

const db = _db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;

export const development = {
  username,
  password,
  database,
  host,
  dialect: "postgres",
  seederStorage: "sequelize",
};
export const production = {
  use_env_variable: "DATABASE_URL",
  dialect: "postgres",
  seederStorage: "sequelize",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};
