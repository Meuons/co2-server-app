const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const url = "https://api.millheat.com/uds/selectHomeList";
const AccessToken = require("./AccessToken");

const getHomeId = async () => {
  return AccessToken.getAccessToken().then((accessToken) => {
    const options = {
      method: "GET",
      headers: {
        access_token: accessToken,
      },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json.data.homeList[0].homeId)
      .catch((err) => console.error("error:" + err));
  });
};
exports.getHomeId = getHomeId;
