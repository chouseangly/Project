
function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.round() * 1.5;
    let duration = Math.random() * 1;

    e.innerText = '🩷';
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDirection = 1 + duration + 's';

    setTimeout(function () {
        cloud.removeChild(e)
    }, 2000)
}

setInterval(function () {
    rain()
}, 20)