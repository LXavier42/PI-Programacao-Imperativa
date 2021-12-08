const Aluno = require("./aluno");
const listaEstudantes = [];
const Livia= new Aluno("Livia Maria", 0, [8,5,9,0]);
Livia.faltas();
const Anderson = new Aluno("Anderson Luis", 0, [2,5,8,9]);
Anderson.faltas();
const Neusa = new Aluno("Neusa Maria", 2, [9,5,8,8.5]);
listaEstudantes.push(Livia,Anderson,Neusa);
module.exports=listaEstudantes;