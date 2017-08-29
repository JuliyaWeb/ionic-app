import { Component } from '@angular/core';

@Component({
  selector: 'networks',
  templateUrl: './networks.html'
})
export class NetworksComponent {

  text: string;

  constructor() {
    console.log('Hello NetworksComponent Component');
    this.text = 'Hello World';
  }

}
