import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reporte-notificaciones',
  templateUrl: './reporte-notificaciones.page.html',
  styleUrls: ['./reporte-notificaciones.page.scss'],
})
export class ReporteNotificacionesPage implements OnInit {

  constructor(private router : Router) { }

  finalizadoReporte(event : Event){
    event.preventDefault();
    this.router.navigate(['/principal-mant']);
  }

  ngOnInit() {
  }

}
