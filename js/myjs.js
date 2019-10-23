$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });
});


// above is for the sliders
let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    // setTimeout(() => {
    //     span.classList.add('active');
    // }, 750 * (idx + 1))
});

// this is to only animate letters when on screen (never worked ...  look at this later)


$(document).ready(function () {
    $(".nav-link").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 800);
    });
});

// ease transition 



$("#invert").click(function () {
    $("html").toggleClass("inversed");
});

//   invert page colors ...??

// about me background

//end og background about me