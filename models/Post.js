var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Post = new keystone.List('Post', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Post.add({
	title: { type: String, required: true },
	tagline: { type:String},
	heading: { type:String},
	valueLoanLabel: {type:String},
	numberOfMoths: {type:String},
	emailLabel: {type:String},
	callToActionLabel: {type:String},
	headingParceiros:{type:String},
	headingOpinions:{type:String},
	headingHowItWorks:{type:String},
	
	partners: { type: Types.Relationship, ref: 'Partner', many: true },
	testimonials: { type: Types.Relationship, ref: 'Testimonial', many: true}, 
	howItWorksFirstTitle: {type:String},
	howItWorksFirstDescription: {type:String},
	howItWorksSecondTitle: {type:String},
	howItWorksSecondDescription: {type:String},
	howItWorksThirdTitleFirstLine: {type:String},
	howItWorksThirdTitleSecondLine: {type:String},
	howItWorksThirdDescription: {type:String},
	
	//Additional Info section
	additionalInfoHeading:{type:String},

	additionalInfoFirstTabLabel: {type:String},
	additionalInfoFirstTabTitle: {type:String},
	additionalInfoFirstTabContent: {type: Types.Html, wysiwyg: false, height: 150 },
	
	additionalInfoSecondTabLabel: {type:String},
	additionalInfoSecondTabTitle: {type:String},
	additionalInfoSecondTabContent: {type: Types.Html, wysiwyg: false, height: 150 },

	additionalInfoThirdTabLabel: {type:String},
	additionalInfoThirdTabTitle: {type:String},
	additionalInfoThirdTabContent: {type: Types.Html, wysiwyg: false, height: 150 },


	state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	categories: { type: Types.Relationship, ref: 'PostCategory', many: true }
});

Post.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Post.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Post.register();
