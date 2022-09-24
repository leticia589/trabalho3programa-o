
let nome = ""
let faltas = 0 
let notas = []
let aprovado = false    

function calculaMedia(aluno){
    let media = 0;
    aluno.notas.forEach( (nota) =>{
        media+=nota;
    })
    return media/aluno.notas.length;
}

function checkAprovacao(aluno, notaMedia, faltasMaximas){
    if(calculaMedia(aluno) > notaMedia && aluno.faltas < faltasMaximas>= this.notaDeAprovacao*0.10){
        
        
        console.log("Aluno Aprovado")
        return true;
    }else{
        
        console.log("Aluno reprovado")
        return false;
    }
}
function faltas(aluno){
    aluno.faltas++
}

let aluno1 = {
    nome:"Test",
    faltas:0,
    notas: [4,2,6,2],
}

let media = calculaMedia(aluno1);
let aprovacao = checkAprovacao(aluno1)

console.log(media)
console.log(aprovacao)
