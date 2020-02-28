const $slider = $(".content");
$slider
    .on('init', () => {
        mouseWheel($slider)
    })
    .slick({
        arrows: false,
        dots: true,
        vertical: true,
        verticalSwiping: true,
        infinite: false,
        dotsClass: 'slick-dotss',

    });
function mouseWheel($slider) {
    $(window).on('wheel', { $slider: $slider }, mouseWheelHandler)
}
function mouseWheelHandler(event) {
    event.preventDefault()
    const $slider = event.data.$slider
    const delta = event.originalEvent.deltaY
    if (delta > 0) {
        $slider.slick('slickPrev')
    }
    else {
        $slider.slick('slickNext')
    }
}