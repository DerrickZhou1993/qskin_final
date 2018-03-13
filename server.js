var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var corsFilter = require('cors');

var app = express();
app.set('port', process.env.PORT || 80);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsFilter());
app.options('*', corsFilter()); // allow preflight (http.OPTIONS)

app.use(function(req, res, next) {
	if ((req.get('X-Forwarded-Proto') !== 'https')
		&& (req.url !== '/health.json')) {
			console.log("redirecting http requests to https")
			res.redirect('https://' + req.get('Host') + req.url)
	}
	else
		next();
});

app.use(express.static(path.join(__dirname, 'public')));

var mode =  process.env.MODE || ('');

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});

app.get("/*", function(req, res, next) {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});
