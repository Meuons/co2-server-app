const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const url =
  "https://api.millheat.com/share/applyAccessToken?password=Tovvtw99&username=mans.marlid%40zenon.se";
const AuthorizationCode = require("./AuthorizationCode");

const getAccessToken = async () => {
  return AuthorizationCode.getAuthorizationCode().then((authorizationCode) => {
    const options = {
      method: "GET",
      headers: {
        authorization_code: authorizationCode,
      },
    };
    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => json.data.access_token)
      .catch((err) => console.error("error:" + err));
  });
};
exports.getAccessToken = getAccessToken;
