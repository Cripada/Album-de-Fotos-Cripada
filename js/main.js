document.addEventListener('DOMContentLoaded', () => {


    document.querySelector('.popup-img').style.display = 'none';
    document.querySelector('.popup-img').style.display = 'none';
    const elementosCasousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCasousel, {
        duration: 150,
        dist: -80,
        shift: 5,
        padding: 5,
        numVisible: 5,
        indicators: false,
        noWrap: true

    });
})

document.querySelectorAll('.carousel-item img').forEach(Image => {
    Image.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = Image.getAttribute('src');
    }
});

document.querySelector('.popup-img span').onclick = () => {
    document.querySelector('.popup-img').style.display = 'none';
}