import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceApp } from "../../core/auth/auth.service";
import { User } from "../../core/models/user.model";
import { InitProfileDataService, Card } from "../../components/user-profile/shared/index";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [InitProfileDataService]
})
export class ProfilePage {
  public cards: Array<Card> = [];
  public segment = 'info';
  public user: User;
  public editProfile: boolean = false;
  public userAvatar: string = 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png';

  /* Chart */
  public doughnutChartType: string = 'pie';
  public doughnutChartLegend: boolean = true;
  public doughnutChartData: any;
  public doughnutChartColors: any[];
  public doughnutChartOptions: any;

  constructor(public navCtrl: NavController,
              private _profileDataService: InitProfileDataService,
              private authService: AuthServiceApp) {
  }

  ionViewCanEnter() {
    this.user = this.authService.getUser();
    this._initCards();
    this._initDoughnutChart();
  }

  public toggleCard(card: Card) {
    card.edit = !card.edit;
  }

  public toggleEditProfile() {
    this.editProfile = !this.editProfile;
  }

  public getImgSrc(data) {
    this.userAvatar = data;
  }

  private _initCards() {
    let data = this._profileDataService.getprofileCardsData();
    data.map((item) => {
      this.cards.push(new Card(item))
    })
  }

  /* Doughnut Chart */
  private _initDoughnutChart() {
    this.doughnutChartData = [250, 620];
    this.doughnutChartColors = [
      {
        backgroundColor: [
          'rgb(247, 107, 108)',
          'rgb(35, 46, 97)',
        ],
        hoverBackgroundColor: [
          'rgb(247, 107, 108)',
          'rgb(35, 46, 97)',
        ],
        borderColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 1,
        hoverBorderWidth: 3
      }
    ];
  }

}
