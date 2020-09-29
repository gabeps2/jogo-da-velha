"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Jogador = /** @class */ (function () {
    function Jogador(name, simbol) {
        this.name = name;
        this.simbol = simbol;
    }
    Jogador.prototype.getName = function () {
        return this.name;
    };
    Jogador.prototype.getSimbol = function () {
        return this.simbol;
    };
    return Jogador;
}());
exports.default = Jogador;
