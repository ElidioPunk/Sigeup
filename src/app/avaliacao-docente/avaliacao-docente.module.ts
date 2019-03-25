import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AvaliacaoDocentePage } from './avaliacao-docente.page';

const routes: Routes = [
  {
    path: '',
    component: AvaliacaoDocentePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AvaliacaoDocentePage]
})
export class AvaliacaoDocentePageModule {}
