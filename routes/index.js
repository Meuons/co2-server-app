var express = require('express');
const SingleDevice = require("../controllers/SingleDevice");
const DeviceList = require("../controllers/DeviceList");
const AccessToken = require("../controllers/AccessToken");
const arr = []
var router = express.Router();
const cors = require('cors');
let app = express();

app.use(cors({ origin: true }));

/* GET home page. */
router.get('/',
    function(req, res, next) {

  res.render('index', { title: 'Express' });
});

module.exports = router;
