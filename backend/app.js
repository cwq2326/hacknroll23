const { Client } = require("pg");
const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const text = `select name from hdb_blocks 
                join mrt_stations on hdb_blocks.subzone = mrt_stations.subzone
                where hdb_blocks.postal_code = $1`;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "password",
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

app.get("/:postal_code", async (req, res) => {
  const postal_code = req.params.postal_code;

  try {
    const result = await client.query(text, [postal_code]);
    if (result.rows[0])
      return res.status(200).json({
        status: "success",
        data: result.rows[0],
      });
    res.status(404).json({
      status: "failure",
      message: "Invalid postal code",
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
});

app.listen(process.env.PORT, () => {
  `app connected to port ${process.env.PORT}`;
});
