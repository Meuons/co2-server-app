var express = require('express');
const SingleDevice = require("../controllers/SingleDevice");
const DeviceList = require("../controllers/DeviceList");
const AccessToken = require("../controllers/AccessToken");
const arr = []
var router = express.Router();
const cors = require('cors');
let app = express();

app.use(cors({ origin: true }));



/* GET users listing. */
router.get('/', async function(req, res, next) {
  const deviceList = await DeviceList.getDeviceList()

  const devices = await Promise.all(deviceList.map( async (el, index) => {
    const device = await SingleDevice.getSingleDevice(index)
   return device

  }))
 
  res.send(`{"devices":${JSON.stringify(devices)}}`)
});

module.exports = router;
