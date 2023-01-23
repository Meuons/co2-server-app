const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const DeviceList = require("./DeviceList");
const AccessToken = require("./AccessToken");

const getSingleDevice = async (i) => {
  return DeviceList.getDeviceList().then(async (deviceList) => {
    const accessToken = await AccessToken.getAccessToken();
    const id = deviceList[i].deviceId;

    const url = "https://api.millheat.com/uds/selectDevice2020?deviceId=" + id;
    const options = {
      method: "GET",
      headers: {
        access_token: accessToken,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json.data.deviceInfo)
      .catch((err) => console.error("error:" + err));
  });
};
exports.getSingleDevice = getSingleDevice;
