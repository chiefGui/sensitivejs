/*!
 * Sensitive.js v0.2.0
 * A fast, intuitive, lightweight (~3kb) jQuery plugin to sensibilize your 
 * application on the fly. In other words, now you can do the JavaScript part 
 * of your responsive application easily.
 * 
 * Licensed under the GNU GPL v3 license
 * 
 * @author Guilherme Oderdenge (twitter.com/chiefgui)
 */

; (function ($) {    
    var screen = {
            reached: function(range) {
                var windowWidth = $(window).width();

                if (windowWidth >= range[0] && windowWidth <= range[1]) {
                    return true;
                }
            }
        };
    
    $.sensitive = function(ranges, action, options) {
        var defaults = {
            debugging: false,
            ultimateScreenWidth: 15360
        };
        
        var plugin = this;
        plugin.settings = $.extend({}, defaults, options);
        
        if (typeof ranges[1] === 'undefined') {
            ranges[1] = plugin.settings.ultimateScreenWidth;
        };
        
        var inRange, outsideRange, firstTime = true;
        
        function isInRange() {
            if(screen.reached(ranges) === true) {
                outsideRange = false;
                
                if (inRange === false || (typeof inRange === 'undefined' && firstTime === true)) {
                    inRange = true;
                    
                    action();
                    
                    if (plugin.settings.debugging === true) {
                        console.log('Entered in range between <' + ranges[0] + 'px> and <' + ranges[1] + 'px>');
                    };
                };
            } else {
                inRange = false;
                
                if (outsideRange === false || (typeof outsideRange === 'undefined' && firstTime === true)) {
                    outsideRange = true;
                
                    if (plugin.settings.debugging === true) {
                        console.log('You are now out of range between <' + ranges[0] + 'px> and <' + ranges[1] + 'px>');
                    };
                };
            };
        };
        
        $(window).on('resize', isInRange).trigger('resize');
    };
}(jQuery));