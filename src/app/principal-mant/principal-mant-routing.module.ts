import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalMantPage } from './principal-mant.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalMantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalMantPageRoutingModule {}
