const aluno = require("./aluno");
const listaEstudantes = require("./Estudantes");
const Curso = {
    listaEstudantes: listaEstudantes,
    nomeDoCurso: "Certified tech developer",
    notaAprovação: 8,
    faltasMaximas: 2,
    adicionarAluno: function(alunoNovo){
        const Estudantes = this.listaEstudantes;
        const novalistaalunos = [];
        Estudantes.forEach(function(alunosAntigos) {
            novalistaalunos.push(alunosAntigos);
        });
        novalistaalunos.push(alunoNovo);
        this.listaEstudantes = novalistaalunos;
        return novalistaalunos;
    },
    passouNaMateria: function(aluno){
        const media = aluno.calcularMedia();
        const faltas = aluno.quantidadeDeFaltas;
        const faltasMaximas = this.faltasMaximas;
        const notaAprovação = this.notaAprovação;

        if(faltas > faltasMaximas) return false;

        if(media < notaAprovação) return false;

        if(faltas === faltasMaximas) {
            if(media >=(notaAprovação * 1.1)){
                return true;
            }
            return false;
        }
        return true;
    },
    listaDeaprovados: function() {
        const Estudantes = this.listaEstudantes;
        const aprovados = [];
        Estudantes.forEach(function(aluno) {
            aprovados.push(curso.passouNamateria(aluno))
        });
        return aprovados;
    },
}
module.exports = Curso;