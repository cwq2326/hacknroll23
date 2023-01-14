const { Client } = require('pg')
const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password',
  port: 5432,
});

client.connect().then(() => {
  client.query('SELECT * FROM mrt_stops', (err, res) => {
    console.log(res.rows)
    client.end()
  });
});
