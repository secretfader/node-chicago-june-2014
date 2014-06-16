var express = require('express')
,   errbot  = require('errbot')
,   app     = express();

app.route('/404')
  .all(function (req, res, next) {
    return next(errbot.notFound('Page not found.'));
  });

app.route('/500')
  .all(function (req, res, next) {
    return next(errbot.error('Generic server error.'));
  });

app.route('/409')
  .all(function (req, res, next) {
    return next(errbot.conflict('Something failed to save.', {
      fields: [
        { name: 'is blank' },
        { email: 'is taken' }
      ]
    }));
  });

app.route('/special')
  .all(function (req, res, next) {
    return next(errbot.error({ fields: ['name', 'title'] }));
  });

app.use(function (err, req, res, next) {
  if (!err.isBot) return res.send(500);
  if (err.code) res.statusCode = err.code;
  res.json(err);
});

app.listen(process.env.PORT || 9292);
