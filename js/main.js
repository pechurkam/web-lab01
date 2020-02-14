$(document).ready(function () {
    var menuItem = $(".menuItem");
    menuItem.each(function () {
        $(this).click(function () {
            $("#btnClose").click();
        });
    });

    window.onscroll = function() {myFunction()};
    var header = document.getElementById("sectionNav");
    var sticky = header.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }

    $('.owl-carousel').owlCarousel({
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            768: {
                items: 2,
                nav: true
            },
            1024: {
                items: 3,
                nav: true
            }
        }
        // items : 3,
        // itemsDesktop : [1199,3],
        // itemsDesktopSmall : [979,3]
    })
});