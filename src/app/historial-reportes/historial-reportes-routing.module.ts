import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialReportesPage } from './historial-reportes.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialReportesPage
  },  {
    path: 'resultado-historial',
    loadChildren: () => import('./resultado-historial/resultado-historial.module').then( m => m.ResultadoHistorialPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialReportesPageRoutingModule {}
