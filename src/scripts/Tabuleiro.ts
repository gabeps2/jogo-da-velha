class Tabuleiro{
    private board: Number[];
    private gameState: Number;

    constructor(){
        this.board = [0,0,0,0,0,0,0,0,0];
        this.gameState = 0;
    }
    public setBoardValue(pos: number, value: number){
        this.board[pos] = value;
    }
    public getBoard(){
        return this.board;
    }
    public setGameState(value: number){
        this.gameState = value;
    }
    public getGameState(){
        return this.gameState;
    }
}

export default Tabuleiro;