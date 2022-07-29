// O segundo código é um programa que o aluno deve escrever duas notas e 
// o retorno informa a nota mínima que ele deve tirar na próxima prova para
// poder passar com nota sete.

function necessarioParaPassar(nota1, nota2) {
    const notas = nota1 + nota2

    const paraPassar = 21 - notas

    return `Nota 1 = ${nota1}, Nota 2 = ${nota2} para passar com média 7 sua Nota 3 mínima tem que ser = ${paraPassar}`
}

console.log(necessarioParaPassar(7, 7))
console.log(necessarioParaPassar(7, 10))
console.log(necessarioParaPassar(2, 5))
console.log(necessarioParaPassar(4, 6))