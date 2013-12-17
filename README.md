## Synopsis

Sensitive.js is a fast, intuitive, lightweight jQuery plug-in that sensibilizes your application on the fly. Now it's easy to set up your site into responsiveness.

## You'll adore Sensitive.js. Discover why

Always that someone ask me this question, I'm proud to answer:

* Its syntax is elegant, easy to read and flexible;
* It's powerful and lightweight;
* It's just what you need and nothing more — this *"feature"* guarantee performance;
* It's safe: we can measure the responsiveness by device instead of just width. This feature prevents that devices with large resolutions accesses your application like they are in a desktop;
* It's simple and fits any kind of application: since small & clean until huge & bizarre;
* It's not racist. If you want to create an exclusive UI for 1024x768 running on IE8, no problem because Sensitive is cross-browser;
* It's smart. Sensitive just acts when is really necessary. In simpler words, there are not waste of traffic or client's resources because our plug-in manages its behaviors on demand, only and just only when it is really really necessary to consume it.

## Why Sensitive.js instead of CSS3 Media Queries?
Good point! I'll be clear here:
* **Firstly,** you can deal with Javascript's responsiveness; *with Media Query you can't.*
* **Secondly,** you can deal with hand-held devices, securing that your application is running properly for the right devices; *with Media Query you can't.*
* **Third,** you can deal with any browsers that supports jQuery 1.7+ (IE8 is an example); *with pure Media Query you can't.*

## Requeriments

You'll need [jQuery 1.7+](http://jquery.com/download/) to go with Sensitive.

## Installation

It's pretty simple to install Sensitive.

First of all, you need to download it.

* Clone? `git clone https://github.com/chiefGui/sensitivejs.git`

* Want to play with standalone? Development or production — make your choice: 
    * [sensitive-0.3.0.js](https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.3.0.js) — uncompressed/development version (~5kb)
    * [sensitive-0.3.0.min.js](https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.3.0.min.js) — compressed/production version (~3kb)

* We're now available on Bower — do you want? Hands on: `bower install sensitivejs`.

Then, put the plug-in within a folder and reference it on the page that you want to use:

```html
<script src="/path/to/sensitive-0.3.0.js"></script>
```

## Usage
### Version 0.2.x+ features

Simple implementation:
```javascript
$.sensitive([0, 320], function() {
  console.log('You\'re inside 0px and 320px. (iPhone?)');
});
```

Doesn't want a maxium resolution? No problem, all you have to do is omit the second element of first argument:
```javascript
$.sensitive([1024], function() {
  console.log('Your resolution is 1024 or more, right?');
});
```

### Current version (0.3.0) features

Want to undo your sensitive modifications easily? Amazing! v0.3.0 it's ready to go with callbacks:
```javascript
$.sensitive([0, 320], function() {
  $('nav').addClass('responsive');
  console.log('You are now in iPhone mode');
}, function() {
  $('nav').removeClass('responsive');
  console.log('You are now in desktop mode');
});
```

You can make a safer responsive application if you provide your modifications only for hand-held devices — and now, Sensitive.js is prepared to go straight on. Curious? Hold your breathe and unleash your app's awesomeness:
```javascript
$.sensitive([0, 320], {}, {}, {
  handheldDevicesOnly: true
});
```

**Hint:** `handheldDevicesOnly` is an option of Sensitive.js plug-in. 

--

If you want to create multiple templates for multiple devices, brace yourself and go design because we are ready:
```javascript
$.sensitive([0, 320], function(device) { // Pay attention on "device" argument: here is the magic.
  if (device.Windows()) {
    $('body')
      .removeClass('.android-ui-kit')
      .addClass('.flat-ui-kit');
  };
});
```

Devices available:

* `.Android()`
* `.BlackBerry()`
* `.iOS()`
* `.Opera()`
* `.Windows()`
* `.any()`(when you want to cover all devices)
* *FirefoxOS is coming soon...*

If you don't want to use `handheldDevicesOnly` option (that returns `null` when is enabled and user isn't on mobile device) and need to do something for mobile users, just check if the user is on a mobile manually. Look, it's simple:

```javascript
$.sensitive([0, 320], function(device) {
  if (device.isMobile() === true) {
    // do something here
  };
});
```

To identify which device your client is running your application, just use:

```javascript
$.sensitive([0, 320], function(device) {
  console.log(device.identification);
});
```

You can work with devices in callbacks as well:

```javascript
$.sensitive([0, 320], function(device) {
  console.log(device.identification);
}, function(device) {
  console.log(device.identification);
});
```

## Demonstration

Want to see the possibilites? [Check out our live demonstration »](http://chiefgui.github.io/sensitivejs/)

## Motivation

Yes, there are lots of libraries that promise unleash an extraordinary productivity and reliable coding. But, which one is really serious? Based on this reality, I started to developing Sensitive: my way, simple way, a right way.

## API Reference

Sensitive is composed by **four** arguments: `ranges`, `action`, `callback` and `options`.

* `ranges` should to be an array that *means* the minimum and maximum width area where you'll do something;
  * In this case, your array can be composed with just one element, that will be the initial value of the range. The maximum range, in this case, is `15360` and it can be modified by an option.

* `action` should to be a(n anonymous) function that'll unleash what you want to do in the selected range;

* `callback` should to be a(n anonymous) function that'll run a callback when you get out of range from predefined range;

* `options` is the only argument that can be omitted. Take a look in which options you can modify:
  * `debugging` (default: false): `true | false`
    * Enters in debug mode.
  * `handheldDevicesOnly` (default: false): `true | false`
    * Provides your responsive modifications just for hand-held devices. In other words, you don't feel responsive changes in a desktop.
  * `ultimateScreenSize` (default: 15360): `integer`
    * Defines the ultimate screen size that a range can reach.

***

## Author

* [Guilherme Oderdenge](mailto:guilhermeoderdenge@gmail.com)

## License

This plugin is under [GNU GPL V3](https://github.com/chiefGui/sensitivejs/blob/master/LICENSE) license.
