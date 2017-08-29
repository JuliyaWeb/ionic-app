import { Component } from '@angular/core';

@Component({
  selector: 'aquisition-task',
  templateUrl: 'aquisition-task.html'
})
export class AquisitionTaskComponent {

  text: string;

  constructor() {
    console.log('Hello AquisitionTaskComponent Component');
    this.text = 'Hello World';
  }

}
