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

    // $('.owl-carousel').owlCarousel({
    //     items : 4,
    //     itemsDesktop : [1199,3],
    //     itemsDesktopSmall : [979,3]
    // })
});