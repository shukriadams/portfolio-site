require.config({
	baseUrl : '/'
});

require(['jquery','gloo-carousel'], function($, Carousel){

    if ($.find('.js-gloo-carousel')){
        new Carousel({
            $el :$.find('.js-gloo-carousel'),
            items : 3
        });
    }

});