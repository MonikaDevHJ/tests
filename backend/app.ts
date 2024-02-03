import express from "express";
import mysql from "mysql";
import { statsRouter } from "./routers/stats";

declare global {
  namespace Express {
    interface Request {
      ctx: {
        db: ReturnType<typeof mysql.createConnection>;
      };
    }
  }
}

const app = express();
const port = 3000;

export const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "secret",
  database: "employees",
});

connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected to db");
});

app.use(express.json());
app.use((req, _, next) => {
  req.ctx = { db: connection };
  next();
});

app.get("/", ({ ctx }, res) => {
  res.send(ctx.db.state);
});

app.use("/stats", statsRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
