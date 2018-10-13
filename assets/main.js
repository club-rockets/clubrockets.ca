// Hide Header on on scroll down
var did_scroll;
var forced_scroll;
var last_scroll_top = 0;
var delta = 5;

setInterval(function () {
    if (did_scroll) {
        on_scroll_delayed();
        did_scroll = false;
    }
}, 250);

function on_scroll_delayed() {
    var st = $(this).scrollTop();

    if(Math.abs(last_scroll_top - st) <= delta) {
         return;
    }

    if (window.outerWidth > 765) {
        $('header').css('top', '0');
        return;
    }

    if (st > last_scroll_top && st > $('header').height()) {
        $('header').css('top', '-' + $('header').height() + 'px');
    } else if (st + $(window).height() < $(document).height()) {
        $('header').css('top', '0');
    }
    last_scroll_top = st;
}

$(document).ready(function () {
    /* Parallax hero scrolling */
    $(window).on('load scroll', function () {
        var scrolled = $(this).scrollTop();

        if (scrolled < 1080) {
            $('#title').css({
                'transform': 'translate(-50%, ' + (-50 + (scrolled * 0.1)) + '%)',
                'opacity': 1 - (scrolled - ($('#hero').height() - $('header').height() / 2)) / 300
            });

            $('#hero-vid').css({
                'transform': 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'
            }
            );
        }

        var scroll_header = ((scrolled - ($('#hero').height() - $('header').height() / 2)) / 100);
        $('header').css({
            'background': 'rgba(255,255,255,' + scroll_header + ')'
        });

        if (scroll_header < -0.05) {
            $('header ul li a').css('color', 'rgba(255,255,255,1)');
        } else {
            $('header ul li a').css('color', 'rgba(0,0,0,' + scroll_header + ')');
        }
        if (forced_scroll === false) {
            did_scroll = true;
        }
        forced_scroll = false;
    });

    /* Rocket tabs */
    $('.rocket-tab-link').each(function (index, element) {
        $(this).on('click', function (event) {
            target = $(this).attr("data-target");

            /* Highlight only selected tab link */
            $('.rocket-tab-link').each(function (index, element) {
                $(this).removeClass('tab-active');
                if ($(this).attr('data-target') == target) {
                    $(this).addClass('tab-active');
                }
            });

            /* Hide all tab contents except for selected tab */
            $('.rocket-tab-content').each(function (index, element) {
                $(this).removeClass('tab-active');
                if (this.id == 'rocket-tab-' + target) {
                    $(this).addClass('tab-active');
                }
            });
        });
    });

    /* Rocket-tab left/right focus at low sizes */
    $('#rocket-switch-side').on('click', function (event) {
        $('.rocket-tab-content').each(function (index, element) {
            if ($(this).hasClass('rocket-left-focus')) {
                $(this).removeClass('rocket-left-focus');
                $(this).addClass('rocket-right-focus');
            }
            else {
                $(this).removeClass('rocket-right-focus');
                $(this).addClass('rocket-left-focus');
            }
        });
    });

    /* Smooth scrolling */
    $('header a[href*="#"]').click(function (event) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - (window.outerWidth > 765 ? $('header').height() : 0)
            }, 400, function() {
                did_scroll = false;
                forced_scroll = true;
                if (window.outerWidth <= 765) {
                    $('header').css('top', '-' + $('header').height() + 'px');
                }
            });
        }
    });

    /* lol copyright */
    $('#currentyear').text((new Date()).getFullYear()); //lol

    /* Gallery modal */
    $("#gallery-modal-content").on('click', function(event) {
        $("#gallery-modal-background").css('display', 'none');
     });

    $('.gallery-image').on('click', function(event) {
        url = $(this).css('background-image');
        url = /^url\(['"]?([^"]*)['"]?\)$/.exec(url)[1];
        url = url.replace("_thumb", "");
        $("#gallery-modal-content img").attr("src", url);
        $("#gallery-modal-background").css('display', 'block');
    });

    /* Hero resize */
    var vid = $('video');
    var vid_w_orig = 1920;
    var vid_h_orig = 1080;
  
    // re-scale image when viewport resizes
      $(window).resize(function(){
      
          // get the parent element size
          var container_w = vid.parent().width();
          var container_h = vid.parent().height();
      
          // use largest scale factor of horizontal/vertical
          var scale_w = container_w / vid_w_orig;
          var scale_h = container_h / vid_h_orig;
          var scale = scale_w > scale_h ? scale_w : scale_h;
      
          // scale the video
          vid.width(scale * vid_w_orig);
          vid.height(scale * vid_h_orig);
      
      });
    
    // trigger re-scale on pageload
      $(window).trigger('resize');
});
