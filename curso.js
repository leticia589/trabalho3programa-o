
let nomeCurso = ""
let faltasMaximas = 5
let listEstudantes = []
let notaAprovacao = 5

function checkAlunoAprovado(aluno) {
    if (aluno.checkAprovacao(aluno, notaAprovacao) == true)
        return true
    else
        return false
}

function adicionarAluno(aluno) {

    aluno.aprovado = checkAlunoAprovado(aluno)

    listEstudantes.push(aluno)
}




