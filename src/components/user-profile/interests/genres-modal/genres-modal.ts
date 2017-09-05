import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { InterestsDataService } from "../../shared";

@Component({
  selector: 'genres-modal',
  templateUrl: 'genres-modal.html',
  providers: [InterestsDataService]
})
export class GenresModalComponent {
  public genres: Array<Object>;
  public interest: Object;
  public selectedInterests: any;

  constructor(private _viewCtrl: ViewController,
              private params: NavParams,
              private _interestsData: InterestsDataService) {
  }

  ngOnInit(): void {
    this.interest = this._interestsData.getInterestForModal(this.params.get('index'));
  }

  public onChange(data) {
    this.selectedInterests = data.join(', ');
  }

  public dismiss() {
    this._viewCtrl.dismiss();
  }

}
