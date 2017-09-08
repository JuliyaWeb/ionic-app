import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TaskService } from "../../core/services/task.service";

@Component({
  selector: 'page-campaign-offer',
  templateUrl: 'campaign-offer.html',
})
export class CampaignOfferPage {
  public campaign: any;
  public listTasks: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _taskService: TaskService) {
  }

  ionViewCanEnter() {
    this.campaign = this.navParams.get('arg');
    this.listTasks = this._taskService.getListTasks();
  }

}
