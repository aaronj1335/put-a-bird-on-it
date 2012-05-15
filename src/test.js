define([
    'component!vendor:jquery',
    './bird'
], function($, birdifyIt) {

    test('put an effin bird on it', function() {
        birdifyIt($('body'));
        equal($('body').children().last()[0].className, 'with-a-bird-on-it');
    });

    start();
});
