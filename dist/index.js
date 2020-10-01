"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var buttonPlay = document.querySelector('#play');
buttonPlay === null || buttonPlay === void 0 ? void 0 : buttonPlay.addEventListener("click", play);
function play() {
    console.log("Play!");
}
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var turn = 0;
var changeColor = function (pos) {
    var _a, _b, _c, _d;
    var xColor = '#00ff00';
    var oColor = '#f3880d';
    if (turn == 0) {
        (_a = document.getElementById('pos0')) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "background-color: " + xColor);
        (_b = document.getElementById('pos0')) === null || _b === void 0 ? void 0 : _b.setAttribute("style", "background-image: url(\"../src/images/circle.png\");')");
        turn = 1;
    }
    else {
        (_c = document.getElementById('pos1')) === null || _c === void 0 ? void 0 : _c.setAttribute("style", "background-color: " + oColor);
        (_d = document.getElementById('pos1')) === null || _d === void 0 ? void 0 : _d.setAttribute("style", "background-image: url(\"../src/images/x.png\");')");
        turn = 0;
    }
    tabuleiro[0] = 1;
    console.log(tabuleiro);
};
var pos0 = document.getElementById('pos0');
pos0 === null || pos0 === void 0 ? void 0 : pos0.addEventListener('click', changeColor);
var pos1 = document.getElementById('pos1');
pos1 === null || pos1 === void 0 ? void 0 : pos1.addEventListener('click', changeColor);
var pos2 = document.getElementById('pos2');
var pos3 = document.getElementById('pos3');
var pos4 = document.getElementById('pos4');
var pos5 = document.getElementById('pos5');
var pos6 = document.getElementById('pos6');
var pos7 = document.getElementById('pos7');
var pos8 = document.getElementById('pos8');
