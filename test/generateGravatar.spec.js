describe('./src/generateGravatar.js', function () {
	var grvtr = require('../src/generateGravatar.js'),
		crypto = require('crypto');

	describe('create() method', function () {
		var email, hash;

		beforeEach(function () {
			email = 'dmitri.voronianski@gmail.com';
			hash = crypto.createHash('md5').update(email).digest('hex');
		});

		it('should generate avatar url', function () {
			expect(grvtr.create(email)).toBe('http://gravatar.com/avatar/' + hash + '?');
		});

		describe('when options passed', function () {

			it('should add size option', function () {
				expect(grvtr.create(email, { size: 20 })).toContain('?s=20');
			});

			it('should add default option', function () {
				expect(grvtr.create(email, { default: 'mm' })).toContain('?d=mm');
			});

			it('should add rating option', function () {
				expect(grvtr.create(email, { rating: 'g' })).toContain('?r=g');
			});

			it('should add secure option', function () {
				expect(grvtr.create(email, { secure: true })).toContain('https');
			});

			it('should add forcedefault option', function () {
				expect(grvtr.create(email, { forcedefault: true })).toContain('?f=y');
			});

			it('should add several options', function () {
				expect(grvtr.create(email, { size: 20, default: 'mm' })).toContain('?s=20&d=mm');
			});

		});
	});

});