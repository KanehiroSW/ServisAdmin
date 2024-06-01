import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteNotificacionesPageRoutingModule } from './reporte-notificaciones-routing.module';

import { ReporteNotificacionesPage } from './reporte-notificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteNotificacionesPageRoutingModule
  ],
  declarations: [ReporteNotificacionesPage]
})
export class ReporteNotificacionesPageModule {}
