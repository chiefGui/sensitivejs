Synopsis
--------

Sensitive.js is a fast, intuitive, lightweight vanilla JavaScript plug-in that sensibilizes your application on the fly. Now it's easy to set up your site into responsiveness.

Discover why you'll adore Sensitive.js:
---------------------------------------

Always that someone asks me "why should I use Sensitive?", I'm proud to say:

-   Its syntax is elegant, easy to read and flexible;

-   It's powerful, ultrafast and lightweight. *Cmon, we use [vanilla][1]!*

[1]: <http://vanilla-js.com/>

-   It's just what you need and nothing more — this *"feature"* guarantee performance; 

-   It's safe: we can measure the responsiveness by device instead of just width. This feature prevents that devices with large resolutions accesses your application like they are in a desktop; 

-   It's simple and fits any kind of application: since small until huge;

-   It's not racist. If you want to create an exclusive UI for 1024x768 running on IE8, no problem because Sensitive is *old-browser-friendly*; 

-   It's smart. Sensitive just acts when is really necessary. In simpler words, there are not waste of traffic or client's resources because our plug-in manages its behaviors on demand, only and just only when it is really really necessary to consume it.

Why Sensitive.js instead of CSS3 Media Queries?
-----------------------------------------------

Good point! I'll very clear here:

-   **Firstly,** you can deal with JavaScript responsive effects; *with media query you can't*.

-   **Secondly,** you can deal specifically with handheld devices, securing that your application is running properly where it should have; *with media query you can't do this.*

-   **Thirdly,** don't matter which browser your client is using, Sensitive is very ready to go; *pure media queries just work on modern browsers.*


Motivation
-----
Yes, there are lots of libraries that promise unleash an extraordinary productivity and reliable coding. But, which one is really serious? Based on this reality, I started to developing Sensitive: my way, simple way, a right way.


What's new in 0.4?
------------------

-   We converted from jQuery plug-in to vanilla JavaScript;

-   Debug mode is removed;

-   Development version is now from 5kb to 3kb;

-   Syntax is simplified, more comprehensive and easier to maintain.



Requeriments
------------

**Sorry.** You just need a browser.


Installation
------------

We really recommend you to install Sensitive.js via [Bower][2]. Just open your command prompt or terminal and enter: `bower install sensitivejs`.

As a second option, you can **clone** **from our repository**: `git clone https://github.com/chiefGui/sensitivejs.git`

Or, if you wish to download manually like the old times, feel free:

-   [sensitive-0.4.0.js][3] — Uncompressed/Development version (~3kb)

[3]: <https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.4.0.js>

-   [sensitive-0.4.0.min.js][4] — Compressed/Production version (~2kb)

[2]: <http://bower.io/>

[4]: <https://github.com/chiefGui/sensitivejs/blob/master/dist/sensitive-0.4.0.min.js>



Usage
-----

Please, call Sensitive in the page that you want to use it:

```html
<script src='/path/to/sensitive-0.4.0.min.js'></script>
```

Then, by now, you just need to code:

```javascript
sensitive([0, 568], function () {
   console.log('Hello world!');
});
```

A quickly explanation:

-   sensitive is the plug-in/function name;

-   `[0, 568] `is an array composed by two values: a minimum and maximum screen/viewport size range. In this case, we're dealing with landscape iPhone size;

-   `function() { ... } `is an anonymous function (you can use a non-anonymous function if you wish) that says to our browser to display "*Hello world!*" in the browser's console.



Features
--------

Starting from the above implementation, lets see some features.

- Working on multiple screen ranges? Ok...
   ```javascript
   sensitive([0, 320], function() {
      console.log('Hi, portrait iPhone!');
   });

   sensitive([321, 568], function() {
      console.log('Hi, landscape iPhone!');
   });
   ```

- If you don't need a maximum screen/viewport size, **just omit the second element of the first argument**:
   ```javascript
    sensitive([1024], function() {
      console.log('I\'m appearing for those who has screen/viewport size larger than 1024 pixels');
    });
   ```

-   We already see how to do things when we enter in some screen-size range, right? Now, lets see how to perform actions when we leave through *callbacks*:
   ```javascript
   sensitive([0, 320], function() {
     console.log('Hello, world!');
   }, function() {
     console.log('Bye, cruel and little world!');
   });
   ```

-   You can make a safer responsive application if you provide your modifications for handheld devices only. We're perfectly prepared to go straight on. Curious? Hold your breathe and unleash your app's awesomeness:

    ```javascript
    sensitive([0, 320], {}, {}, {
        handheldDevicesOnly: true
    });
    ```

    **HINT:** `handheldDevicesOnly` is an option and you'll understand better later.
    
- If you are creating different templates for different devices, brace yourself and go designing because we are ready:
   ```javascript
   sensitive([0, 320], function(device) { // Pay attention on "device" argument: here is the magic.
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
   sensitive([0, 320], function(device) {
      if (device.isMobile() === true) {
         // do something here
      };
   });
   ```
   
   To identify which device your client is running your application, just use:

   ```javascript
   sensitive([0, 320], function(device) {
      console.log(device.identification);
   });
   ```
   
   You can work with devices in callbacks as well:
   
   ```javascript
   sensitive([0, 320], function(device) {
      console.log(device.identification);
   }, function(device) {
      console.log(device.identification);
   });
   ```

API Reference
-----
Sensitive is composed by **four** arguments: `range`, `inRangeCallback`, `outOfRangeCallback` and `options`.

* `range` should to be an array that *means* the minimum and maximum width area where you'll do something;
  * In this case, your array can be composed with just one element, that will be the initial value of the range. The maximum range, in this case, is `15360` and it can be modified by an option.

* `inRangeCallback` should to be a(n anonymous) function that'll unleash what you want to do in the selected range;

* `outOfRangeCallback` should to be a(n anonymous) function that'll run a callback when you get out of range from predefined range;

* `options` is the only argument that can be omitted. Take a look in which options you can modify:

License
-------

This plugin is under [GNU GPL V3](https://github.com/chiefGui/sensitivejs/blob/master/LICENSE) license.