import { Component } from '@angular/core';
import { InterestsDataService } from "../shared";
import { ModalController } from "ionic-angular";
import { InterestsModalComponent } from "./list-interests-modal/list-interests-modal";


@Component({
  selector: 'interests',
  templateUrl: './interests.html',
  providers: [InterestsDataService]
})
export class InterestsComponent {

  public userInterests: Array<any> = [];


  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    let appModal = this.modalCtrl.create(InterestsModalComponent);
    appModal.present();
  }

}
