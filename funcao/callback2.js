const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
let notasbaixas = [];
for(let i in notas){
    if(notas[i]<7){
        notasbaixas.push(notas[i]);
    }
}
function imprimir(nota, indice){
    console.log(`${indice+1}. ${nota}`)
}
notasbaixas.forEach(imprimir)
console.log("_____________________________")
notas.forEach(imprimir)
console.log("_____________________________")
//callback
notasBaixasCall = notas.filter(nota => nota < 7)
notasBaixasCall.forEach(imprimir)
