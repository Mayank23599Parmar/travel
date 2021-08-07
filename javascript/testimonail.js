class Testimonail{
    constructor(){
        this.init()
    }
    init(){
        $(".testimonal-slider").slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow:"<span class='testimonial-arrow-prev'><i class='fa fa-angle-left' ></i></span>",
            nextArrow:"<span class='testimonial-arrow-next'><i class='fa fa-angle-right'></i></span>",
            
        });
    }
    }

new Testimonail;