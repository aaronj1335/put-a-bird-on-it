define([
    'jquery/jquery',
    'css!./bird.css'
], function($) {
    return function(el) {
        $('<div').addClass('with-a-bird-on-it').appendTo(el);
        return el;
    };
});
