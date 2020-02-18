$('.carousel').carousel({
    interval: false
})

$(".carousel-control-prev").hover(function () {
    $(".prevIcon").attr("src", function (index, attr) {
        return attr.replace(".png", "-active.png");
    });
}, function () {
    $(".prevIcon").attr("src", function (index, attr) {
        return attr.replace("-active.png", ".png");
    });
});

$(".carousel-control-next").hover(function () {
    $(".nextIcon").attr("src", function (index, attr) {
        return attr.replace(".png", "-active.png");
    });
}, function () {
    $(".nextIcon").attr("src", function (index, attr) {
        return attr.replace("-active.png", ".png");
    });
});

$(document).ready(function () {
    $('#menu-button').click(function () {
        $('.menu-mobile').slideToggle("fast");
    });
});
