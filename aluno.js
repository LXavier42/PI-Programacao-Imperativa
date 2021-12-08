class aluno {
    Nome;
    quantidadeDeFaltas;
    Notas;
    constructor(Nome,quantidadeDeFaltas,Notas){
        this.Nome = Nome;
        this.quantidadeDeFaltas = quantidadeDeFaltas;
        this.Notas = Notas;
    }

    calcularMedia(){
    const soma = this.Notas.reduce((notas,media)=> {
        return notas + media ;
    },0);
    const media = soma / this.Notas.length;
    return media;
    }

    faltas(){
    this.quantidadeDeFaltas++;
    return this.quantidadeDeFaltas;
    }
}
module.exports = aluno;