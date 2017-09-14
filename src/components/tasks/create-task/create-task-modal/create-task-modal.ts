import { Component } from '@angular/core';
import { ViewController } from "ionic-angular";

@Component({
  selector: 'create-task-modal',
  templateUrl: 'create-task-modal.html'
})
export class CreateTaskModalComponent {

  constructor(private viewCtrl: ViewController) {
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
