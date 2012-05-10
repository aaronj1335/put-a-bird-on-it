define([
    'path!bird:css!bird.css'
], function() {
    return function(node) {
        var el = document.createElement('div');
        el.className = 'with-a-bird-on-it';
        node.appendChild(el);
    };
});
