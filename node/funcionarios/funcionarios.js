const url  = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinesa = funcionario => (funcionario.pais === 'China')
const mulher = funcionario => (funcionario.genero === 'F')
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data

    const desafio = funcionarios
        .filter(chinesa)
        .filter(mulher)
        .reduce(menorSalario)

    console.log(desafio);
    
})