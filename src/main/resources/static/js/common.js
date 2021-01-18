$().ready(() => {
    var burger = $('.hamburger');

    burger.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });

    $(".m1").on("click", function(e) {
        /*
        eq(0) = menu icon
        eq(1) = menu name
        eq(2) = rotation angle
        */
        var angle = $(this).children("div").eq(2).children("i");

        if (angle.hasClass("xi-angle-down-min")) {
            angle.removeClass("xi-angle-down-min").addClass("xi-angle-up-min");
        } else {
            angle.removeClass("xi-angle-up-min").addClass("xi-angle-down-min");
        }

        var m2 = $(this).next(".m2");

        if (m2.hasClass("active")) {
            m2.removeClass("active").slideUp();
        } else {
            m2.addClass("active").slideDown();
        }
    });

    $(".m3 > li").on("mouseover", function(e) {
        $(this).find(".e").css("width", "30px");
    });
    $(".m3 > li").on("mouseout", function(e) {
        $(this).find(".e").css("width", "0px");
    });
});