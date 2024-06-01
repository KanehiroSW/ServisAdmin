import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperarAdminPageRoutingModule } from './recuperar-admin-routing.module';

import { RecuperarAdminPage } from './recuperar-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperarAdminPageRoutingModule
  ],
  declarations: [RecuperarAdminPage]
})
export class RecuperarAdminPageModule {}
