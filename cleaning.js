$(document).ready(function () {

    var $p1 = $('#p1');
    var $p2 = $('#p2');
    var $p3 = $('#p3');
    var $p4 = $('#p4');
    var $p5 = $('#p5');
    var $p6 = $('#p6');
    var $p7 = $('#p7');
    var $p8 = $('#p8');
    var $p9 = $('#p9');

    var $p11 = $('#p11');
    var $p22 = $('#p22');
    var $p33 = $('#p33');
    var $p44 = $('#p44');
    var $p55 = $('#p55');
    var $p66 = $('#p66');
    var $p77 = $('#p77');
    var $p88 = $('#p88');
    var $p99 = $('#p99');

    var $p111 = $('#p111');
    var $p222 = $('#p222');
    var $p333 = $('#p333');
    var $p444 = $('#p444');
    var $p555 = $('#p555');
    var $p666 = $('#p666');
    var $p777 = $('#p777');
    var $p888 = $('#p888');
    var $p999 = $('#p999');

    var $text1 = $("#text-info1");
    var $text2 = $("#text-info2");
    var $text3 = $("#text-info3");
    var $text4 = $("#text-info4");
    var $text5 = $("#text-info5");
    var $text6 = $("#text-info6");
    var $text7 = $("#text-info7");
    var $text8 = $("#text-info8");
    var $text9 = $("#text-info9");

    var $l1 = $('#l1');
    var $l2 = $('#l2');
    var $l3 = $('#l3');

    var $wLinks = $('#windowLinks');
    var $dLinks = $('#doorLinks');
    var $pLinks = $('#porchLinks');

    $l1.click(function () {
        $l1.addClass("activeLink");
        $l2.removeClass("activeLink");
        $l3.removeClass("activeLink");
        $dLinks.fadeOut();
        $pLinks.fadeOut();
        $wLinks.delay(400).fadeIn("fast");
    });

    $l2.click(function () {
        $l2.addClass("activeLink");
        $l1.removeClass("activeLink");
        $l3.removeClass("activeLink");
        $wLinks.fadeOut();
        $pLinks.fadeOut();
        $dLinks.delay(400).fadeIn("fast");
    });

    $l3.click(function () {
        $l3.addClass("activeLink");
        $l1.removeClass("activeLink");
        $l2.removeClass("activeLink");
        $wLinks.fadeOut();
        $dLinks.fadeOut();
        $pLinks.delay(400).fadeIn("fast");
    });

    $('#p1').click(function () {
        $p1.addClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text1.delay(150).fadeIn("fast");
    });

    $('#p2').click(function () {
        $p1.removeClass('active');
        $p2.addClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text2.delay(150).fadeIn("fast");
    });

    $('#p3').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.addClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text3.delay(150).fadeIn("fast");
    });

    $('#p4').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.addClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text4.delay(150).fadeIn("fast");
    });

    $('#p5').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.addClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text5.delay(150).fadeIn("fast");
    });

    $('#p6').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.addClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text6.delay(150).fadeIn("fast");
    });

    $('#p7').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.addClass('active');
        $p8.removeClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text7.delay(150).fadeIn("fast");
    });

    $('#p8').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.addClass('active');
        $p9.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text9.fadeOut("fast");
        $text8.delay(150).fadeIn("fast");
    });

    $('#p9').click(function () {
        $p1.removeClass('active');
        $p2.removeClass('active');
        $p3.removeClass('active');
        $p4.removeClass('active');
        $p5.removeClass('active');
        $p6.removeClass('active');
        $p7.removeClass('active');
        $p8.removeClass('active');
        $p9.addClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.delay(150).fadeIn("fast");
    });

    $('#p11').click(function () {
        $p11.addClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text1.delay(150).fadeIn("fast");
    });

    $('#p22').click(function () {
        $p11.removeClass('active');
        $p22.addClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text2.delay(150).fadeIn("fast");
    });

    $('#p33').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.addClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text3.delay(150).fadeIn("fast");
    });

    $('#p44').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.addClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text4.delay(150).fadeIn("fast");
    });

    $('#p55').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.addClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text5.delay(150).fadeIn("fast");
    });

    $('#p66').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.addClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text6.delay(150).fadeIn("fast");
    });

    $('#p77').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.addClass('active');
        $p88.removeClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text7.delay(150).fadeIn("fast");
    });

    $('#p88').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.addClass('active');
        $p99.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text9.fadeOut("fast");
        $text8.delay(150).fadeIn("fast");
    });

    $('#p99').click(function () {
        $p11.removeClass('active');
        $p22.removeClass('active');
        $p33.removeClass('active');
        $p44.removeClass('active');
        $p55.removeClass('active');
        $p66.removeClass('active');
        $p77.removeClass('active');
        $p88.removeClass('active');
        $p99.addClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.delay(150).fadeIn("fast");
    });

    $('#p111').click(function () {
        $p111.addClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text1.delay(150).fadeIn("fast");
    });

    $('#p222').click(function () {
        $p111.removeClass('active');
        $p222.addClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text2.delay(150).fadeIn("fast");
    });

    $('#p333').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.addClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text3.delay(150).fadeIn("fast");
    });

    $('#p444').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.addClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text4.delay(150).fadeIn("fast");
    });

    $('#p555').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.addClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text5.delay(150).fadeIn("fast");
    });

    $('#p666').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.addClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text6.delay(150).fadeIn("fast");
    });

    $('#p777').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.addClass('active');
        $p888.removeClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
        $text7.delay(150).fadeIn("fast");
    });

    $('#p888').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.addClass('active');
        $p999.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text9.fadeOut("fast");
        $text8.delay(150).fadeIn("fast");
    });

    $('#p999').click(function () {
        $p111.removeClass('active');
        $p222.removeClass('active');
        $p333.removeClass('active');
        $p444.removeClass('active');
        $p555.removeClass('active');
        $p666.removeClass('active');
        $p777.removeClass('active');
        $p888.removeClass('active');
        $p999.addClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.delay(150).fadeIn("fast");
    });
});