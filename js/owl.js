$('.urun-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoPlay: 1000,
        items:10,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
$('.aile-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoPlay: 1000,
        items:10,
        lazyLoad: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });