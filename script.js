document.getElementById("up").addEventListener("click", () => scrollToTop());
document.getElementById("down").addEventListener("click", () => scrollToDown());

function scrollToTop() {

    window.scrollBy(0, -30);
    if (window.pageYOffset !== 0) window.requestAnimationFrame(scrollToTop);

}

function scrollToDown() {
    let previousScroll = window.pageYOffset;


    window.scrollBy(0, 30);
    if (window.pageYOffset > previousScroll) {

        window.requestAnimationFrame(scrollToDown);
    }


}