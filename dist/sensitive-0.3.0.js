/*!
 * Sensitive.js v0.3.0
 * A fast, intuitive, lightweight jQuery plugin to sensibilize your 
 * application on the fly. In other words, now you can do the JavaScript part 
 * of your responsive application easily.
 * 
 * Licensed under the GNU GPL v3 license
 * 
 * @author Guilherme Oderdenge (twitter.com/chiefgui)
 */

; (function ($) {
    var debug = {
        ranges: [],
        refreshRanges: function(ranges) {
            this.ranges = ranges;
        },
        invoke: function(reference) {
            console.log(this.warnings[reference].apply());
        },
        clean: function() {
            this.ranges = undefined;
        },
        warnings: {
            inRange: function () {
                return 'You\'re in range between ' + debug.ranges[0] + 'px and ' + debug.ranges[1] + 'px.';
            },
            outOfRange: function() {
                return 'You\'re out of range between ' + debug.ranges[0] + 'px and ' + debug.ranges[1] + 'px.';
            }
        }
    };

    var screen = {
            inRange: undefined,
            outOfRange: undefined,
            firstTimeResponsive: true,
            sensibilize: function(ranges, action, callback, debugging) {
                if (this.isInRange(ranges) === true) {
                    this.outOfRange = false;
                    
                    if (this.inRange === false || (typeof this.inRange === 'undefined' && this.firstTimeResponsive === true)) {
                        action(device);
                        
                        this.inRange = true;
                        this.firstTimeResponsive = false;
                    
                        if (debugging === true) {
                            debug.refreshRanges(ranges);
                            debug.invoke('inRange');
                            debug.clean();
                        }
                    };
                } else {
                    this.inRange = false;
                    
                    if (this.outOfRange === false || (typeof this.outOfRange === 'undefined' && this.firstTimeResponsive === true)) {
                        if (this.firstTimeResponsive === false) {
                            callback(device);
                        }
                        
                        this.outOfRange = true;
                        this.firstTimeResponsive = false;
                        
                        if (debugging === true) {
                            debug.refreshRanges(ranges);
                            debug.invoke('outOfRange');
                            debug.clean();
                        }
                    };
                }
            },
            isInRange: function(ranges) {
                if (this.reached(ranges)) {
                    return true;
                };
            },
            reached: function(range) {
                var windowWidth = $(window).width();

                if (windowWidth >= range[0] && windowWidth <= range[1]) {
                    return true;
                }
            }
        };
    
    var device = {
        identification: navigator.userAgent,
        isMobile: function() {
            if(/mobi/i.test(navigator.userAgent) === true) {
                return true;
            } else {
                return false;
            };
        },
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (device.Android() || device.BlackBerry() || 
                    device.iOS() || device.Opera() || device.Windows());
        }
    };

    $.sensitive = function(ranges, action, callback, options) {
        var defaults = {
            debugging: false,
            handheldDevicesOnly: false,
            ultimateScreenWidth: 15360
        };
        
        var plugin = this;
        plugin.settings = $.extend({}, defaults, options);
        
        if (typeof ranges[1] === 'undefined') {
            ranges[1] = plugin.settings.ultimateScreenWidth;
        };
        
        if (plugin.settings.handheldDevicesOnly === true && device.isMobile() === false) {
            return null;
        };
        
        $(window).on('resize', function() {
            screen.sensibilize(ranges, action, callback, plugin.settings.debugging);
        }).trigger('resize');
    };
}(jQuery));