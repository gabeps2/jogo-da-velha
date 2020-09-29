"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tabuleiro = /** @class */ (function () {
    function Tabuleiro() {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.gameState = 0;
    }
    Tabuleiro.prototype.setBoardValue = function (pos, value) {
        this.board[pos] = value;
    };
    Tabuleiro.prototype.getBoard = function () {
        return this.board;
    };
    Tabuleiro.prototype.setGameState = function (value) {
        this.gameState = value;
    };
    Tabuleiro.prototype.getGameState = function () {
        return this.gameState;
    };
    return Tabuleiro;
}());
exports.default = Tabuleiro;
