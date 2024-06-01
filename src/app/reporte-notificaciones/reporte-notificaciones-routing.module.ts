import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReporteNotificacionesPage } from './reporte-notificaciones.page';

const routes: Routes = [
  {
    path: '',
    component: ReporteNotificacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReporteNotificacionesPageRoutingModule {}
