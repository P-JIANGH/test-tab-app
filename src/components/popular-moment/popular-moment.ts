import { Component } from '@angular/core';

@Component({
  selector: 'popular-moment',
  templateUrl: 'popular-moment.html'
})
export class PopularMomentComponent {

  text: string;

  constructor() {
    console.log('Hello PopularMomentComponent Component');
    this.text = 'Hello World';
  }

}
