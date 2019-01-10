function Carro(velMax = 200, delta = 5){
    let velAtual = 0 

    this.acelerar = function () {
        if(velAtual +delta <= velMax){
            velAtual += delta
        }else{
            velAtual = velMax
        }
    }

    this.getVelAtual = function () {
        return velAtual
    }
}

const uno = new Carro

uno.acelerar()
console.log(uno.getVelAtual())
uno.acelerar()
console.log(uno.getVelAtual())
uno.acelerar()
console.log(uno.getVelAtual())
uno.acelerar()
console.log(uno.getVelAtual())