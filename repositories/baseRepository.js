import pool from "../db/database.js";

export function createRepository(tableName) {
  return {
    async create(data) {
      const keys = Object.keys(data).join(", ");
      const values = Object.values(data);
      const valueQuery = values.map((value) => "?").join(", ");
      console.log("Data received in repository:", data);
      const [results] = await pool.execute(
        `INSERT INTO ${tableName} (${keys}) VALUES (${valueQuery})`,
        values,
      );
      return results;
    },
    async update(data, id) {
      const keys = Object.keys(data);
      const updateQuery = keys.map((key) => `${key} = ?`).join(", ");
      const [results] = await pool.execute(
        `
        UPDATE ${tableName}
        SET ${updateQuery}
        WHERE id = ?
        `,
        [...Object.values(data), id],
      );
      return results;
    },

    async get(filter) {
      const keys = Object.keys(filter).length ? Object.keys(filter) : null;
      const filterQuery = keys
        ? `WHERE ${keys.map((key) => `${key} = ?`).join(" AND ")}`
        : "";
      const values = keys ? Object.values(filter) : [];
      const [results] = await pool.execute(
        `SELECT * FROM ${tableName} ${filterQuery}`,
        values,
      );
      return results;
    },
  };
}
