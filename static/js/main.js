/*globals jQuery, window, document */
(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        init: function () {
            this.sample_function();
        },
        sample_function: function () {
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));