const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const url = "https://api.millheat.com/share/applyAuthCode";

const options = {
  method: "GET",
  headers: {
    access_key: "316fd26e0c824676a1f241f88ab3a84c",
    secret_token: "d7877610550c4ab29f7e1b3b6c31574e",
  },
};
const getAuthorizationCode = async () => {
  return fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.data.authorization_code)
    .catch((err) => console.error("error:" + err));
};
exports.getAuthorizationCode = getAuthorizationCode;
