# node-grvtr
============

Small node.js library that generates gravatar url based on an email.

## How to use

At first you need to install npm package:

```bash
npm install grvtr
```

Then you can require it in your project and pass an email string to the utility:

```javascript
var grvtr = require('grvtr');

grvtr.create('john.doe@example.com'); // returns http://gravatar.com/avatar/[HASH]
```

Gravatar allows you to use several options 

```javascript
grvtr.create('john.doe@example.com', { 
	size: 200,     // 1- 2048px
	default: 'mm', // 'identicon', 'monsterid', 'wavatar', 'retro', 'blank' 
	rating: 'g',   // 'pg', 'r', 'x'
	secure: true,
	forcedefault: true
});
// returns http://gravatar.com/avatar/[HASH]?params
```

## Options according to the [gravatar.com](http://gravatar.com) documentation:

### Size

You may request images anywhere from **1px up to 2048px**, however requesting larger sizes may result in pixelation/low-quality images.

### Default

Possible values of default image:

- **404**: do not load any image if none is associated with the email hash, instead return an HTTP 404 (File Not Found) response

- **mm**: (mystery-man) a simple, cartoon-style silhouetted outline of a person (does not vary by email hash)

- **identicon**: a geometric pattern based on an email hash

- **monsterid**: a generated 'monster' with different colors, faces, etc

- **wavatar**: generated faces with differing features and backgrounds

- **retro**: awesome generated, 8-bit arcade-style pixelated faces

- **blank**: a transparent PNG image

![404](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&f=y)
![mm](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=identicon&f=y)
![identicon](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=monsterid&f=y)
![monsterid](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=wavatar&f=y)
![retro](http://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y)

### Rating

You can self-rate images indicating if an image is appropriate for a certain audience:

- **g**: suitable for display on all websites with any audience type
- **pg**: may contain rude gestures, provocatively dressed individuals, the lesser swear words, or mild violence
- **r**: may contain such things as harsh profanity, intense violence, nudity, or hard drug use
- **x**: may contain hardcore sexual imagery or extremely disturbing violence

### Forcedefault

Use if you want to force the default image to always load set this property to ``true``.

### Secure

If you're displaying Gravatars on a page that is being served over SSL you can server gravatars via SSL as well while setting this one to ``true``.

## Contributing

If you have some ideas or found a bug feel free to raise an [issue](https://github.com/voronianski/node-grvtr/issues).

For developing purposes, you can test it like:

```javascript
npm test
```

or if you have [jasmine-node](https://github.com/mhevery/jasmine-node) installed globally with such command:

```javascript
jasmine-node test
```

* * *

##### MIT Licensed

(c) 2013 Dmitri Voronianski