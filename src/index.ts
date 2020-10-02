import Jogador from './scripts/Jogador'
import Tabuleiro from './scripts/Tabuleiro'



//Buttons
const changeStyleButtons = (element:HTMLElement) =>{
    element.style.backgroundColor = '#5100FF';
}

var buttonPvP = document.getElementById('pvp');
buttonPvP?.addEventListener('click', () =>{

})


//Tabuleiro
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0]

var turn = 1; //Define o turno de cada jogador - 0 = X / 1 = O

const changeStyle = (area: number) => {
    var xColor = '#0E9DDF'
    var oColor = '#DF0E0E'

    var pos = "pos" + area;

    if (tabuleiro[area - 1] == 0) {
        tabuleiro[area - 1] = 1;

        if (turn == 0) {
            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/circleicon.png"); 
            background-color: ${xColor}`);
            turn = 1;
        } else {
            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/xicon.png"); 
            background-color: ${oColor}`);
            turn = 0;
        }
    }
}

var pos1 = document.getElementById('pos1')
pos1?.addEventListener('click', () => changeStyle(1))
var pos2 = document.getElementById('pos2')
pos2?.addEventListener('click', () => changeStyle(2))
var pos3 = document.getElementById('pos3')
pos3?.addEventListener('click', () => changeStyle(3))
var pos4 = document.getElementById('pos4')
pos4?.addEventListener('click', () => changeStyle(4))
var pos5 = document.getElementById('pos5')
pos5?.addEventListener('click', () => changeStyle(5))
var pos6 = document.getElementById('pos6')
pos6?.addEventListener('click', () => changeStyle(6))
var pos7 = document.getElementById('pos7')
pos7?.addEventListener('click', () => changeStyle(7))
var pos8 = document.getElementById('pos8')
pos8?.addEventListener('click', () => changeStyle(8))
var pos9 = document.getElementById('pos9')
pos9?.addEventListener('click', () => changeStyle(9))






