const { Client } = require('pg');
var fs = require('fs');

const client = new Client('postgres://xdgqkzyb:erpe7eXlmjnnzFYzS_cl_J5-Viu0T4mj@snuffleupagus.db.elephantsql.com/xdgqkzyb')

client.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})
module.exports = client