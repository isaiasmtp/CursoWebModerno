//funcao construtora

function Pessoa(nome){
    this.nome = nome;

    this.falar = () => {
           console.log(`meu nome e ${this.nome}`)
    
    }
}

const p1 = new Pessoa('jao')
p1.falar()