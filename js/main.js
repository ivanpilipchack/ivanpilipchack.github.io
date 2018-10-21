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
    var $readMore = $('.button');
    var $openMore = $('.more');
    $readMore.on('click', () => {
        $openMore.slideToggle(() => {
            $readMore.toggleClass('addButton');
        });
    })


    //animate

    $(".info_btn").click(function(event) {
        $(event.currentTarget).siblings('.plans_info').slideDown(1000, 'linear', function() {
            $(event.currentTarget).siblings('.conect_plans')
                .addClass('addBorder')
                .html('<img class="good" src="images/good.png">');
            //$('.good').addClass('addRotate');
            $(event.currentTarget).siblings('.close').delay(500).show();
            $(this).addClass('click');
            $(this).next().addClass('click').text('Open');
        });
    });
    const $closeOrder = $('.close');
    const $btnOpen = $('.info_btn');



    $closeOrder.on('click', (event) => {
        $(event.currentTarget).addClass('closeOut').fadeOut(500);
        $(event.currentTarget).siblings('.conect_plans').removeClass('addBorder');
        $btnOpen.text('Order Now');
        $(event.currentTarget).siblings('.plans_info').fadeOut(800);
    });
    const $first = $('.first');
    const $left = $('.left');
    const $right = $('.right');
    const $last = $('.last')
    $first.on('click', () => {
        $('.first_number').html('<h3 class="plans">20/m</h3>')
    });
    $left.on('click', () => {
        $('.number_center').html('<h3 class="plans">40/m</h3>')
    });
    $right.on('click', () => {
        $('.number_right').html('<h3 class="plans">80/m</h3>')
    });
    $last.on('click', () => {
        $('.number_last').html('<h3 class="plans">120/m</h3>')
    });
    //select menu
    const $basic = $('.basic');
    const $standart = $('.standart');
    const $business = $('.business');
    const $premium = $('.premium');

    $basic.on('click', () => {
        $('.first_number').addClass('addSelect');
    });
    $standart.on('click', () => {
        $('.first_number').removeClass('addSelect');
        $('.number_center').addClass('addSelect');
    });
    $business.on('click', () => {
        $('.number_center').removeClass('addSelect');
        $('.number_right').addClass('addSelect');
    });
    $premium.on('click', () => {
        $('.number_right').removeClass('addSelect');
        $('.number_last').addClass('addSelect');
    });
    $basic.on('click', () => {
        $('.start').animate({
            marginTop: '3px',
            fontSize: '46px'
        });
        $basic.on('mouseleave', () => {
            $('.start').animate({
                marginTop: '22px',
                fontSize: '36px'
            })
        })
    })
    $standart.on('click', () => {
        $('.min').animate({
            marginTop: '3px',
            fontSize: '46px'
        });
        $standart.on('mouseleave', () => {
            $('.min').animate({
                marginTop: '22px',
                fontSize: '36px'
            })
        })
    })
    $business.on('click', () => {
        $('.max').animate({
            marginTop: '3px',
            fontSize: '46px'
        });
        $business.on('mouseleave', () => {
            $('.max').animate({
                marginTop: '22px',
                fontSize: '36px'
            })
        })
    })
    $premium.on('click', () => {
        $('.end').animate({
            marginTop: '3px',
            fontSize: '46px'
        });
        $premium.on('mouseleave', () => {
            $('.end').animate({
                marginTop: '22px',
                fontSize: '36px'
            })
        })
    })


    //end

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