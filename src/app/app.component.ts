import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertController, Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { WelcomePage } from "../pages/welcome/welcome";
import { Deeplinks } from "@ionic-native/deeplinks";
// import { RegisterCompletionPage } from "../pages/auth/register-completion/register-completion";
import { ProfilePage } from "../pages/profile/profile";
import { TabsPage } from "../pages/tabs/tabs";
import { NotificationsPage } from "../pages/notifications/notifications";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = WelcomePage;
  rootPage: any = TabsPage;

  @ViewChild(Nav) navChild: Nav;

  constructor(platform: Platform,
              splashScreen: SplashScreen,
              private deeplinks: Deeplinks,
              private push: Push,
              private storage: Storage,
              private alertCtrl: AlertController) {

    // Check if the user has already seen the tutorial
    // this.storage.get('hasSeenTutorial').then((hasSeenTutorial) => {
    //   if (hasSeenTutorial) {
    //     this.rootPage = TabsPage;
    //   } else {
    //     this.rootPage = WelcomePage;
    //   }
    // });

    platform.ready().then(() => {
      splashScreen.hide();
      this.initPushNotification();
      // this.deeplinks.routeWithNavController(this.navChild, {
      //   '/register-completion': TabsPage,
      // }).subscribe((match) => {
      //   // if (match.$link['path'] == '/register-completion') {
      //   // console.log('match.$link', match.$link);
      //   // this.navChild.setRoot(RegisterCompletionPage);
      //   // }
      // }, (nomatch) => {
      //   console.error('Got a deeplink that didn\'t match', nomatch);
      // });
    });

  }

  // Implementation push notification
  initPushNotification() {
    const options: PushOptions = {
      android: {
        senderID: '428820040706'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'true'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('registration').subscribe((data: any) => {
      console.log('device token -> ' + data.registrationId);
      //TODO - send device token to server
    });

    pushObject.on('notification').subscribe((data: any) => {
      console.log('data -> ' , data);
      console.log('message -> ' + data.message);
      //if user using app and push notification comes
      if (data.additionalData.foreground) {
        // if application open, show popup
        let confirmAlert = this.alertCtrl.create({
          title: 'New Notification',
          message: data.message,
          buttons: [{
            text: 'Ignore',
            role: 'cancel'
          }, {
            text: 'View',
            handler: () => {
              //TODO: Implementation logic here
              this.navChild.push(NotificationsPage, { message: data.message });
            }
          }]
        });
        confirmAlert.present();
      } else {
        //if user NOT using app and push notification comes
        //TODO: Implementation logic on click of push notification directly
        this.navChild.push(NotificationsPage, { message: data.message });
        console.log('Push notification clicked');
      }
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin' + error));
  }
}
