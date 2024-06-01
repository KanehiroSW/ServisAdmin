import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalMantPageRoutingModule } from './principal-mant-routing.module';

import { PrincipalMantPage } from './principal-mant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalMantPageRoutingModule
  ],
  declarations: [PrincipalMantPage]
})
export class PrincipalMantPageModule {}
