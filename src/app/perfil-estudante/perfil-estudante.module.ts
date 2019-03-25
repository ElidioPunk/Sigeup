import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEstudantePage } from './perfil-estudante.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEstudantePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilEstudantePage]
})
export class PerfilEstudantePageModule {}
