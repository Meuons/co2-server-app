const express = require("express");
const config = require("../config");
const router = express.Router();
const timestampData = require("../services/timestampData");
const db = require("../services/db");
const cors = require("cors");
const sql = require("mssql");
let app = express();
app.use(cors({ origin: true }));
router.get("/", async function (req, res, next) {
  const poolConnection = await sql.connect(config);
  const query = `SELECT *  FROM Timestamps`;
  const result = await poolConnection.request().query(query)
  const set = result.recordset
    res.json({
      set
    });
});

router.get("/name/:deviceName", async function (req, res, next) {
  const query =  "SELECT StampDate, ECO2, Temperature, DeviceID, DeviceName FROM Timestamps WHERE DeviceName=" +
    `'${req.params.deviceName}'` +
    "";
    const poolConnection = await sql.connect(config);
    const result = await poolConnection.request().query(query)
    const set = result.recordset
      res.json({
        set
      });
});

router.get("/date/:date/name/:deviceName", async function (req, res, next) {

  const query =
      "SELECT *  FROM Timestamps WHERE CONVERT(VARCHAR(25), StampDate, 126) LIKE " +
      `'${req.params.date}%'` + " AND DeviceName=" + `'${req.params.deviceName}'` + "";
      const poolConnection = await sql.connect(config);
      const result = await poolConnection.request().query(query)
      const set = result.recordset
        res.json({
          set
        });
});


router.get("/date/:date", async function (req, res, next) {
  const query =
    "SELECT * FROM Timestamps WHERE CONVERT(VARCHAR(25), StampDate, 126) LIKE  " +
    `'${req.params.date}%'` +
    "";
    console.log(query)
    const poolConnection = await sql.connect(config);
    const result = await poolConnection.request().query(query)
    const set = result.recordset
      res.json({
        set
      });
});

module.exports = router;
