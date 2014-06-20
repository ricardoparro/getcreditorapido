var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var Testimonial = new keystone.List('Testimonial', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Testimonial.add({
	name: { type: String, required: true },
	numberOfStars:{ type: String},
	location: {type: String},
	testemony: {type: String}
});

Testimonial.relationship({ ref: 'Post', path: 'testimonial' });

Testimonial.register();