const { createPool } = require("mysql");

const pool = createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

// test db connection with below
// pool.query('select * from icn_usr' , (err, result,fields) =>{
//   if(err){
//     return console.log(err);
//   }
//   return console.log(result)
// })

// console.log(pool)
module.exports = pool;


