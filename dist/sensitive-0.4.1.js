/*!
 * Sensitive.js v0.4.1
 * A fast, intuitive, lightweight JavaScript plug-in to sensibilize your 
 * application on the fly. In other words, now you can do the JavaScript part 
 * of your responsive application easily.
 * 
 * Licensed under the GNU GPL v3 license
 * 
 * @author Guilherme Oderdenge (twitter.com/chiefgui)
 */

(function () {
    var screen = {
        sensibilize: function (callback) {
            callback(device);
        },
        reached: function (range) {
            var windowWidth = window.innerWidth;
            return windowWidth >= range[0] && windowWidth <= range[1];
        }
    };

    var device = {
        identification: navigator.userAgent,
        isMobile: function () {
            return /mobi/i.test(navigator.userAgent);
        },
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (device.Android() || device.BlackBerry() ||
                    device.iOS() || device.Opera() || device.Windows());
        }
    };

    sensitive = function (range, inRangeCallback, outOfRangeCallback, options) {
        var defaults = {
            handheldDevicesOnly: false,
            ultimateScreenWidth: 15360
        };

        if (typeof options !== 'undefined')
            for (var i = 1; i < options.length; i++)
                for (var key in defaults[i])
                    if (defaults[i].hasOwnProperty(key))
                        defaults[0][key] = arguments[i][key];

        if (typeof range[1] === 'undefined')
            range[1] = defaults.ultimateScreenWidth;

        if (defaults.handheldDevicesOnly && !device.isMobile())
            return null;

        var inRange = screen.reached(range);

        if (inRange)
            screen.sensibilize(inRangeCallback);

        window.addEventListener('resize', function () {
            screen.reached(range) ? (!inRange && (inRange = true) && screen.sensibilize(inRangeCallback)) : ((inRange && screen.sensibilize(outOfRangeCallback)) || (inRange = false));
        }, false);
    };
})();