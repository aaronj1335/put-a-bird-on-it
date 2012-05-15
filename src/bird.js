define([
    'component!vendor:jquery',
    'css!./bird.css'
], function($) {
    return function(node) {
        $('<div class=with-a-bird-on-it></div>').appendTo(node);
    };
});
