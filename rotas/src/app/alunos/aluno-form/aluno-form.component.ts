import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  aluno:any;
  inscricao: Subscription;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService) { }

    ngOnInit() {
      this.inscricao = this.route.params.subscribe(
        (params:any) => {
          let id = params['id'];
          this.aluno = this.alunosService.getAluno(id);
        }
      );
    }

    ngOnDestroy() {
      this.inscricao.unsubscribe();
    }

   

    atualizar(novoNome,novoEmail){
      if((novoNome.trim("") || novoNome == null)){
        this.aluno.nome = novoNome;
      }
      if((novoEmail.trim("") || novoEmail == null)){
        this.aluno.email = novoEmail;
      }

    }
}
