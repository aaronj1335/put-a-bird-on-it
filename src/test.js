require([
    'path!bird:bird'
], function(birdifyIt) {

    test('put an effin bird on it', function() {
        var body = document.getElementsByTagName('body')[0], childNodes;
        birdifyIt(body);
        childNodes = body.childNodes;
        equal(childNodes[childNodes.length-1].className, 'with-a-bird-on-it');
    });

    start();
});
