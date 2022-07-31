// Escolha algum código executável em JavaScript feito em atividades passadas e o coloque no Node.js. 
// Para isso, você deve ter o Node.js instalado. Após fazer essa migração, coloque seu código no
// arquivo "index.js", teste e tire um print.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto
// no campo ao lado para que outros desenvolvedores possam analisá-lo.

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