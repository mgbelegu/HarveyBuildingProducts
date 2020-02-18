$(document).ready(function () {

    var $first = $('#firstP');
    var $sec = $('#secP');
    var $third = $('#thirdP');
    var $fourth = $('#fourthP');
    var $fifth = $('#fifthP');
    var $sixth = $('#sixthP');
    var $seventh = $('#seventhP');
    var $eighth = $('#eighthP');
    var $nineth = $('#ninethP');

    var $text1 = $("#text-info1");
    var $text2 = $("#text-info2");
    var $text3 = $("#text-info3");
    var $text4 = $("#text-info4");
    var $text5 = $("#text-info5");
    var $text6 = $("#text-info6");
    var $text7 = $("#text-info7");
    var $text8 = $("#text-info8");
    var $text9 = $("#text-info9");

    $('#firstP').click(function () {
        $first.addClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeIn("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#secP').click(function () {
        $first.removeClass('active');
        $sec.addClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeIn("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#thirdP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.addClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeIn("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#fourthP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.addClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeIn("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#fifthP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.addClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeIn("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#sixthP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.addClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeIn("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#seventhP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.addClass('active');
        $eighth.removeClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeIn("fast");
        $text8.fadeOut("fast");
        $text9.fadeOut("fast");
    });

    $('#eighthP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.addClass('active');
        $nineth.removeClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeIn("fast");
        $text9.fadeOut("fast");
    });

    $('#ninethP').click(function () {
        $first.removeClass('active');
        $sec.removeClass('active');
        $third.removeClass('active');
        $fourth.removeClass('active');
        $fifth.removeClass('active');
        $sixth.removeClass('active');
        $seventh.removeClass('active');
        $eighth.removeClass('active');
        $nineth.addClass('active');
        $text1.fadeOut("fast");
        $text2.fadeOut("fast");
        $text3.fadeOut("fast");
        $text4.fadeOut("fast");
        $text5.fadeOut("fast");
        $text6.fadeOut("fast");
        $text7.fadeOut("fast");
        $text8.fadeOut("fast");
        $text9.fadeIn("fast");
    });
});



$(document).ready(function () {

    var $r1 = $('#r-1');
    var $r2 = $('#r-2');
    var $r3 = $('#r-3');
    var $r4 = $('#r-4');
    var $r5 = $('#r-5');
    var $r6 = $('#r-6');
    var $r7 = $('#r-7');
    var $r8 = $('#r-8');
    var $r9 = $('#r-9');

    var $t1 = $("#content1");
    var $t2 = $("#content2");
    var $t3 = $("#content3");
    var $t4 = $("#content4");
    var $t5 = $("#content5");
    var $t6 = $("#content6");
    var $t7 = $("#content7");
    var $t8 = $("#content8");
    var $t9 = $("#content9");

    $('#r-1').click(function () {
        $r1.toggleClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.toggle("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-2').click(function () {
        $r1.removeClass('active');
        $r2.toggleClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.toggle("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-3').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.toggleClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.toggle("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-4').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.toggleClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.toggle("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-5').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.toggleClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.toggle("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });


    $('#r-6').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.toggleClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.toggle("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-7').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.toggleClass('active');
        $r8.removeClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.toggle("fast");
        $t8.fadeOut("fast");
        $t9.fadeOut("fast");
    });

    $('#r-8').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.toggleClass('active');
        $r9.removeClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.toggle("fast");
        $t9.fadeOut("fast");
    });

    $('#r-9').click(function () {
        $r1.removeClass('active');
        $r2.removeClass('active');
        $r3.removeClass('active');
        $r4.removeClass('active');
        $r5.removeClass('active');
        $r6.removeClass('active');
        $r7.removeClass('active');
        $r8.removeClass('active');
        $r9.toggleClass('active');
        $t1.fadeOut("fast");
        $t2.fadeOut("fast");
        $t3.fadeOut("fast");
        $t4.fadeOut("fast");
        $t5.fadeOut("fast");
        $t6.fadeOut("fast");
        $t7.fadeOut("fast");
        $t8.fadeOut("fast");
        $t9.toggle("fast");
    });
});