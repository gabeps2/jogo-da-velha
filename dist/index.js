"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Buttons
var changeStyleButtons = function (element) {
    element.style.backgroundColor = '#5100FF';
};
var buttonPvP = document.getElementById('pvp');
buttonPvP === null || buttonPvP === void 0 ? void 0 : buttonPvP.addEventListener('click', function () {
});
//Elements HTML
var body = document.getElementById('body');
var round = document.getElementById('round-now');
//Tabuleiro
var tabuleiro = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
//Tabuleiro com valor 0 = posição vazia
//Tabuleiro com valor 1 = posição marcada com X
//Tabuleiro com valor 2 = posição marcada com O
var turn = 0; //Define o turno de cada jogador - 0 = X / 1 = O
var counter = [0, 0]; //Registra o número de jogadas de cada player
var playerX = 0; //Identificação de cada player
var playerO = 1;
var checkVitory = function (player) {
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
            console.log("valor de i: " + i);
            console.log("valor de j: " + j);
            if (count == 3) {
                console.log("Victory!");
                return 2;
            }
        }
        count = 0;
        for (var j = 0; j < 3; j++) {
            if (tabuleiro[j][i] == player) {
                count++;
            }
            if (count == 3) {
                console.log("Victory! 2");
                return 2;
            }
        }
    }
};
var changeStyle = function (line, column, id) {
    var _a, _b;
    var xColor = '#292C31';
    var oColor = '#ff4655';
    var pos = "pos" + id;
    if (tabuleiro[line][column] == 0) {
        if (turn == 0) {
            tabuleiro[line][column] = 2; //Marca a posição com um X
            counter[0] += 1;
            checkVitory(playerX);
            console.log(tabuleiro);
            (_a = document.getElementById(pos)) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "background-image: url(\"../src/images/xicon-red.png\"); \n            background-color: " + xColor);
            body === null || body === void 0 ? void 0 : body.setAttribute("style", '--selected-area-img: url("../src/images/circleicon.png")');
            round === null || round === void 0 ? void 0 : round.setAttribute("style", 'background-image: url("../src/images/circleicon.png"); background-color: #ff4655');
            turn = 1;
        }
        else {
            tabuleiro[line][column] = 1; //Marca a posição com um O
            counter[1] += 1;
            checkVitory(playerO);
            console.log(tabuleiro);
            (_b = document.getElementById(pos)) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "background-image: url(\"../src/images/circleicon-dark.png\"); \n            background-color: " + oColor);
            body === null || body === void 0 ? void 0 : body.setAttribute("style", '--selected-area-img: url("../src/images/xicon.png")');
            round === null || round === void 0 ? void 0 : round.setAttribute("style", 'background-image: url("../src/images/xicon.png"); background-color: #292C31');
            turn = 0;
        }
    }
};
var getNumRandom = function () {
    var numRandom = Math.random() * (9 - 0) + 0;
    return (Math.floor(numRandom));
};
var randomPlay = function () {
    var vetRandomNumbers = new Array(9);
    var contains;
    do {
        var numRandom = getNumRandom();
        for (var i = 0; i < 9; i++) {
            if (numRandom == vetRandomNumbers[i])
                contains = true;
        }
    } while (contains);
};
//Verifica as posições
var pos1 = document.getElementById('pos1');
pos1 === null || pos1 === void 0 ? void 0 : pos1.addEventListener('click', function () { return changeStyle(0, 0, 1); });
var pos2 = document.getElementById('pos2');
pos2 === null || pos2 === void 0 ? void 0 : pos2.addEventListener('click', function () { return changeStyle(0, 1, 2); });
var pos3 = document.getElementById('pos3');
pos3 === null || pos3 === void 0 ? void 0 : pos3.addEventListener('click', function () { return changeStyle(0, 2, 3); });
var pos4 = document.getElementById('pos4');
pos4 === null || pos4 === void 0 ? void 0 : pos4.addEventListener('click', function () { return changeStyle(1, 0, 4); });
var pos5 = document.getElementById('pos5');
pos5 === null || pos5 === void 0 ? void 0 : pos5.addEventListener('click', function () { return changeStyle(1, 1, 5); });
var pos6 = document.getElementById('pos6');
pos6 === null || pos6 === void 0 ? void 0 : pos6.addEventListener('click', function () { return changeStyle(1, 2, 6); });
var pos7 = document.getElementById('pos7');
pos7 === null || pos7 === void 0 ? void 0 : pos7.addEventListener('click', function () { return changeStyle(2, 0, 7); });
var pos8 = document.getElementById('pos8');
pos8 === null || pos8 === void 0 ? void 0 : pos8.addEventListener('click', function () { return changeStyle(2, 1, 8); });
var pos9 = document.getElementById('pos9');
pos9 === null || pos9 === void 0 ? void 0 : pos9.addEventListener('click', function () { return changeStyle(2, 2, 9); });
