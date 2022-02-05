// slide to
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

    // stick navigation for project sections to the top once scroll to
    $(window).load(function() {

        // check for height above the nav bar
        var aboveHeight = $('#above-nav').outerHeight();
        $(window).scroll(function() {

            if ($(window).scrollTop() > aboveHeight) {
                // stick it! 
                $('.project-nav').addClass('fixed').css('top', '0').next().css('padding-top', '60px');

            } else {
                // unstick it!
                $('.project-nav').removeClass('fixed').next()
                    .css('padding-top', '0');
            }
        });
    });

    // color the nav link of the current section when scrolling
    var sections = $('.nav-item'),
        nav = $('.project-nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function() {
        var cur_pos = $(this).scrollTop();

        sections.each(function() {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // color it when you click a link too
    nav.find('a').on('click', function() {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - nav_height
        }, 500);

        return false;
    });