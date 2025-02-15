function showMessage() {
    document.querySelector('.message').style.display = 'block';
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.classList.add('heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.querySelector('.hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}
setInterval(createHeart, 300);