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
		}).populate('author partners testimonials');

		for (var key in q['_collection']) {
   			console.log(' name=' + key + ' value=' + q[key]);

   			// do some more stuff with obj[key]
		}

		if(q.lenght == 0){
			q=keystone.list('Post').model.findOne({
			name: 'index',
		}).populate('author partners testimonials');
		}
		
		q.exec(function(err, result) {
			locals.data.post = result;
			next(err);
		});
		
	});
	

	
	// Render the view
	view.render('index');
	
};
