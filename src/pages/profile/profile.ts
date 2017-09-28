import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthServiceApp } from "../../core/auth/auth.service";
import { User } from "../../core/models/user.model";
import { InitProfileDataService, Card } from "../../components/user-profile/shared/index";
import { InfoComponent } from "../../components/user-profile/info/info";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [InitProfileDataService]
})
export class ProfilePage {

  @ViewChild(InfoComponent) userInfo: InfoComponent;

  public cards: Array<Card> = [];
  public segment = 'info';
  public user: User;
  public editProfile: boolean = false;
  public registerCompletion: boolean = false;
  public userAvatar: string = 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png';

  /* Chart */
  public doughnutChartType: string = 'pie';
  public doughnutChartLegend: boolean = true;
  public doughnutChartData: any;
  public doughnutChartColors: any[];
  // public doughnutChartOptions: any;

  constructor(public navCtrl: NavController,
              private _profileDataService: InitProfileDataService,
              private authService: AuthServiceApp) {
  }

  ionViewCanEnter() {
    // this.registerCompletion = (localStorage.getItem('register_completion') == 'true');
    this.editProfile = this.registerCompletion;
    this.user = this.authService.getUser();
    this.user = new User({
      id: 1,
      first_name: 'Lucia',
      last_name: 'Campbell',
      username: "userCampbell",
      email: 'test.email@com',
      reated: '',
      reated_by: '',
      modified: '',
      modified_by: '',
      info: {
        gender: 2,
        income: 3,
        education: 2,
        relationship_status: 2,
        occupation: 10,
        image: "https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png"
      }
    });
    this._initDoughnutChart();
  }

  public toggleEditProfile() {
    this.editProfile = !this.editProfile;
  }

  public getImgSrc(data) {
    this.userAvatar = data;
  }

  public saveData() {
    const obj = this.userInfo.serializeDataForRequest();
    // return !!this.saveInfo;
    // let data: Object;
    // if (this.registerCompletion) {
    //   this.authService.registrationCompletion(data)
    //     .subscribe(
    //       (data) => {
    //         console.info('authService.registrationCompletion', data);
    //       },
    //       (error) => {
    //         console.error('authService.registrationCompletion', error);
    //       }
    //     );
    // } else {
    //   this.authService.saveUserData(data)
    //     .subscribe(
    //       (data) => {
    //         console.info('authService.editUser', data);
    //       },
    //       (error) => {
    //         console.error('authService.editUser', error);
    //       }
    //     );
    // }
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
