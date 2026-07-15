import { pool } from "../db/databse";

export function createRepository(tableName) {
  return {
    async create(data) {
      const keys = Object.keys(data).join(", ");
      const values = Object.values(data);
      const valueQuery = values.map((value) => "?").join(", ");
      const [results] = await pool.execute(
        `INSERT INTO ${tableName} (${keys}) VALUES (${valueQuery})`,
        values,
      );

      return results;
    },
  };
}
