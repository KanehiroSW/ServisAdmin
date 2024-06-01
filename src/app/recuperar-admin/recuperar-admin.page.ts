import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-admin',
  templateUrl: './recuperar-admin.page.html',
  styleUrls: ['./recuperar-admin.page.scss'],
})
export class RecuperarAdminPage implements OnInit {
  usuario="";
  codigoUsuario="";
  passwordNuevo="";
  confirmarPassword="";
  constructor(private router: Router) { }
  recuperar() {
    this.router.navigate(['/login-admin']);
  }
  ngOnInit() {
  }

}
