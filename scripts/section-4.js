const slides4 = [...document.querySelector('.section-4__slider').children];
const input = document.querySelector('.section-4__range');

const getSlidesWidth = () => {
    let width = 0;
    slides4.forEach(slide => {
        width += slide.offsetWidth;
    });
    return width;
};

const slide = () => {
    const translate = (getSlidesWidth() * input.value / 100) / slides4.length;
    slides4.forEach(slide => {
        slide.style.transform = `translateX(-${translate}px)`;
    });
};

input.addEventListener('input', slide);