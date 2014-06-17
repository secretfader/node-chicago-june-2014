var express = require('express')
,   apogee  = require('apogee')
,   app     = express();

app.use(apogee.config({ header: 'X-API-Version', default: 'v2' }));

app.route('/')
  .get(function (req, res) {
    res.send('Hello');
  });

app.route('/widgets')
  .all(apogee.limit('v2'))
  .get(function (req, res) {
    res.send('Hello V2');
  });

app.route('/widgets')
  .all(apogee.limit('v1'))
  .get(function (req, res) {
    res.send('Hello V1');
  });

app.listen(process.env.PORT || 9292);
