'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Based on https://github.com/umdjs/umd/blob/master/templates/jqueryPlugin.js **/
// Uses CommonJS, AMD or browser globals to create a jQuery plugin.
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function (root, jQuery) {
            if (jQuery === undefined) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if (typeof window !== 'undefined') {
                    jQuery = require('jquery');
                } else {
                    jQuery = require('jquery')(root);
                }
            }
            factory(jQuery);
            return jQuery;
        };
    } else {
        // Browser globals
        factory(jQuery);
    }
})(function ($) {
    $.fn.inputMath = function () {

        this.filter('input[type="text"]').each(function () {
            $(this).on('keyup', function (event) {
                var $target = $(event.target);
                if (event.which == 13) {
                    console.log("Evaluating:" + $target.val());
                    var new_value = "";
                    try {
                        new_value = $.mathEval($target.val());
                    } catch (e) {
                        new_value = $target.val();
                        console.log(e);
                    }
                    $target.val(new_value);
                } else {
                    console.log($target.val());
                }
            });
        });

        return this;
    };
});