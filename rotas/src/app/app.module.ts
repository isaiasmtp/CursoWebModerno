import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
//import { CursosModule } from './cursos/cursos.module';
//import { AlunosModule } from './alunos/aluno.module';
//import { AlunosComponent } from './alunos/alunos.component';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursosService } from './cursos/cursos.service';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    /*AlunosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
    CursosComponent*/
  ],
  imports: [
    BrowserModule,
    //CursosModule,
    AppRoutingModule,
   // AlunosModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
