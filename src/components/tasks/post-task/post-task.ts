import { Component } from '@angular/core';

@Component({
  selector: 'post-task',
  templateUrl: 'post-task.html'
})
export class PostTaskComponent {

  text: string;

  constructor() {
    console.log('Hello PostTaskComponent Component');
    this.text = 'Hello World';
  }

}
