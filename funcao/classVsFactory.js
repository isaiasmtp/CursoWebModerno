class Pessoa{
    constructor(nome){
        this.nome = nome;

    }
    falar(){
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('jao')
p1.falar()

const CriarPessoa = nome => {
    return {
        falar: () => console.log(`meu nomex eh ${nome}`)
    }
}

const p2 = CriarPessoa('juan')
p2.falar()

console.log(p1)
console.log(p2)