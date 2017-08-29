import { Component } from '@angular/core';

@Component({
  selector: 'review-task',
  templateUrl: 'review-task.html'
})
export class ReviewTaskComponent {

  text: string;

  constructor() {
    console.log('Hello ReviewTaskComponent Component');
    this.text = 'Hello World';
  }

}
