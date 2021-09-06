import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Curriculum';

  public mostrar: boolean = false;

  constructor(
    private router: Router
  ){ }

  voltarLogin(){
    this.router.navigate(["/login"])
    console.log("login" + this.voltarLogin)
    this.mostrar = true;
  }
}
