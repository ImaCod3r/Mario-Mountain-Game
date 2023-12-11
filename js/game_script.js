// 1. Elementos do DOM
const mario = document.querySelector('.mario');
const pedra = document.querySelector('.pedra');
const pontuacao = document.querySelector('.pontos');
const reiniciar = document.querySelector('.reiniciar');

// 2. Variaveis do jogo
var pontos = 0;
var perdeu = false;
var evento = 'keydown';
var jump_sound = new Audio('assets/sons/jump_sound.mp3');
var gameOver_sound = new Audio('assets/sons/gameOver.mp3')

// 3. Funcoes 

// 3.1 Funcao que adiciona um Salto ao player
const jump = () =>{
    
    jump_sound.play();
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
        
    if(window.innerWidth <= 750){
                
        if(posicaoPedra <= 35 && posicaoPedra > 0 && posicaoMario < 50){

            pedra.style.animation = 'none';
            pedra.style.left = `${posicaoPedra}px`;

            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoMario}px`;
            mario.src = 'assets/game-over.png';

            mario.style.width = '20px';
            mario.style.marginLeft = '35px';

            clearInterval(loop);
            perdeu = true;
            reiniciar.style.display = 'flex';
            gameOver_sound.play();
        }
    }
    else{
        if(posicaoPedra <= 70 && posicaoPedra > 0 && posicaoMario < 85){

            pedra.style.animation = 'none';
            pedra.style.left = `${posicaoPedra}px`;
        
            mario.style.animation = 'none';
            mario.style.bottom = `${posicaoMario}px`;
            mario.src = 'assets/game-over.png';

            mario.style.width = '50px';
            mario.style.marginLeft = '35px';

            clearInterval(loop);
            perdeu = true;
            reiniciar.style.display = 'flex';
            gameOver_sound.play();
        }
    }
},10);

// Funcao que atualiza a tela
function refresh(){
    location.reload(true);
}


// 4. Bloco condicional que verifica o tamanho da tela e muda o evento
const larguraTela = window.innerWidth;
if(larguraTela <= 1280){
        evento = 'touchstart';
}

// 5. Eventos do jogo
document.addEventListener(evento, jump);
