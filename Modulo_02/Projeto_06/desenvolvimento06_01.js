// O primeiro código deve ser um programa que informa se o aluno reprovou,
// ou não, com base nas três notas que ele adicionou ao programa. Utilize, 
// no mínimo, um operador de atribuição e um operador ternário. 


function notas(nota1, nota2, nota3) {
    const media = ((nota1 + nota2 + nota3) / 3).toFixed(2)

    const situacao = media >= 7 
        ? `Media = ${media} Aprovado` 
        : `Media = ${media} Reprovado`
    
    return situacao
}

console.log(notas(8, 9, 10))
console.log(notas(5, 4, 1))
console.log(notas(7, 7, 7))