"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Buttons
var changeStyleButtons = function (element) {
    element.style.backgroundColor = '#5100FF';
};
var buttonPvP = document.getElementById('pvp');
buttonPvP === null || buttonPvP === void 0 ? void 0 : buttonPvP.addEventListener('click', function () {
});
//Tabuleiro
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 1; //Define o turno de cada jogador - 0 = X / 1 = O
var changeStyle = function (area) {
    var _a, _b;
    var xColor = '#0E9DDF';
    var oColor = '#DF0E0E';
    var pos = "pos" + area;
    if (tabuleiro[area - 1] == 0) {
        tabuleiro[area - 1] = 1;
        if (turn == 0) {
            (_a = document.getElementById(pos)) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "background-image: url(\"../src/images/circleicon.png\"); \n            background-color: " + xColor);
            turn = 1;
        }
        else {
            (_b = document.getElementById(pos)) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "background-image: url(\"../src/images/xicon.png\"); \n            background-color: " + oColor);
            turn = 0;
        }
    }
};
var pos1 = document.getElementById('pos1');
pos1 === null || pos1 === void 0 ? void 0 : pos1.addEventListener('click', function () { return changeStyle(1); });
var pos2 = document.getElementById('pos2');
pos2 === null || pos2 === void 0 ? void 0 : pos2.addEventListener('click', function () { return changeStyle(2); });
var pos3 = document.getElementById('pos3');
pos3 === null || pos3 === void 0 ? void 0 : pos3.addEventListener('click', function () { return changeStyle(3); });
var pos4 = document.getElementById('pos4');
pos4 === null || pos4 === void 0 ? void 0 : pos4.addEventListener('click', function () { return changeStyle(4); });
var pos5 = document.getElementById('pos5');
pos5 === null || pos5 === void 0 ? void 0 : pos5.addEventListener('click', function () { return changeStyle(5); });
var pos6 = document.getElementById('pos6');
pos6 === null || pos6 === void 0 ? void 0 : pos6.addEventListener('click', function () { return changeStyle(6); });
var pos7 = document.getElementById('pos7');
pos7 === null || pos7 === void 0 ? void 0 : pos7.addEventListener('click', function () { return changeStyle(7); });
var pos8 = document.getElementById('pos8');
pos8 === null || pos8 === void 0 ? void 0 : pos8.addEventListener('click', function () { return changeStyle(8); });
var pos9 = document.getElementById('pos9');
pos9 === null || pos9 === void 0 ? void 0 : pos9.addEventListener('click', function () { return changeStyle(9); });
