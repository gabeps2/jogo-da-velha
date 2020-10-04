import Jogador from './scripts/Jogador'
import Tabuleiro from './scripts/Tabuleiro'
import { Promise } from 'es6-promise';

interface Positions {
    line: number;
    column: number;
}
//Buttons
const changeStyleButtons = (element: HTMLElement) => {
    element.style.backgroundColor = '#5100FF';
}

var gamemode: number; //0 = PvP, 1 = PvM, 2 = MvM
gamemode = 1
var buttonPvP = document.getElementById('pvp');
buttonPvP?.addEventListener('click', () => {
    gamemode = 0;
    buttonPvP?.setAttribute("class", "black")
    buttonPvM?.setAttribute("class", "white")
    buttonMvM?.setAttribute("class", "white")
    console.log(gamemode)
})

var buttonPvM = document.getElementById('pvm');
buttonPvM?.setAttribute("class", "black")
buttonPvM?.addEventListener('click', () => {
    buttonPvP?.setAttribute("class", "white")
    buttonPvM?.setAttribute("class", "black")
    buttonMvM?.setAttribute("class", "white")
    gamemode = 1;
    console.log(gamemode)
})

var buttonMvM = document.getElementById('mvm');
buttonMvM?.addEventListener('click', () => {
    buttonPvP?.setAttribute("class", "white")
    buttonPvM?.setAttribute("class", "white")
    buttonMvM?.setAttribute("class", "black")
    gamemode = 2;
    randomPlay();
    console.log(gamemode)
})

//Elements HTML
var body = document.getElementById('body');
var round = document.getElementById('round-now');
var roundText = document.getElementById('round-text')

//Tabuleiro
var tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var vetRandomNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]//Armazena as casas livres

//Tabuleiro com valor 0 = posição vazia
//Tabuleiro com valor 1 = posição marcada com X
//Tabuleiro com valor 2 = posição marcada com O

var numFreePositions = tabuleiro.length; //Número de posições livres no tabuleiro

var turn = 0; //Define o turno de cada jogador - 0 = X / 1 = O

var counter = [0, 0]; //Registra o número de jogadas de cada player

const playerX = 0; //Identificação de cada player
const playerO = 1;

var insufficientPlays = 0.
var gameInProgress = 1;
var victory = 2;
var tie = 3

const checkVitory = (player: number): number => {

    //Returns: 0 = insufficient plays
    //         1 = game in progess
    //         2 = victory
    //         3 = tie (empate)

    if (counter[player] < 3)
        return 0;

    for (var i = 0; i < 3; i++) { //Verifica as linhas
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
        for (var j = 0; j < 3; j++) { //Verifica as colunas
            if (tabuleiro[j][i] == player) {
                count++;
            }
            if (count == 3) {
                console.log("Victory! 2")
                roundText?.setAttribute('content', "text!!!!")
                return 2;
            }
        }
    }
    count = 0;
    for (var i = 0; i < 3; i++) {//Verifica a diagonal principal
        var j = i;
        if (tabuleiro[i][j] == player) {
            count++
        }
        if (count == 3) {
            console.log("Victory! 3")
            return 2;
        }
    }
    if (counter[0] + counter[1] == 9)//Verifica se houve empate
        return 3;

    return 1;
}

const changeStyle = (line: number, column: number, id: number) => {
    var xColor = '#292C31'
    var oColor = '#ff4655'

    var pos = "pos" + id;

    if (tabuleiro[line][column] == 0) {
        if (turn == 0) {
            tabuleiro[line][column] = 2;//Marca a posição com um X
            counter[playerX] += 1;

            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/xicon-red.png"); 
            background-color: ${xColor}`);

            vetRandomNumber[id] = 1;

            if (checkVitory(2) == victory) {
                round?.setAttribute("style", 'background-color: #42f563; background-image: url("../src/images/xicon-dark.png")')
                roundText?.setAttribute("data-content", "Victory!");
                return true;
            }
            else if (checkVitory(2) == tie) {
                round?.setAttribute("style", 'background-color: #ffea00; background-image: url("../src/images/r2d2.png")')
                roundText?.setAttribute("data-content", "Empate!");
                return true;
            }

            body?.setAttribute("style", '--selected-area-img: url("../src/images/circleicon.png")')

            round?.setAttribute("style", 'background-image: url("../src/images/circleicon.png"); background-color: #ff4655');

            turn = 1;
            if (gamemode == 1 || gamemode == 2) {
                setTimeout(() => {
                    randomPlay();
                }, 1000);
            }


        } else {
            tabuleiro[line][column] = 1;//Marca a posição com um O
            counter[playerO] += 1;

            document.getElementById(pos)?.setAttribute("style",
                `background-image: url("../src/images/circleicon-dark.png"); 
            background-color: ${oColor}`);

            vetRandomNumber[id] = 1;

            if (checkVitory(1) == victory) {
                round?.setAttribute("style", 'background-color: #42f563; background-image: url("../src/images/circleicon-dark.png")')
                roundText?.setAttribute("data-content", "Victory!");
                return true;
            }
            else if (checkVitory(1) == tie) {
                round?.setAttribute("style", 'background-color: #ffea00; background-image: url("../src/images/r2d2.png")')
                roundText?.setAttribute("data-content", "Empate!");
                return true;
            }

            body?.setAttribute("style", '--selected-area-img: url("../src/images/xicon.png")')

            round?.setAttribute("style", 'background-image: url("../src/images/xicon.png"); background-color: #292C31');

            turn = 0;
            if (gamemode == 2) {
                setTimeout(() => {
                    randomPlay();
                }, 1000);

            }
        }
    }
}

const getNumRandom = () => {
    const numRandom = Math.random() * (10 - 1) + 1;

    console.log(Math.floor(numRandom));
    return (Math.floor(numRandom));
}

const randomPlay = () => {

    var contains = true;

    do {
        var numRandom = getNumRandom();
        if (vetRandomNumber[numRandom] == 0)
            contains = false;
    } while (contains)

    numFreePositions--;

    const positions: Positions[] = new Array(10);
    positions[1] = { line: 0, column: 0 }
    positions[2] = { line: 0, column: 1 }
    positions[3] = { line: 0, column: 2 }
    positions[4] = { line: 1, column: 0 }
    positions[5] = { line: 1, column: 1 }
    positions[6] = { line: 1, column: 2 }
    positions[7] = { line: 2, column: 0 }
    positions[8] = { line: 2, column: 1 }
    positions[9] = { line: 2, column: 2 }

    var numRep = 1;
    if (numRep = 1) {
        changeStyle(positions[numRandom].line, positions[numRandom].column, numRandom);
        numRep = 0;
    }
}




//Verifica os eventos nas posições
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






