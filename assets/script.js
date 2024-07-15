
window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", () => {

    setScrollVar();
    setClientHeight();
    setClientWidth();

});

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percentScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    //console.log(percentScrolled*100);
    htmlElement.style.setProperty(
        "--scroll",
        (percentScrolled*100) + 0.000001
    );
}

function setClientHeight() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-height",
        htmlElement.clientHeight
    );
}

function setClientWidth() {
    const htmlElement = document.documentElement;
    htmlElement.style.setProperty(
        "--client-width",
        htmlElement.clientWidth
    );
    var s = htmlElement.style.getPropertyValue("--client-width");
    console.log(s);

    console.log("transform property", $('#sai-baba-img').css("transform"));
}

setScrollVar();
setClientHeight();
setClientWidth();

//------------------------------------------------------------------------------

//creating functionality for each of the a
$(document).ready(function() {

    console.log("page is ready");

    //home button link
    $('.home-button').on('click', function() {
        window.location.href = window.location.href.replace(/\/[^\/]*$/, '/index.html');
    });

    $('.about-us-button').on('click', function() {
        window.location.href = window.location.href.replace(/\/[^\/]*$/, '/about_us_copy.html');
    });

    $('.temple-services-button').on('click', function() {
        window.location.href = window.location.href.replace(/\/[^\/]*$/, '/temple_services_copy.html');
    });

    $('.events-button').on('click', function() {
        window.location.href = window.location.href.replace(/\/[^\/]*$/, '/events_copy.html');
    });

});