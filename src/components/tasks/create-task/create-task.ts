import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { CreateTaskModalComponent } from "./create-task-modal/create-task-modal";

@Component({
  selector: 'create-task',
  templateUrl: 'create-task.html'
})
export class CreateTaskComponent {

  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    let appModal = this.modalCtrl.create(CreateTaskModalComponent);
    appModal.present();
  }

}
