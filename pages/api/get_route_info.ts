// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2";
const conn = require("../../config/db");
type Data = {
  name: string;
};

type Route = {
  id: string;
  route_name: string;
  route: string;
  travel_time: string;
  Enterprise_name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let db;

  db = mysql.createConnection(conn);
  try {
    db.query(
      "SELECT * FROM route_info LIMIT 10",
      async function (err: any, result: any) {
        if (err) {
          console.log(err);
          return res.status(500).json({ result: "false" });
        } else {
          return res.status(200).json({ result: result });
        }
      }
    );
  } catch (e) {
    return res.status(500).json({ result: "false" });
  } finally {
    db.end();
  }
  //   return res.status(200).json({ name: "John Doe" });
}
