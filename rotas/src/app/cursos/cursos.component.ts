import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/core/src/render3';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: any[];

  pagina:number;
  inscricao:Subscription;


  constructor(private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router) {


  }

  proximaPagina(){
    this.router.navigate(['/cursos'],{queryParams: {'pagina':this.pagina++}});
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.inscricao =  this.route.queryParams.subscribe(
      (queryParams) => {
        this.pagina = queryParams['pagina'];
      }

    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}