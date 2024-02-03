import express from "express";
import { query } from "../utils";

export const statsRouter = express.Router();

statsRouter.get("/", async (_req, res) => {
  const result = await query(`SELECT table_name, TABLE_ROWS
																	 FROM INFORMATION_SCHEMA.TABLES 
																	 WHERE TABLE_SCHEMA = 'employees' ORDER BY TABLE_ROWS DESC;`);
  res.send(
    (result as { TABLE_NAME: string; TABLE_ROWS: null | number }[]).map(
      (d) => ({ [d.TABLE_NAME]: d.TABLE_ROWS }),
    ),
  );
});
