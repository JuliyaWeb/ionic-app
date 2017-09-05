import { Component } from '@angular/core';
import { NavParams, ViewController } from "ionic-angular";
import { NetworksDataService } from "../../../user-profile/shared/index";
import { FormGroup } from "@angular/forms/src/model";
import { Validators, FormBuilder } from "@angular/forms";
import { FormHelper } from "../../../../core/helpers/form-helper";

@Component({
  selector: 'network-modal',
  templateUrl: 'network-modal.html',
  providers: [NetworksDataService, FormHelper]
})
export class NetworkModalComponent {
  public network: Object;
  public form: FormGroup;

  constructor(private _viewCtrl: ViewController,
              private params: NavParams,
              private fb: FormBuilder,
              private fh: FormHelper,
              private _networkData: NetworksDataService) {
  }

  ngOnInit(): void {
    this.network = this._networkData.getNetworkForModal(this.params.get('index'));
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      'network_url': ['', Validators.compose([Validators.required, this.fh.linkValidator])],
      'description': ['']
    });
  }

  public dismiss() {
    this._viewCtrl.dismiss();
  }

}
