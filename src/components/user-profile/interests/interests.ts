import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { ListIconsModalComponent } from "../../list-icons-modal/list-icons-modal";


@Component({
  selector: 'interests',
  templateUrl: './interests.html',
})
export class InterestsComponent {

  public userInterests: Array<any> = [];


  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    const modalParams = {
      title: 'Tell us what you’re Into:',
      type: 'interest',
    };
    let appModal = this.modalCtrl.create(ListIconsModalComponent, {data: modalParams});
    appModal.present();
  }

}
