import type { connection } from "./app";

export const query = (
  queryStr: string,
  vars?: string[],
  argConnection?: typeof connection,
): Promise<unknown[]> => {
  return new Promise(async function (resolve, reject) {
    let db: typeof connection;
    if (argConnection) {
      db = argConnection;
    } else {
      const { connection } = await import("./app");
      db = connection;
    }
    db.query(queryStr, vars, function (err, rows) {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};
