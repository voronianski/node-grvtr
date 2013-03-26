var crypto = require('crypto'),
	querystring = require('querystring');

/*
 * Trim from spaces helper
 */
function trim (str) {
	return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/*
 * Generates 'gravatar' url
 *
 * @param email {String} - user email that is using 'gravatar' service
 * @param options {Object} - e.g. { size: 20, default: mm, rating: g, secure: false}
 * @return {String} - url string
 */
function create (email, options) {
	var clean = trim(email).toLowerCase(),
		hash = crypto.createHash('md5').update(clean).digest('hex'),
		options = options || {},
		params = {},
		baseUrl;

	if (options.secure) {
		baseUrl = 'https://gravatar.com/avatar/';
	} else {
		baseUrl = 'http://gravatar.com/avatar/';
	}

	if (options.size && !isNaN(options.size)) {
		params.s = options.size;
	}

	if (options.default) {
		params.d = options.default;
	}

	if (options.rating) {
		params.r = options.rating;
	}

	if (options.forcedefault) {
		params.f = 'y';
	}

	params = '?' + querystring.stringify(params);

	return baseUrl + hash + params;
}

exports.create = create;