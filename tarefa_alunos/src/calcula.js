class Aluno {
    constructor(nome,nota) {
        this.nome = nome;
        this.nota = nota;
    }
}
const alunos = [];
alunos.push(new Aluno ("joao",7))
alunos.push(new Aluno ("maria",5))
alunos.push(new Aluno ("paulo",6))
alunos.push(new Aluno ("pedro",3))
alunos.push(new Aluno ("julia",9))



const passou = alunos.filter(function(item){
    return item.nota >= 6
})
console.log(passou)
