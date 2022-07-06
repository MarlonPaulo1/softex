// Crie uma classe e insira nela, no mínimo, dois atributos, 
//os quais devem ter um método acessor (get) e um método modificador (set) para cada.
//Defina um objeto para cada atributo e elabore um construtor para criar alguma regra.

// A atividade pode ser realizada em qualquer linguagem de programação ou apenas 
// utilizando algoritmos.

// Trabalhe esse código em seu IDE ou no Bloco de Notas, e compartilhe o link no
// campo ao lado para que outros desenvolvedores possam analisá-lo. 

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
