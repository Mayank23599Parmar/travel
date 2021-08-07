class FeatureSlider{
    constructor(){
        this.init()
    }
    init(){
        $(".feature-places-slider").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow:"<span class='arrow-prev'><i class='fa fa-angle-left' ></i></span>",
            nextArrow:"<span class='arrow-next'><i class='fa fa-angle-right'></i></span>",
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
              // You can unslick at a given breakpoint now by adding:
              // settings: "unslick"
              // instead of a settings object
            ]
        });
    }
}
new FeatureSlider;