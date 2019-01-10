// Função em JS é First-Class Object 
// Cidadão em Primeira Linha

//Criar de forma literal

function fun1(a,b){
    return (a+b);
}

console.log("Literal");

console.log(fun1(1,-1));

// Pode armazenar função em variavel

const soma = fun1;

console.log("Variavel");

console.log(soma(1,-1));

//Pode armazenar em Array

const array = [fun1];

console.log("Array");
console.log(array[0](1,-1));

//Armazenar em um atributo do Objeto

const obj = {};
obj.somar = fun1;

console.log("Objeto");
console.log(obj.somar(1,-1));


console.log("Funcao dentro de funcao/retornar");
function fun(){
    console.log("Deu bom!");
}
function run(fun){
    fun();
}
run(fun);

function somaTop(a,b){
    return function(c){
        console.log(a+b+c);
    } 
}
console.log(somaTop(1,2))
somaTop(1,2)(3)