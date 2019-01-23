import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit {

  aluno:any;
  inscricao: Subscription;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  editarAluno(){
    this.router.navigate(["/alunos",this.aluno.id, "edit"]);
  }


  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params:any) => {
        let id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }

  deleta(){
    this.alunosService.deletaAluno(this.aluno.id);
    this.router.navigate(["/alunos"]);
  }

  

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
