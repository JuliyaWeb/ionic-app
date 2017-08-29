import { Component } from '@angular/core';
import { ModalController, ViewController } from "ionic-angular";
import { InterestsDataService, Interest } from "../../shared";
import { GenresModalComponent } from "../genres-modal/genres-modal";

@Component({
  selector: 'list-interests-modal',
  templateUrl: 'list-interests-modal.html',
  providers: [InterestsDataService]
})
export class InterestsModalComponent {

  text: string;
  public listInterests: Array<any>;

  constructor(private _viewCtrl: ViewController,
              private _modalCtrl: ModalController,
              private _interestsData: InterestsDataService) {
  }

  ngOnInit(): void {
    this.listInterests = this._interestsData.getInterestsData();
  }

  public dismiss() {
    this._viewCtrl.dismiss();
  }

  public openModal(index) {
    let appModal = this._modalCtrl.create(GenresModalComponent, {index: index});
    appModal.present();
  }

  public addInterest(data) {
    console.log('save');
  }

}

