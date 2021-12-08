const curso = require('./curso');
const Aluno = require("./aluno");
const Joao = new Aluno("Joao victor", 2, [8,6,10,5]);
Joao.faltas();
curso.adicionarAluno(Joao);
const listaEstudantes = curso.listaEstudantes;

// console.log(listaEstudantes);
listaEstudantes.forEach((aluno) => {
    console.log("Aluno:");
    console.log(aluno.Nome);
    console.log("Notas: "+aluno.Notas);
    console.log("Média: "+aluno.calcularMedia());
    console.log("Faltas: "+aluno.quantidadeDeFaltas);
    console.log(`Passou na matéria: ${curso.passouNaMateria(aluno)}`);
    console.log("===========================")
})
