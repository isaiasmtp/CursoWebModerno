const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)


const carro = {
    modelo: 'A4',
    valor: 890000,
    proprietario: {
        nome: 'Isaias',
        idade:  19,
        endereco: {
            logradouro: 'Rua luiz sodre filho',
            n: 625
        }

    },

    condutores: [{
        nome: 'Ju',
        idade: 19
    },{
        nome: 'bom',
        idade: 6
    }],

    calculaValorSeguro: function(){}
}

 console.log(carro)

 delete carro.proprietario
 delete carro.condutores
 console.log(carro)