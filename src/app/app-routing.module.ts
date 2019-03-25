import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HttpModule} from '@angular/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'notas', loadChildren: './notas/notas.module#NotasPageModule' },
  { path: 'pagamentos', loadChildren: './pagamentos/pagamentos.module#PagamentosPageModule' },
  { path: 'perfil-estudante', loadChildren: './perfil-estudante/perfil-estudante.module#PerfilEstudantePageModule' },
  { path: 'avaliacao-docente', loadChildren: './avaliacao-docente/avaliacao-docente.module#AvaliacaoDocentePageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  HttpModule],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
