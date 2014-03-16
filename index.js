var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// BEGIN ROUTES ----------------------------------------------------------------
function addRoute(url) {
    return function(req, res) { 
	res.render(url, {locals: {url: url}});
    };
}

app.get('/', addRoute('index'));

app.use(function(req, res, next){
  res.render('404.jade', {title: "404 - Page Not Found", showFullNav: false, status: 404, url: req.url });
});
// END ROUTES ------------------------------------------------------------------

app.listen(port, function() { console.log("Listening on " + port); });
