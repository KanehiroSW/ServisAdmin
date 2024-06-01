import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.page.html',
  styleUrls: ['./login-admin.page.scss'],
})
export class LoginAdminPage implements OnInit {
  usuario: string ='';
  password: string ='';
  constructor(private router: Router) { }
  
  login(){
    this.router.navigate(['/principal-mant']);
  }
  recuperarCuenta(event: Event){
    event.preventDefault();
    this.router.navigate(['/recuperar-admin']);
  }
  ngOnInit() {
  }

}
