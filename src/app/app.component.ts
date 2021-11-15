import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

    <!-- header -->
    <app-header></app-header>

    <!-- router gets injected here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <app-footer></app-footer>
 

  `,
  styles: []
})
export class AppComponent{
  
  constructor(){}
}
