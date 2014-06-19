var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * PostCategory Model
 * ==================
 */

var Partner = new keystone.List('Partner', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Partner.add({
	name: { type: String, required: true },
	image: { type: Types.CloudinaryImage }
});

Partner.relationship({ ref: 'Post', path: 'partners' });

Partner.register();
