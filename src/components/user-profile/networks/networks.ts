import { Component } from '@angular/core';
import { ModalController } from "ionic-angular";

@Component({
  selector: 'networks',
  templateUrl: './networks.html'
})
export class NetworksComponent {

  public userNetworks: Array<any> = [];


  constructor(private modalCtrl: ModalController) {
  }

  openModal() {
    let appModal = this.modalCtrl.create('');
    appModal.present();
  }
}
