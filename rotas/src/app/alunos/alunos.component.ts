import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  private alunos: any[] = [];

  constructor(private alunosService: AlunosService) { }

  verificaArray(){
    return this.alunosService.verificaArray() 
  }

  cadastrar(){
    //TODO
  }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }

}
