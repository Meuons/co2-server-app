const express = require("express");
const config = require("../config");
const router = express.Router();
const timestampData = require("../services/timestampData");
const client = require("../services/db");
const cors = require("cors");
const sql = require("mssql");

let app = express();
app.use(cors({ origin: true }));
router.get("/", async function (req, res, next) {
  client.connect( async(err) => {
    try{
      const result = await client.query('SELECT * FROM CO2_data')
      res.json(result.rows)
      } catch(err){
        res.json(err)
      }
 })
  
});

router.get("/room/:room", async function (req, res, next) {
  const query =  "SELECT * FROM CO2_data WHERE room=" +
    `'${req.params.room}'` +
    "";
    client.connect( async(err) => {
      try{
        const result = await client.query(query)
        res.json(result.rows)
        } catch(err){
          res.json(err)
        }
   })
});

router.get("/date/:date/room/:room", async function (req, res, next) {
console.log( "SELECT *  FROM CO2_data WHERE time::text LIKE " +
`'%${req.params.date}%'` + " AND room=" + `'${req.params.room}'` + "")
  const query =
      "SELECT *  FROM CO2_data WHERE time::text LIKE " +
      `'%${req.params.date}%'` + " AND room=" + `'${req.params.room}'` + "";
      client.connect( async(err) => {
        try{
          const result = await client.query(query)
          res.json(result.rows)
          } catch(err){
            res.json(err)
          }
     })
});


router.get("/date/:date", async function (req, res, next) {
  const query =
    "SELECT * FROM CO2_data WHERE time::text LIKE  " +
    `'%${req.params.date}%'` +
    "";
    client.connect( async(err) => {
      try{
        const result = await client.query(query)
        res.json(result.rows)
        } catch(err){
          res.json(err)
        }
   })
});

module.exports = router;
