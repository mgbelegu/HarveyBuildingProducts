$(document).ready(function () {
    var slider = $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        loop: true,
        slideMargin: 0,
        thumbItem: 5,
        enableDrag: false,
        adaptiveHeight: true
    });

    $('.slideControls .slidePrev').click(function () {
        slider.goToPrevSlide();
    });

    $('.slideControls .slideNext').click(function () {
        slider.goToNextSlide();
    });
});

