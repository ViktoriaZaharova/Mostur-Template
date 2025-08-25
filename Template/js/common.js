$(document).ready(function () {
    $('.about-tour-slider').slick({
        slidesToShow: 1,
        dots: true,
        fade: true,
        infinite: false,
        appendArrows: '.about-tour-slider__nav',
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
    });

    $('.tours-card-slider').slick({
        slidesToShow: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.tour-slider-max').slick({
        slidesToShow: 1,
        arrows: true,
        fade: true,
        asNavFor: '.tour-slider-preview',
        prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>'
    });

    $('.tour-slider-preview').slick({
        slidesToShow: 6,
        arrows: false,
        focusOnSelect: true,
        asNavFor: '.tour-slider-max',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 490,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 2,
                }
            }

        ]
    });

    let homeSlider = $('.tour-slider-max');

    $('.counter-slide__default').text("/" + homeSlider.slick("getSlick").slideCount);

    homeSlider.on('afterChange', function(event, slick, currentSlide){
        $(".counter-slide__cp").text(currentSlide<10?`${currentSlide+1}`:currentSlide+1);
    });

});

$('.modal').on('shown.bs.modal', function (e) {
    $('.slick-slider').slick('setPosition');
});




// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.tours-section-slider:not(.slick-initialized)').slick({
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 3,
            arrows: false,
            variableWidth: true,
            autoplay: true,
            autoplaySpeed: 2000,
        });
    } else {
        $(".tours-section-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.popular-tours-slider').slick({
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});


$('.down').on("click", function () {
    let $input = $(this).parent().find('input');
    let count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
});
$('.up').on("click", function () {
    let $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
});

$('.btn-next-checkout').on('click', function (e) {
    e.preventDefault();
    $('.checkout-block__visible').fadeOut();
    $('.checkout-block__hidden').fadeIn();
});


$(document).ready(function () {
    if ($(window).width() > 576) {
        $(".datepicker").datepicker({
            numberOfMonths: 2,
            minDate: 0,
            autoclose: false,
        });
    } else {
        $(".datepicker").datepicker({
            numberOfMonths: 1,
            minDate: 0,
            autoclose: false,
        });

    }
});

$(document).on('click', '.dropdown-menu', function (e) {
    $(this).hasClass('show') && e.stopPropagation(); // This replace if conditional.
});

$(".dropdown-menu, #ui-datepicker-div").click(function (event) {
    event.stopPropagation();
});

// select
$('.js-example-basic-single').select2();
$('.select-city').select2({
    dropdownCssClass: "custom-dropdown"
});

$('[data-toggle="tooltip"]').tooltip();

$('.btn-burger').on('click', function () {
    $('.mobile-menu').fadeToggle();
});

$('.btn-close-menu').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.read-links').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.tour-details-info__box').find('.description-tour-text > p:hidden').slideDown();
    $(this).hide();
});