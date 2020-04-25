function Pessoa() {
    this.idade = 0;

    setInterval(() => {
        this.idade++;

        if(this.idade == 10){
            console.log(this.idade);
        }
        
    },1000)
}

new Pessoa