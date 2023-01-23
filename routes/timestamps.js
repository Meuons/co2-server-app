const express = require("express");
const router = express.Router();
const timestampData = require("../services/timestampData");
const db = require("../services/db");
router.get("/", async function (req, res, next) {
  const sql = `SELECT *  FROM Timestamps`;
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      rows,
    });
  });
});

router.get("/name/:deviceName", async function (req, res, next) {
  const sql =
    "SELECT StampDate, ECO2, Temperature, DeviceID, DeviceName FROM Timestamps WHERE DeviceName=" +
    `'${req.params.deviceName}'` +
    "";
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      rows,
    });
  });
});

router.get("/date/:date", async function (req, res, next) {
  const sql =
    "SELECT *  FROM Timestamps WHERE StampDate LIKE " +
    `'%${req.params.date}%'` +
    "";
  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      rows,
    });
  });
});

module.exports = router;
