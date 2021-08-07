class bannerSlider{
    constructor(){
        this.init()
    }
    init(){
        $(".bannerSlider").slick({
            dots: false
            , autoplay: true
            , infinite: true
            , slidesToShow: 1,
            arrow:true,
            prevArrow:"<span class='arrow-prev'><i class='fa fa-angle-left' aria-hidden='true'></i></span>",
            nextArrow:"<span class='arrow-next'><i class='fa fa-angle-right'></i></span>",
        });
    }
}
new bannerSlider;