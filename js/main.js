filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all") c = "";
    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
};

$(document).ready(function() {
    //fadeMenu
    var $hide = $('.nav__list');
    var $linck = $('.nav__link');
    $hide.hide().slideDown(800);
    $linck.hide().each(function(index) {
        $(this).delay(index * 500).fadeIn(500, function() {
            $(this).delay(1000).addClass('active')
        });
    });

    //end
    // logo fixed
    $(function(scroll) {
        var scrollLogo = scroll('.foinni');
        scroll(window).scroll(function() {
            scrollLogo['fade' + (scroll(this).scrollTop() > 500 ? 'Out' : 'In')](800);
        })
    });
    //end
    //textAnimated
    $(function() {
            $('.text').textillate({
                loop: true,
                minDisplayTime: 500,
                initialDelay: 0,
                autoStart: true,
                inEffects: [],
                outEffects: ['fadeOutUpBig'],
                in: {
                    effect: 'fadeInUpBig',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: false
                },
                out: {
                    effect: 'fadeOutUpBig',
                    delayScale: 1.5,
                    delay: 50,
                    sync: false,
                    shuffle: false,
                }
            });
        })
        //end
    $(".button").click(function() {
        $(".hidden").fadeToggle(2000);
    });


    //animate

    $(".info_btn").click(function(event) {
        $(event.currentTarget).siblings('.plans_info').slideToggle(1000, 'linear', function() {
            $(event.currentTarget).siblings('.close').delay(500).show();
            $(this).addClass('click');
            $(this).next().addClass('click').text('Open');
        });
    });
    const $closeOrder = $('.close');
    const $btnOpen = $('.info_btn');
    $closeOrder.on('click', () => {
        $(event.currentTarget).addClass('closeOut').fadeOut(500);
        $btnOpen.text('Order Now');
        $(event.currentTarget).siblings('.plans_info').fadeOut(800);
    })

    $('.form_button').mouseenter(function() {
        $('.form_area').slideToggle(2000);
    });
    $(".footer_text").click(function() {
        $(this).animate({
            opacity: 0.4,
            fontSize: 20,
            duration: 2000,



        });
    });
});