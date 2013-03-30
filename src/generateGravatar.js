var crypto = require('crypto');

/*
 * Trim from spaces helper
 */
function trim (str) {
	return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/*
 * Create querystring
 */
function query(params) {
	var q = '';
	for(var param in params) {
		q += param + '=' + params[param] + '&';
	}
	return q.substring(0, q.length - 1);
}

/*
 * Generates 'gravatar' url
 *
 * @param email {String} - user email that is using 'gravatar' service
 * @param options {Object} - e.g. { size: 20, default: mm, rating: g, secure: false}
 * @param callback {Function} - (optional) pass url string for async version
 * @return {String} - url string
 */
function create (email, options, callback) {
	var clean = trim(email).toLowerCase(),
		hash = crypto.createHash('md5').update(clean).digest('hex'),
		params = {},
		baseUrl,
		gravatarUrl;

	options = options || {};

	if (options.secure) {
		baseUrl = 'https://gravatar.com/avatar/';
	} else {
		baseUrl = 'http://gravatar.com/avatar/';
	}

	if (options.size && !isNaN(options.size)) {
		params.s = options.size;
	}

	if (options.defaultImage) {
		params.d = options.defaultImage;
	}

	if (options.rating) {
		params.r = options.rating;
	}

	if (options.forceDefault) {
		params.f = 'y';
	}

	params = '?' + query(params);

	gravatarUrl = baseUrl + hash + params;

	if (callback) {
		return callback(gravatarUrl);
	}

	return gravatarUrl;
}

exports.create = create;
