import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-mant',
  templateUrl: './principal-mant.page.html',
  styleUrls: ['./principal-mant.page.scss'],
})
export class PrincipalMantPage implements OnInit {
  showOrders: boolean = false;
  constructor(private router: Router) { }
  navigateToPage() {
    this.router.navigate(['/reporte-notificaciones']);
  }
  
  ngOnInit() {
  }

}
