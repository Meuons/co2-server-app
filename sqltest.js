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
console.log("Starting...");
const sql = require("mssql");
connectAndQuery();

/*const config = require('./config');*/

async function connectAndQuery() {
  try {
    var poolConnection = await sql.connect(config);

    console.log("Reading rows from the Table...");
    var resultSet = await poolConnection.request()
      .query(`SELECT TOP 20 pc.Name as CategoryName,
            p.name as ProductName 
            FROM [SalesLT].[ProductCategory] pc
            JOIN [SalesLT].[Product] p ON pc.productcategoryid = p.productcategoryid`);

    console.log(`${resultSet.recordset.length} rows returned.`);

    // output column headers
    var columns = "";
    for (var column in resultSet.recordset.columns) {
      columns += column + ", ";
    }
    console.log("%s\t", columns.substring(0, columns.length - 2));

    // ouput row contents from default record set
    resultSet.recordset.forEach((row) => {
      console.log("%s\t%s", row.CategoryName, row.ProductName);
    });

    // close connection only when we're certain application is finished
    poolConnection.close();
  } catch (err) {
    console.error(err.message);
  }
}
