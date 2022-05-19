let musicas = [
    //Anitta
    {titulo:'Envolver', artista:'Anitta', src:'sound/Anitta - Envolver (LetraLyrics).mp3', img:'img/Anitta-Envolver.jpg'},
    //Chefin
    {titulo:'Deus é o Meu Guia', artista:'Chefin', src:'sound/Chefin - Deus é o Meu Guia.mp3', img:'img/Chefin-Deus.jpg'},
    //Mc Cabelinho
    {titulo:'Eu Imagino Tu Dentro Da Minha Casa', artista:'Mc Cabelinho [ft.Gxlherm Beats]', src:'sound/Eu Imagino Tu Dentro Da Minha Casa (Ft. Mc Cabelinho) TRAP REMIX [prod. by Gxlherm Beats].mp3 ', img:'img/Eu imagino.jpg'},
    //Gloria Groove
    {titulo:'Vermelho', artista:'Gloria Groove', src:'sound/GLORIA GROOVE - VERMELHO (CLIPE OFICIAL).mp3', img:'img/Vermelho.jpg'},
    //Hugo e Guilherme
    {titulo:'Mal Feiro', artista:'Marília Mendonça [ft Hugo e Guilherme]', src:'sound/Hugo e Guilherme, Marília Mendonça - Mal Feito - DVD Próximo Passo.mp3', img:'img/Mal Feito MM.jpg'},
    //Legião Urbana
    {titulo:'Tempo Perdido', artista:'Legião Urbana', src:'sound/Legião Urbana - Tempo Perdido (ANICIO, DANNE  VIPP CODE Remix).mp3', img:'img/Tempo perdido.jpg'},
    //Matheus Fernandes e Xand Avião
    {titulo:'Balanõ da Rede', artista:'Matheus Fernande e Xand Avião', src:'sound/Matheus Fernandes e Xand Avião - Balanço da Rede (letra) (legendado) (lyrics).mp3', img:'img/Balanço da Rede.jpg'},
    //Matue Teto 
    {titulo:'Vampiro', artista:'Matue, Teto e Wiu Vampiro', src:'sound/Matue, Teto  Wiu - Vampiro (Letra).mp3', img:'img/Vampiro.jpg'},
    //MC sid
    {titulo:'Sitío do Tio Harry', artista:'Mc Sid e Nog', src:'sound/Mc Sid , Nog - Sítio do Tio Harry (Animação Oficial) - Prod Nine e Chiocki.mp3', img:'img/Sitío do tio harry.jpg'},
    //Zé Felipe
    {titulo:'Malvada', artista:'Zé Felipe', src:'sound/X2Download.com - Zé Felipe - Malvada (Videoclipe Oficial) (128 kbps).mp3 - Envolver (LetraLyrics).mp3', img:'img/Malvada.jpg'}

];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.End');

let imagem = document.querySelector('img');

let nomeMusica = document.querySelector('.Infos h2');

let nomeArtista = document.querySelector('.Infos i');

let line = document.getElementById

renderizarMusica(indexMusica);


document.querySelector('.play-button').addEventListener('click', tocarMusica);

document.querySelector('.pause-button').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', updateBar)

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0){
        indexMusica = 9;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 9){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segtomin(Math.floor(musica.duration));
    });
}

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

    let timecontrol = document.querySelector('.Begin');
    timecontrol.textContent = segtomin(Math.floor(musica.currentTime))
}

function segtomin(seg){
    let Minuto = Math.floor(seg / 60);
    let Segundo = seg % 60;
    if (Segundo < 10){
        Segundo = '0' + Segundo
    }

    return Minuto + ':' + Segundo
}

let volume = document.querySelector("#volumi");

volume.addEventListener("change", function(e) {
Audio.volume = e.currentTarget.value / 100;
})

