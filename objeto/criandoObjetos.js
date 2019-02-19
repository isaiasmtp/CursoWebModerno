//usando notacao literal

const obj1 = {}

console.log(obj1)

//Objeto em Js

console.log(typeof Object, typeof new Object)

//Funcao Construtoras


function Produto(nome,preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
const p1 = new Produto ('Caneta', 2998.99, 0,.25)