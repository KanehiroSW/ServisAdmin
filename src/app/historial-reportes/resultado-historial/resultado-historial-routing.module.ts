import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultadoHistorialPage } from './resultado-historial.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadoHistorialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultadoHistorialPageRoutingModule {}
