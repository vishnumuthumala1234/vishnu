import { Component } from '@angular/core'

@Component({
  template: `
    <h1 class="errorMessage">404'not found</h1>
  `,
  styles: [`
    .errorMessage { 
      margin-top:150px; 
      font-size: 170px;
      text-align: center; 
    }`]
})
export class Error404Component{
  constructor() {

  }

}
