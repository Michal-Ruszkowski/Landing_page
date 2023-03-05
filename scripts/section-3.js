const dots = document.querySelectorAll('.section-3__dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        if (!dot.classList.contains('section-3__dot--active')) {
            changeDotsClass(index)
            scrollToSlide(index)
        }
    });
});

const changeDotsClass = index => {
    dots.forEach((dot, i) => {
        i === index ? dot.classList.add('section-3__dot--active') : dot.classList.remove('section-3__dot--active')
    })
}

const scrollToSlide = index => {
    const slides3 = document.querySelectorAll('.section-3__img');
    const slideWidth = slides3[0].clientWidth;
    slides3.forEach(slide => {
        slide.style.transform = `translateX(-${slideWidth * index}px)`;
    })
}