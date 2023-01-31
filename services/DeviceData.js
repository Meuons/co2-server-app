const SingleDevice = require("../services/SingleDevice");
const DeviceList = require("../services/DeviceList");

const getDeviceData = async () => {
    try{
  const deviceList = await DeviceList.getDeviceList();
  const deviceData = await Promise.all(
    deviceList.map(async (el, index) => {
      const device = await SingleDevice.getSingleDevice(index);
      return device;
    })
  );

  return deviceData;
    } catch (err) {
        console.error(`Error: `, err.message);
        next(err);
    }
};

exports.getDeviceData = getDeviceData;
