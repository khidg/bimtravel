const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
};

ScrollReveal().reveal(".header-content p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header-content h1", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header-btn", {
    ...scrollRevealOption,
    delay: 1500,
});

ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    interval: 500,
});

const swiper = new swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
});
