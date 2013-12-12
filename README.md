## Synopsis

Sensitive.js is a fast, intuitive, lightweight jQuery plug-in sensibilize your application on the fly. Now it's easy to set up your site into responsiveness.

## Code Example

The syntax is elegant, easy to read and flexible. See yourself:

```javascript
$.sensitive([0, 500], function() {
  console.log('0px ~ 500px');
});

$.sensitive([501, 1024], function() {
  console.log('501px ~ 1024px');
});

$.sensitive([1024], function() {
  console.log('1024px ~ ?');
});
```

## Motivation

Yes, there are lots of libraries that promise unleash an extraordinary productivity and reliable coding. But, which one is really serious? Based on this reality, I started to developing Sensitive: my way, simple way, a right way.

## Requeriments

You'll need [jQuery 1.7+](http://jquery.com/download/) to go with Sensitive.

## Installation

It's pretty simple to install Sensitive.

First of all, you need to download it. To do this, make your choice:
* Clone? `git clone https://github.com/chiefGui/sensitivejs.git`
* Want to play a standalone? Development or production — make your choice: 
    * [sensitive-0.2.0.js](https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.2.0.js) — uncompressed/development version (~3kb)
    * [sensitive-0.2.0.min.js](https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.2.0.min.js) — compressed/production version (~2kb)

Then, put the plug-in within a folder and reference it on the page that you want to use:

```html
<script src="/path/to/sensitive-0.2.0.js"></script>
```

## API Reference

Sensitive is composed by three arguments: `ranges`, `action` and `options`.

* `ranges` should to be an array that *means* the minimum and maximum width area where you'll do something;
  * In this case, your array can be composed with just one element, that will be the initial value of the range. The maximum range, in this case, is `15360` and it can be modified by an option.

* `action` should to be a(n anonymous) function that'll unleash what you want to do in the selected range;

* `options` is the only argument that can be omitted. Take a look in which options you can modify:
  * `debugging` (default: true): `true | false`
    * Enters in debug mode.
  * `ultimateScreenSize` (default: 15360): `integer`
    * Defines the ultimate screen size that a range can reach.

***

## Author

* [Guilherme Oderdenge](mailto:guilhermeoderdenge@gmail.com)

## License

This plugin is under [GNU GPL V3](https://github.com/chiefGui/sensitivejs/blob/master/LICENSE) license.
