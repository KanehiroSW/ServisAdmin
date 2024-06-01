import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultadoHistorialPageRoutingModule } from './resultado-historial-routing.module';

import { ResultadoHistorialPage } from './resultado-historial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultadoHistorialPageRoutingModule
  ],
  declarations: [ResultadoHistorialPage]
})
export class ResultadoHistorialPageModule {}
