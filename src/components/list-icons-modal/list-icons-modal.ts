import { Component } from '@angular/core';
import { ModalController, NavParams, ViewController } from "ionic-angular";
import { NetworksDataService, InterestsDataService } from "../user-profile/shared/index";
import { GenresModalComponent } from "../user-profile/interests/genres-modal/genres-modal";
import { NetworkModalComponent } from "../user-profile/networks/network-modal/network-modal";

@Component({
  selector: 'list-icons-modal',
  templateUrl: 'list-icons-modal.html',
  providers: [NetworksDataService, InterestsDataService]
})
export class ListIconsModalComponent {

  public listIcons: Array<any>;
  public modalData: Object;

  constructor(private viewCtrl: ViewController,
              private modalCtrl: ModalController,
              private params: NavParams,
              private _networkData: NetworksDataService,
              private _interestData: InterestsDataService) {
  }

  ngOnInit(): void {
    this.modalData = this.params.get('data');
    this.listIcons = (this.modalData['type'] == 'interest') ? this._interestData.getInterestsData() : this._networkData.getNetworksData();
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }

  public openModal(index) {
    const component = (this.modalData['type'] == 'interest') ? GenresModalComponent : NetworkModalComponent;
    let appModal = this.modalCtrl.create(component, {index: index});
    appModal.present();
  }
}
