import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";
import { ListIconsModalComponent } from "../../list-icons-modal/list-icons-modal";

@Component({
  selector: 'networks',
  templateUrl: './networks.html'
})
export class NetworksComponent {

  public userNetworks: Array<any> = [];


  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    const modalParams = {
      title: 'Connect an Account:',
      type: 'networks',
    };

    let appModal = this.modalCtrl.create(ListIconsModalComponent, {data: modalParams});
    appModal.present();
  }
}
