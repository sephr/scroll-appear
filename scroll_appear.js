//https://github.com/sephr/scroll-appear
//Copyright (c) 2017 Szymon Borda
$.fn.appear = function(animation, duration, distance) {

  $(this).attr("tta", true);

  if (typeof(animation) != "undefined" && animation !== null) $(this).attr("ttaAnimation", animation);
  else $(this).attr("ttaAnimation", "fadeIn");

  if (typeof(duration) != "undefined" && duration !== null) $(this).attr("ttaDuration", duration);
  else $(this).attr("ttaDuration", 500);

  if (typeof(distance) != "undefined" && distance !== null) $(this).attr("ttaDistance", distance);
  else $(this).attr("ttaDistance", 150);

    switch ($(this).attr("ttaAnimation")) {
        case "swipeLeft":
            //animation #1
            $(this).css({
                "opacity": "0",
                "padding-left": "+=10"
            });
            break;
        case "swipeRight":
            //animation #2
            $(this).css({
                "opacity": "0",
                "padding-right": "+=10"
            });
            break;
        case "zoomIn":
            //animation #3
            $(this).css({
                "opacity": "0",
                "letter-spacing": "+=2"
            });
            break;
        case "zoomOut":
            //animation #4
            $(this).css({
                "opacity": "0",
                "letter-spacing": "-=2"
            });
            break;
        case "fadeIn":
            //animation #5
            $(this).css({
                "opacity": "0",
            });
            break;
        default:
            console.log("wrong animation name!");
    }
};

$(document).ready(function() {

    var elems = $('[tta=true]');

    $(window).scroll(function() {
        elems.each(function() {
            if (($(window).scrollTop() + $(window).height()) > ($(this).offset().top + parseInt($(this).attr("ttaDistance")))) {
                var d = parseInt($(this).attr("ttaDuration"));
                switch ($(this).attr("ttaAnimation")) {
                    case "swipeLeft":
                        //animation #1
                        $(this).animate({
                            opacity: 1,
                            paddingLeft: "-=10"
                        }, d);
                        break;
                    case "swipeRight":
                        //animation #2
                        $(this).animate({
                            opacity: 1,
                            paddingRight: "-=10"
                        }, d);
                        break;
                    case "zoomIn":
                        //animation #3
                        $(this).animate({
                            opacity: 1,
                            letterSpacing: "-=2"
                        }, d);
                        break;
                    case "zoomOut":
                        //animation #4
                        $(this).animate({
                            opacity: 1,
                            letterSpacing: "+=2"
                        }, d);
                        break;
                    case "fadeIn":
                        //animation #5
                        $(this).animate({
                            opacity: 1
                        }, d);
                        break;
                }

                $(this).removeAttr("tta ttaAnimation ttaDuration ttaDistance");
                elems = $('[tta=true]');
            }
        });
    });
    $(window).scroll();
});
