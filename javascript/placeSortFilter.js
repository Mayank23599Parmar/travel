class PlaceSortFilter{
    constructor(){
        this.init()
    }
    init(){
        //Dropdown options filtering
$('.js-dropdown-filter').on("change",function() {
    console.log("chnages")
    // var $filterList = $('.js-filter-results-plans:visible');
    var $filterList = $('.special-place-wrapper'); 

    // Do something for option price lowest to highest
    if ($(this).val() === 'low-high') {
        var lowHigh = $filterList.sort(function (a, b) {
            return parseInt($(a).find('.price__amount').text()) - parseInt($(b).find('.price__amount').text());
        });
        $('.sort-results').html(lowHigh);

    }
    // Do something for option price highest to lowest
    else if ($(this).val() === 'high-low') {
        var highLow = $filterList.sort(function (a, b) {
            return parseInt($(b).find('.price__amount').text()) - parseInt($(a).find('.price__amount').text());
        });
        $('.sort-results').html(highLow);
    }
    // Do something for option popular
    else {
        var popular = $filterList.sort(function (a, b) {
            return $(a).data("order")-$(b).data("order");
        });
        $('.sort-results').html(popular);  
    }
});//end
    }
}

new PlaceSortFilter;