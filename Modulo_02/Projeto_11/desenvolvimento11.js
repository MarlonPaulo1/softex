// Desenvolva um código e crie nele:

// - um objeto com, no mínimo, três propriedades;
// - um array de tamanho três no mínimo;
// - duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse 
// projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

const animais = ['cachorro', 'panda', 'tubarão', 'capivara']


const dinossauro = {
    nome: 'Tiranossauro Rex',
    periodoPrehistorico: 'Período Mesozóico',
    alimentacao: 'carnívoro'
}


function listaPropriedadesDoObjeto() {
    for (let propriedade in dinossauro) {
        console.log(`${propriedade} = ${dinossauro[propriedade]}`)
    }    
}

function elementosDoArray() {
    for (let animal of animais) {
        console.log(animal)
    } 
}

listaPropriedadesDoObjeto()
elementosDoArray()