const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const HomeId = require("./HomeId");
const AccessToken = require("./AccessToken");

const getDeviceList = async () => {
  return HomeId.getHomeId().then(async (homeId) => {
    const url =
      "https://api.millheat.com/uds/getIndependentDevices?homeId=" + homeId;
    const accessToken = await AccessToken.getAccessToken();
    const options = {
      method: "GET",
      headers: {
        access_token: accessToken,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json.data.deviceInfoList)
      .catch((err) => console.error("error:" + err));
  });
};
exports.getDeviceList = getDeviceList;
