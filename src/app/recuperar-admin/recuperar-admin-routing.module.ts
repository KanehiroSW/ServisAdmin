import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperarAdminPage } from './recuperar-admin.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperarAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperarAdminPageRoutingModule {}
