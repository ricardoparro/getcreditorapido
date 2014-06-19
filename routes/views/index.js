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
	
	// Load the current post
	view.on('init', function(next) {
		
		var q = keystone.list('Post').model.findOne({
			state: 'published',
			slug: locals.filters.post
		}).populate('author partners');
		
		q.exec(function(err, result) {
			locals.data.post = result;
			next(err);
		});
		
	});
	

	
	// Render the view
	view.render('index');
	
};
