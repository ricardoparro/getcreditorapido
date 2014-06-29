var keystone = require('keystone');
async = require('async');

exports = module.exports = function(req, res) {
	
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'blog';
	locals.filters = {
		post: req.params.post
	};
	locals.data = {
		posts: []
	};
	
	

	
	// Render the view
	view.render('home');
	
};
