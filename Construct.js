let musica = document.querySelector('audio');

document.querySelector('.play-button').addEventListener('click', tocarMusica);

document.querySelector('.pause-button').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', updateBar)

function tocarMusica(){
    musica.play();
    document.querySelector('.pause-button').style.display = 'block';
    document.querySelector('.play-button').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector(' .pause-button').style.display = 'none';
    document.querySelector('.play-button').style.display = 'block';
}

function updateBar() {
    let Bar = document.querySelector('progress');
    Bar.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%' ;
}