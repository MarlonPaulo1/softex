// Crie um programa que contenha os seguintes tipos de funções:

// 1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
// 2. uma função tradicional com parâmetros e um retorno de valor;
// 3. uma arrow function com parâmetros e que retorne um valor.

// Crie um programa que utilize essas três funções de forma lógica, por exemplo: um programa de calculadora.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse 
// projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

let fahrenheit = 54

const celsiusParaFahrenheit = celsius => ((celsius * (9 / 5) + 32)).toFixed(2)
const celsiusParaKelvin = celsius => (celsius + 273.15).toFixed(2)

function kelvinParaFahrenheit(kelvin) {
    return ((kelvin - 273.15) * 9/5 + 32).toFixed(2)
}
function kelvinParaCelsius(kelvin) {
    return (kelvin - 273.15).toFixed(2)
}

function fahrenheitParaCelsius() {
    return ((fahrenheit - 32) * 5/9).toFixed(2)
}
function fahrenheitParaKelvin() {
    return ((fahrenheit - 32) * 5/9 + 273.15).toFixed(2)
}

function conversorDeTemperatura(tipoDaEscala, temperatura) {
    if(tipoDaEscala === 'celsius') {
        console.log(`${temperatura} °C = ${celsiusParaFahrenheit(temperatura)} °F`)
        console.log(`${temperatura} °C = ${celsiusParaKelvin(temperatura)} K \n`)
    } else if (tipoDaEscala === 'fahrenheit') {
        console.log(`${fahrenheit} °F = ${fahrenheitParaCelsius()} °C`)
        console.log(`${fahrenheit} °F = ${fahrenheitParaKelvin()} K \n`)
    } else if (tipoDaEscala === 'kelvin') {
        console.log(`${temperatura} K = ${kelvinParaCelsius(temperatura)} °C`)
        console.log(`${temperatura} K = ${kelvinParaFahrenheit(temperatura)} °F`)
    }
}

conversorDeTemperatura('celsius', 54)
conversorDeTemperatura('fahrenheit')
conversorDeTemperatura('kelvin', 54)
