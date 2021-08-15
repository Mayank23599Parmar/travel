class Header {
    constructor() {
        this.init()

    }
    init() {
        document.querySelector('.mobile-header-menu').addEventListener('click', () => {
            document.querySelector('.mobile-navigation').style.display = "block"
            document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        });
        document.querySelector('.mobile-navigation').addEventListener('click', () => {
            document.querySelector('.mobile-navigation').style.display = "none"
        })
     $(window).scroll(function(){
         console.log("scroll")
        if($(this).scrollTop() >700){
            $(".header-wrapper").addClass('sticky-header')
        }
        else{
            $(".header-wrapper").removeClass('sticky-header')
        }
        if($(this).scrollTop() >400){
            $(".mobile-header-wrapper").addClass('mobole-sticky')
        }
        else{
            $(".mobile-header-wrapper").removeClass('mobole-sticky')
        }
      
     });
    }
}

new Header;