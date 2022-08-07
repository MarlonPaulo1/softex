// Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que
// incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar
// saldo, depósito, saque e número da conta.

// Observações:

// - buscar saldo deve retornar o valor atual do saldo;
// - para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
// - para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
// - o número da conta deve retornar o número da conta.

// Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe
// o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

const Banco = {
    conta: 123457,
    saldo: 1000,
    tipoDeConta: 'poupança',
    agencia: 897,

    
    deposito(valorDaEntrada){
        return valorDaEntrada
    },
    saque(valorDaSaida){
        return valorDaSaida
    },
    buscarSaldo(valorDaEntrada, valorDaSaida) {
        return this.saldo + this.deposito(valorDaEntrada) - this.saque(valorDaSaida)
    },
    numeroDaConta() {
        return this.conta
    },
}

const clienteMarlon = Object.create(Banco)

console.log(`Número da Conta: ${clienteMarlon.numeroDaConta()}`)
console.log(`Saque de: R$ ${clienteMarlon.saque(700)}`)
console.log(`Depósito de: R$ ${clienteMarlon.deposito(500)}`)
console.log(`Saldo atual de: R$ ${clienteMarlon.buscarSaldo(500, 700)}`)
