import { Component } from '@angular/core';

@Component({
  selector: 'create-task',
  templateUrl: 'create-task.html'
})
export class CreateTaskComponent {

  text: string;

  constructor() {
    console.log('Hello CreateTaskComponent Component');
    this.text = 'Hello World';
  }

}
