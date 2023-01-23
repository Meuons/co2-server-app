const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const moment = require("moment");
const DeviceData = require("../services/DeviceData");

const storeDbRecord = async (item) => {

  const sql =    "INSERT INTO Timestamps (StampDate, ECO2, Temperature, DeviceID, DeviceName)  VALUES ( CURRENT_TIMESTAMP, " +
      item.eco2 +
      ", " +
      item.ambientTemp +
      ", " +
      item.deviceId +
      ", " +
      `'${item.deviceName}'` +
      ")"

  db.all(sql, (err, rows) => {
    if (err) {
      console.log('error: ' + err.message);
    }

  });


};
const create = async () => {
  const deviceData = await DeviceData.getDeviceData();

  deviceData.map(async (item, i) => {
    if (new Date().getSeconds() === 0) storeDbRecord(item);
  });
};

module.exports = {
  create,
};
