import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from "../auth/login/login";

@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(public navCtrl: NavController) {
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

}
