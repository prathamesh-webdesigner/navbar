console.log('attached');

$(document).ready(function (e) {
    $(".sports_page").hover(function (e) {
        // $(this).find('a').css("border-bottom", "5px solid #f9a22b");
        $(this).find('.Sports_related_submenu').show(50);
        // $('.Sports_related_submenu').show();
    }, function (e) {
        // $(this).find('a').css("border-bottom", "none");
        $(this).find('.Sports_related_submenu').hide(20);
    });
});

// checkbox Polls 
function cbChange(obj) {
    var cbs = document.getElementsByClassName("cb");
    for (var i = 0; i < cbs.length; i++) {
        cbs[i].checked = false;
    }
    obj.checked = true;
}

// owl carousel 
$('.sliding_blog_cards').owlCarousel({
    stagePadding: 100,
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
            stagePadding: 40,
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// navbar mobile 

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }