import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  cardFlag:boolean

  constructor(){
    this.cardFlag = true
  }

  toggleFlag(){
    this.cardFlag = !this.cardFlag
  }

}