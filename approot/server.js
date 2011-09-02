var express = require('express');
var app = express.createServer();

	app.configure(function(){
		app.set('views', __dirname + '/views');
		app.set('view engine', 'jade');
		app.use(express.methodOverride());
		app.use(express.bodyParser());
		app.use(app.router);
		app.use(express.static(__dirname + '/assets'));
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	});

	app.get('/', function(req, res){
		res.render('index.jade', {
			layout : 'layouts/single_col_full.jade',
			title : 'Is cool'
		});
	});

	app.listen(3000);