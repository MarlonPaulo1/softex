const { consultarCep } = require('correios-brasil');
const { calcularPrecoPrazo } = require('correios-brasil');

const cep = '54505150'; 

let args = {
    sCepOrigem: '81200100',
    sCepDestino: '21770200',
    nVlPeso: '1',
    nCdFormato: '1',
    nVlComprimento: '20',
    nVlAltura: '20',
    nVlLargura: '20',
    nCdServico: ['04014', '04510'],
    nVlDiametro: '0',
};

consultarCep(cep).then(response => {
    cepNew.innerHTML = response.data.cep
    console.log(cepNew);
});

calcularPrecoPrazo(args).then(response => {
    console.log(response);
});