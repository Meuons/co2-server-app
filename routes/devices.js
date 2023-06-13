var express = require("express");
var router = express.Router();
const cors = require("cors");
const DeviceData = require("../services/DeviceData");
let app = express();

app.use(cors({ origin: true }));

router.get("/", async function (req, res, next) {
  const deviceData = await DeviceData.getDeviceData();
  try {
    res.send(`{"devices":${JSON.stringify(deviceData)}}`);
  } catch (err) {
    console.error(`Error while getting timestamps `, err.message);
    next(err);
  }
});

/* GET users listing. */
router.get("/:deviceName", async function (req, res, next) {
  const deviceData = await DeviceData.getDeviceData();
  const i = deviceData.findIndex(
    (obj) => obj.deviceName == req.params.deviceName
  );
  if (i == -1) {
    res.send(`error: No device found`);
  } else {
    res.send(`{"${req.params.deviceName}":${JSON.stringify(deviceData[i])}}`);
  }
});

module.exports = router;
