import { Component, ViewChild } from '@angular/core';
import { AlertController, Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { WelcomePage } from "../pages/welcome/welcome";
import { Deeplinks } from "@ionic-native/deeplinks";
import { RegisterCompletionPage } from "../pages/auth/register-completion/register-completion";
import { ProfilePage } from "../pages/profile/profile";
import { TabsPage } from "../pages/tabs/tabs";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;
  // rootPage: any = TabsPage;

  @ViewChild(Nav) navChild: Nav;

  constructor(platform: Platform,
              splashScreen: SplashScreen,
              private deeplinks: Deeplinks,
              private push: Push,
              private alertCtrl: AlertController) {
    platform.ready().then(() => {
      splashScreen.hide();
      this.pushsetup();
      this.deeplinks.routeWithNavController(this.navChild, {
        '/register-completion': TabsPage,
      }).subscribe((match) => {
        // if (match.$link['path'] == '/register-completion') {
          // console.log('match.$link', match.$link);
          // this.navChild.setRoot(RegisterCompletionPage);
        // }
      }, (nomatch) => {
        console.error('Got a deeplink that didn\'t match', nomatch);
      });
    });

  }
  pushsetup() {
    const options: PushOptions = {
      android: {
        senderID: '428820040706'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
      if (notification.additionalData.foreground) {
        let confirmAlert = this.alertCtrl.create({
          title: 'New Push notification',
          message: notification.message
        });
        confirmAlert.present();
      }
    });

    pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }
}
