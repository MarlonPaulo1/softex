class Clube {
    constructor(nome, cores , anoDeFundacao){
        this.nome = nome,
        this.cores = cores,
        this.anoDeFundacao = anoDeFundacao
    }

    get nomeDoClube(){
        return this.nome
    }

    get coresDoClube() {
        return this.cores
    }

    set nomeDoClube(nomeDoClube) {
        this.nome = nomeDoClube
    }

    set coresDoClube(coresDoClube) {
        this.cores = coresDoClube
    }
}

let santaCruz = new Clube('', '', 1914)
santaCruz.nomeDoClube = 'Santa Cruz'
santaCruz.coresDoClube = 'Vermelho Preto e Branco'

console.log(`Meu clube de futebol favorito é o ${santaCruz.nome} que tem como cores ${santaCruz.cores} sendo fundado em ${santaCruz.anoDeFundacao}`)
