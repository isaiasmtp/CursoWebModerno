const pessoa = {
    nome: "Isaias",
    idade: 12,

    calcula : function(){
        console.log(this.idade * 2)
        
    }
    
}

pessoa.calcula()

const person = {
    saudacao: "Bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

person.falar()
const falar = person.falar

falar() // Conflito

const correto =  person.falar.bind(person);

correto()

const teste = pessoa.calcula.bind(pessoa);
teste()