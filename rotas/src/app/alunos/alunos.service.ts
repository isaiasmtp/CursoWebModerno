import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
 
  private alunos:any[] = [
    {id:1, nome: 'Aluno01', email: 'aluno01@email.com' },
    {id:2, nome: 'Aluno02', email: 'aluno02@email.com' },
    {id:3, nome: 'Aluno03', email: 'aluno03@email.com' }
]

  getAlunos(){
    return this.alunos;
  }

    getAluno(id){
      for (let i = 0; i<this.alunos.length; i++){
        if (id == this.alunos[i].id){
          return this.alunos[i];
        }
      }
      return null;
    }

    deletaAluno(id){
    for(var i = 0; i < this.alunos.length; i++) {
      if(this.alunos[i].id == id) {
        this.alunos.splice(i, 1);
      break;
       }
      }
      
    }

    verificaArray(){
      return (this.alunos.length > 0)
    }

  constructor() { }




}
