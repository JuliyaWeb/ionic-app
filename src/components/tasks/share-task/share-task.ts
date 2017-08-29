import { Component } from '@angular/core';

@Component({
  selector: 'share-task',
  templateUrl: 'share-task.html'
})
export class ShareTaskComponent {

  text: string;

  constructor() {
    console.log('Hello ShareTaskComponent Component');
    this.text = 'Hello World';
  }

}
