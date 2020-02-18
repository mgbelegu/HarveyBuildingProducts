$(document).ready(function () {
    var slider = $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: false,
        slideMargin: 0,
        thumbItem: 5,
        enableDrag: false,
        adaptiveHeight: false
    });

    $('.slideControls .slidePrev').click(function () {
        slider.goToPrevSlide();
    });

    $('.slideControls .slideNext').click(function () {
        slider.goToNextSlide();
    });
});

