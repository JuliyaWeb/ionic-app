import { Component } from '@angular/core';

@Component({
  selector: 'event-task',
  templateUrl: 'event-task.html'
})
export class EventTaskComponent {

  text: string;

  constructor() {
    console.log('Hello EventTaskComponent Component');
    this.text = 'Hello World';
  }

}
