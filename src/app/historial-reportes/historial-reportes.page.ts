import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial-reportes',
  templateUrl: './historial-reportes.page.html',
  styleUrls: ['./historial-reportes.page.scss'],
})
export class HistorialReportesPage implements OnInit {
  showOrders: boolean = false;
  constructor(private router: Router) { }
  navigateToPage() {
    this.router.navigate(['/historial-reportes/resultado-historial']);
  }

  ngOnInit() {
  }

}
