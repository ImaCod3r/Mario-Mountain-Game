// 1. Elementos do DOM
const mario = document.querySelector('.mario');
const pedra = document.querySelector('.pedra');
const pontuacao = document.querySelector('.pontos');

// 2. Variaveis do jogo
var pontos = 0;
var perdeu = false; 
var evento = 'keydown';

// 3. Funcoes 

// 3.1 Funcao que adiciona um Salto ao player
const jump = () =>{

    mario.classList.add('jump');

    setTimeout(() =>{

        mario.classList.remove('jump')

    },500);
}

// 3.2 Funcao que atualiza os pontos
const atualizarPontuacao =setInterval(() =>{

    pontos += 1;
    pontuacao.textContent = pontos;
    if(perdeu){
        clearInterval(atualizarPontuacao);
    }

},50);

// 3.3 Funcao que verifica a colisao do player e da pedra
const loop = setInterval(() =>{

    const posicaoPedra = pedra.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px',' ');

    if(posicaoPedra <= 70 && posicaoPedra > 0 && posicaoMario < 90){

        pedra.style.animation = 'none';
        pedra.style.left = `${posicaoPedra}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = 'assets/game-over.png';
        mario.style.width = `${+window.getComputedStyle(mario).width.replace('px',' ')-20}px`;
        mario.style.marginLeft = '30px';

        clearInterval(loop);
        perdeu = true;
    }
},10);


// 4. Bloco condicional que verifica o tamanho da tela e muda o evento
const larguraTela = window.innerWidth;
if(larguraTela <= 1280){
        evento = 'touchstart';
}

// 5. Eventos do jogo
document.addEventListener(evento, jump);