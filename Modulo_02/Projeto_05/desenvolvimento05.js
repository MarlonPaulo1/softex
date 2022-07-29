// Com os conceitos aprendidos, crie um programa de calculadora que: 

// receba dois valores, que devem ser salvos em variáveis; 
// o usuário deve colocar qual operador ele vai utilizar por meio dos 
// símbolos aritméticos; 
// com os dois valores e o operador definido, o programa deve fazer a 
// operação e retornar o resultado; 
// se houver divisão, você deve retornar o resultado e a sobra,
// caso haja alguma. 

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e 
// compartilhe o link desse projeto no campo ao lado para que outros 
// desenvolvedores possam analisá-lo.

let valor1 = 15;
let valor2 = 2;
let simboloAritmetico = '/';
let resultado;
let sobra;

if(simboloAritmetico === '+') {
    resultado = valor1 + valor2
    console.log(`O resultado de ${valor1} + ${valor2} = ${resultado}`)
}

if(simboloAritmetico === '-') {
    resultado = valor1 - valor2
    console.log(`O resultado de ${valor1} - ${valor2} = ${resultado}`)
}

if(simboloAritmetico === '*') {
    resultado = valor1 * valor2
    console.log(`O resultado de ${valor1} * ${valor2} = ${resultado}`)
}

if(simboloAritmetico === '/') {
    resultado = valor1 / valor2
    sobra = valor1 % valor2
    console.log(`O resultado de ${valor1} / ${valor2} = ${Math.trunc(resultado)} e sobra: ${sobra}`)
}
