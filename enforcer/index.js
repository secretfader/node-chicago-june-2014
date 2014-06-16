var express = require('express')
,   app     = express();

app.use(require('enforcer'));

app.get('/', function (req, res) {
  res.send('This route will only be shown if SSL is enabled.');
});

app.listen(process.env.PORT || 9292);
