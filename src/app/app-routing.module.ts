import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login-admin',
    pathMatch: 'full'
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
  },
  {
    path: 'recuperar-admin',
    loadChildren: () => import('./recuperar-admin/recuperar-admin.module').then( m => m.RecuperarAdminPageModule)
  },
  {
    path: 'principal-mant',
    loadChildren: () => import('./principal-mant/principal-mant.module').then( m => m.PrincipalMantPageModule)
  },
  {
    path: 'reporte-notificaciones',
    loadChildren: () => import('./reporte-notificaciones/reporte-notificaciones.module').then( m => m.ReporteNotificacionesPageModule)
  },
  {
    path: 'historial-reportes',
    loadChildren: () => import('./historial-reportes/historial-reportes.module').then( m => m.HistorialReportesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
