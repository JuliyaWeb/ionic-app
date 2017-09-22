import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-insights',
  templateUrl: 'insights.html',
})
export class InsightsPage {
  public segment: string = 'facebook';
  public overviewData: Array<any>;

  /* LineChartType */
  public lineChartData: any;
  public lineChartLabels:Array<string> = ['Follow', 'Unfollow'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.overviewData = [
      {
        title: 'Reach',
        data: '1,183,670',
      }, {
        title: 'Engagement',
        data: '822,771',
      }
    ]
  }
}
