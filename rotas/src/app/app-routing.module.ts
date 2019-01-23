import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosModule } from './cursos/cursos.module';
//import { CursosComponent } from './cursos/cursos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [

  { path: '',component: HomeComponent},
  { path: 'login',component: LoginComponent},
  { path: 'cursos',loadChildren: 'src/app/cursos/cursos.module#CursosModule'},
  { path: 'alunos',loadChildren: 'src/app/alunos/aluno.module#AlunosModule'},

//{ path: 'cursos',component: CursosComponent},
 // { path: 'curso/:id',component: CursoDetalheComponent},
  //{ path: 'naoEncontrado',component: CursoNaoEncontradoComponent}


];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
