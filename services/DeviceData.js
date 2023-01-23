const SingleDevice = require("../services/SingleDevice");
const DeviceList = require("../services/DeviceList");

const getDeviceData = async () => {
  const deviceList = await DeviceList.getDeviceList();
  const deviceData = await Promise.all(
    deviceList.map(async (el, index) => {
      const device = await SingleDevice.getSingleDevice(index);
      return device;
    })
  );

  return deviceData;
};

exports.getDeviceData = getDeviceData;
