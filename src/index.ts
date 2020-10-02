import Jogador from './scripts/Jogador'
import Tabuleiro from './scripts/Tabuleiro'



//Buttons
const changeStyleButtons = (element: HTMLElement) => {
    element.style.backgroundColor = '#5100FF';
}

var buttonPvP = document.getElementById('pvp');
buttonPvP?.addEventListener('click', () => {

})


//Tabuleiro
var tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

//Tabuleiro com valor 0 = posição vazia
//Tabuleiro com valor 1 = posição marcada com X
//Tabuleiro com valor 2 = posição marcada com O

var turn = 1; //Define o turno de cada jogador - 0 = X / 1 = O

var counter = [0, 0]; //Registra o número de jogadas de cada player

const playerX = 0; //Identificação de cada player
const playerO = 1;

const checkVitory = (player: number) => {

    //Returns: 0 = insufficient plays
    //         1 = game in progess
    //         2 = victory
    //         3 = tie (empate)

    if (counter[player] < 3)
        return 0;
    for (var i = 0; i < 3; i++) {
        var count = 0;
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[i][j] == player)
                count++;
            if (count == 3) {
                console.log("Victory!")
                return 2;
            }
        }
        count = 0;
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[j][i] == player)
                count++;
            if (count == 3) {
                console.log("Victory! 2")
                return 2;
            }
        }
    }
}



const changeStyle = (line: number, column: number, id: number) => {
    var xColor = '#0E9DDF'
    var oColor = '#DF0E0E'

    var pos = "pos" + id;

    if (tabuleiro[line][column] == 0) {
        if (turn == 0) {
            tabuleiro[line][column] = 2;//Marca a posição com um X
            counter[0] += 1;

            checkVitory(playerX);
            console.log(tabuleiro);

            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/xicon.png"); 
            background-color: ${oColor}`);
            turn = 1;
        } else {
            tabuleiro[line][column] = 1;//Marca a posição com um O
            counter[1] += 1;

            checkVitory(playerO);
            console.log(tabuleiro);

            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/circleicon.png"); 
            background-color: ${xColor}`);
            turn = 0;
        }
    }
}

var pos1 = document.getElementById('pos1')
pos1?.addEventListener('click', () => changeStyle(0, 0, 1))
var pos2 = document.getElementById('pos2')
pos2?.addEventListener('click', () => changeStyle(0, 1, 2))
var pos3 = document.getElementById('pos3')
pos3?.addEventListener('click', () => changeStyle(0, 2, 3))
var pos4 = document.getElementById('pos4')
pos4?.addEventListener('click', () => changeStyle(1, 0, 4))
var pos5 = document.getElementById('pos5')
pos5?.addEventListener('click', () => changeStyle(1, 1, 5))
var pos6 = document.getElementById('pos6')
pos6?.addEventListener('click', () => changeStyle(1, 2, 6))
var pos7 = document.getElementById('pos7')
pos7?.addEventListener('click', () => changeStyle(2, 0, 7))
var pos8 = document.getElementById('pos8')
pos8?.addEventListener('click', () => changeStyle(2, 1, 8))
var pos9 = document.getElementById('pos9')
pos9?.addEventListener('click', () => changeStyle(2, 2, 9))






