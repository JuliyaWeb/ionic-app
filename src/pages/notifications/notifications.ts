import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MessageType, Notification } from "../../core/models/notification.model";
// import * as moment from 'moment';
import { ChatPage } from "../chat/chat";
import { CampaignOfferPage } from "../campaign-offer/campaign-offer";

@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
// https://angular-meteor.com/tutorials/whatsapp2/ionic/messages-page
//  Chat example https://github.com/mojofit/imojo
export class NotificationsPage {
  public notice: Array<any>;
  // public notifications: Array<Notification>;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
    this._findChats();
  }

  public goToDetail(item: Notification) {
    const arg = {arg: item};
    (item['lastMessage'].type == MessageType.OFFER) ? this.navCtrl.push(CampaignOfferPage, arg) : this.navCtrl.push(ChatPage, arg);
  }

  private _findChats() {
    return this.notice = [{
      _id: '0',
      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
      lastMessage: {
        content: 'At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum atq',
        addresser: 'Claire Harrison - Marketing Agent',
        createdAt: '15:11',
        type: MessageType.DIRECT
      }
    },
      {
        picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
        lastMessage: {
          content: 'Hey, it\'s me',
          addresser: 'Lucas Hudson - Marketing Agent',
          createdAt: '10.15',
          type: MessageType.OFFER
        }
      },
      {
        picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
        lastMessage: {
          content: 'I should buy a boat',
          addresser: 'Claire Harrison - Marketing Agent',
          createdAt: 'Monday',
          type: MessageType.OFFER
        }
      },
      {
        picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
        lastMessage: {
          content: 'Look at my mukluks!',
          addresser: 'Lucas Hudson - Marketing Agent',
          createdAt: 'Sunday',
          type: MessageType.DIRECT
        }
      },
      {
        picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
        lastMessage: {
          content: 'At vero eos et accusamus et iusto odiodignissimos ducimus qui blanditiis praesentium voluptatum atq',
          addresser: 'Claire Harrison - Marketing Agent',
          createdAt: '27.07.17',
          type: MessageType.OFFER
        }
      }];
  }
}
