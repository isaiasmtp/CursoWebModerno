import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';


const alunosRoutes = [
    {path: '', component: AlunosComponent,children: [
        //{path: 'novo', component: AlunoFormComponent},
        {path: ':id', component: AlunoDetalheComponent},
        {path: ':id/edit', component: AlunoFormComponent},
    ]},
    
    


];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}