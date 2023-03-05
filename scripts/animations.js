const obj = [
    {
        element: document.querySelector('.checkeredContainer--animated'),
        animation: 'moveFromTopAndBounce',
    },
    {
        element: document.querySelector('.checkeredContainer__text--blue'),
        animation: 'moveTextFromRight',
    },
    {
        element: document.querySelector('.section-3__number--top'),
        animation: 'moveNumberFromDown',
    },
    {
        element: document.querySelector('.section-3__number--left'),
        animation: 'moveNumberFromRight',
    },
    {
        element: document.querySelector('.section-3__number--bottom'),
        animation: 'moveNumberFromLeft',
    },
]

const checkAnimation = () => {
    obj.forEach(el => {
        if (!el.element.classList.contains('animated') && isElementInView(el.element)) {
            el.element.classList.add(el.animation)
            el.element.classList.add('animated')
        } else  {
            el.element.style.animation = ''
        }
    })
}

const isElementInView = element => {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementBottom = rect.top + rect.height;
    return rect.top >= 0 && rect.top <= windowHeight || elementBottom >= 0 && elementBottom <= windowHeight;
}

window.addEventListener('load', checkAnimation)
window.addEventListener('scroll', checkAnimation)



const numbers = document.querySelectorAll('.section-3__number')
numbers.forEach(number => {
    number.addEventListener('mouseover', () => {
        number.style.animation = 'bounce .3s ease-out infinite'
        number.classList.forEach(class_ => {
            if (class_.startsWith('move')) {
                number.classList.remove(class_)
            }
        })
    })
    number.addEventListener('mouseout', () => {
        number.style.animationPlayState = 'paused'
    })
})
