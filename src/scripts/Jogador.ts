class Jogador{
    private name: string;
    private simbol: number;

    constructor(name:string, simbol:number) {
        this.name=name;
        this.simbol=simbol;
    }

    public getName(){
        return this.name;
    }
    public getSimbol(){
        return this.simbol;
    }
}
export default Jogador;