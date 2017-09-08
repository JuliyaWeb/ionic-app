import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../auth/login/login";
import { RegisterPage } from "../auth/register/register";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  public sliders: Array<any>;

  constructor(public navCtrl: NavController) {
  }

  ionViewCanEnter(){
    this._initSlider();
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }
  goToRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }

  private _initSlider() {
    return this.sliders = [
      {
        text: `LineUp is a collaboration
                platform for In uencers, Brand Enthusiasts`,
        icon: 'star'
      }, {
        text: `Get Campaign invitations based 
                on your marketing variables and prole strength.`,
        icon: 'user'
      }, {
        text: `Collaborate with brands & agencies. Take part in
                market research & advertising campaigns`,
        icon: 'bell'
      }, {
        text: `Get Real-time data on your
                personal growth.`,
        icon: 'pie-chart'
      }, {
        text: `Get rewarded in cash,
                products and exclusive event invitations`,
        icon: 'star'
      }]
  }

}
