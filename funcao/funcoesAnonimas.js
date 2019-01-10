const soma = function (x,y){
    return x+y;
} // funcao anonima = sem nome

const subtracao = function (x,y){
    return x-y;
}

function fun1(a,b){
    return (a+b);
}

const imprimirResultado = function (a,b, operacao = soma){
    console.log(operacao(a,b));
}

imprimirResultado(3,4,soma)
imprimirResultado(3,4,subtracao)
imprimirResultado(3,4,fun1)

imprimirResultado(3,4, function (x,y){
    return x*y;
})

imprimirResultado(3,4, (x,y) => x+y) //arrow function sempre sera anonima

const obj = {
    falo(){
        console.log("eh mermo bixo")
    },
    
    falei: function (){
        console.log("fala tu")
    }

}

obj.falo()
obj.falei()
obj.falar = () => console.log("oi")

obj.falar()