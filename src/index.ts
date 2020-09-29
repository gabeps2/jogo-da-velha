import Jogador from './scripts/Jogador'
import Tabuleiro from './scripts/Tabuleiro'

const buttonPlay = document.querySelector("button");
buttonPlay?.addEventListener("click", play);

function play(this:HTMLElement){
    console.log("Play!");
}


