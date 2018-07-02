$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    new WOW().init();
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

    //Mouse hover open dropdown

    $('.navbar ul li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(300);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(300);
    });

    $('.carousel').carousel({
        interval: 5000
    });

    //Dynamic width set to height.

    // highest form height
    // var maxHeight = Math.max.apply(null, $('.home-ch-card .card').map(function() {
    //     return $(this).outerHeight(true);
    // }).get());
    // $('.home-ch-card .card').css('height', maxHeight);


    // Dynamic hight and width middle find and apply to div
    $("#view-more-scroll").click(function() {
        $('html,body').animate({
                scrollTop: $("#about-challenge-home").offset().top
            },
            'slow');
    });

    jQuery.fn.center = function(parent) {
        if (parent) {
            parent = this.parent();
        } else {
            parent = window;
        }
        this.css({
            "position": "absolute",
            "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
            "left": ((($(parent).width() - this.outerWidth()) / 2) + $(parent).scrollTop() + "px")
        });
        return this;
    }
    $("#banner-content-wrapper:nth-child(1)").center(true);
    $("#banner-content-wrapper:nth-child(1)").center(true);

    // footer
    var max_width;
    if (Modernizr.mq('(max-width: 0px)')) {
        // Browsers that support media queries
        max_width = function(width) {
            return Modernizr.mq('(min-width: ' + width + 'px)');
        };
    } else {
        max_width = function(width) {
            return $(window).width() <= width;
        };
    }

    var resize = function() {
        if (max_width(480)) {
            $('#copyright').appendTo('#copyright-mobile');
        }
    };
    $(window).resize(resize);
    resize();


    //Keep selected tab on page refresh

    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
        localStorage.setItem('activeTab', $(e.target).attr('href'));
    });
    var activeTab = localStorage.getItem('activeTab');
    console.log(activeTab);
    if (activeTab) {
        $('a[href="' + activeTab + '"]').tab('show');
    }

});


// Html page and common page include

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
};



// Datatabel in init
$(document).ready(function() {

    var worklisttbl = $('#worklist');
    worklisttbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var participatedtbl = $('#participated');
    participatedtbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var groupctbl = $('#groupctbl');
    groupctbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var chlginvite = $('#chlg-invite');
    chlginvite.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var grpinvitetbl = $('#groupinvitations');
    grpinvitetbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var teaminvitetbl = $('#teaminvitations');
    teaminvitetbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var chlginvitesend = $('#chlg-invite-send');
    chlginvitesend.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var grpinvitetbl = $('#groupinvitations-send');
    grpinvitetbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var teaminvitesendtbl = $('#teaminvitations-send');
    teaminvitesendtbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

    var leaderBoardtbl = $('#leaderBoard');
    leaderBoardtbl.dataTable({
        'bPaginate': false,
        'bLengthChange': false,
        'lengthMenu': false,
        'searching': false,
        'responsive': true,
        'autoWidth': true,
    });

    var mainleaderBoardtbl = $('#mainleaderBoard');
    mainleaderBoardtbl.dataTable({
        'bPaginate': true,
        'bLengthChange': true,
        'lengthMenu': [10, 20, 30, 40, 50],
        'searching': true,
        'responsive': true,
        'autoWidth': true,
    });

});
