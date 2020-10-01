import Jogador from './scripts/Jogador'
import Tabuleiro from './scripts/Tabuleiro'

const buttonPlay = document.querySelector('#play')
buttonPlay?.addEventListener("click", play);

function play(this: HTMLElement) {
    console.log("Play!");
}

var tabuleiro = [0,0,0,0,0,0,0,0,0]

var turn = 0;

const changeColor = (pos:number)=> {
    var xColor = '#00ff00'
    var oColor = '#f3880d'

    if(turn == 0){
        document.getElementById('pos0')?.setAttribute("style", `background-color: ${xColor}`);
        document.getElementById('pos0')?.setAttribute("style", `background-image: url("../src/images/circle.png");')`);
        
        turn = 1;
    }else{
        document.getElementById('pos1')?.setAttribute("style", `background-color: ${oColor}`);
        document.getElementById('pos1')?.setAttribute("style", `background-image: url("../src/images/x.png");')`);
        turn = 0;
    }
    tabuleiro[0] = 1;
    console.log(tabuleiro)

}



var pos0 = document.getElementById('pos0')
pos0?.addEventListener('click', changeColor)
var pos1 = document.getElementById('pos1')
pos1?.addEventListener('click', changeColor)
var pos2 = document.getElementById('pos2')
var pos3 = document.getElementById('pos3')
var pos4 = document.getElementById('pos4')
var pos5 = document.getElementById('pos5')
var pos6 = document.getElementById('pos6')
var pos7 = document.getElementById('pos7')
var pos8 = document.getElementById('pos8')







