function createProduct (name, value){
    return{
        name,
        value,
        desconto: 0.1 
    }
}

console.log(createProduct("notebook",1000))