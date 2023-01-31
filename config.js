 const config = {
    /* don't expose password or any sensitive info, done only for demo */
    server: "co2-server.database.windows.net",
    user: "ZenonCO2db",
    password: "Zenon123!",
    database: "CO2_db",
    authentication: {
      type: "default",
    },
    options: {
      encrypt: true,
    },
  };

  module.exports = config
 