import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  // selectedChat: Notification;
  // title: string;
  // picture: string;
  // // messages: Array<Message>;
  messages: Array<any>;
  public message: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this._initTestData();
  }

  public sendMessage(message) {
    console.log('send Message', message)
  }

  private _initTestData() {
    return this.messages = [
      {
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        content: 'Hello!',
        ownership: 'addresser'
      }, {
        picture: 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png',
        content: 'Hi!',
        ownership: 'mine'
      }, {
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        content: `At vero eos et accusamus et iusto odio dignissimosducimus.`,
        ownership: 'addresser'
      }, {
        picture: 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png',
        content: `At vero eos et accusamus et iusto odio dignissimosducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
                  et quas molestias excepturi sint occaecati cupiditate non.`,
        ownership: 'mine'
      }, {
        picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
        content: `At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum`,
        ownership: 'addresser'
      }, {
        picture: 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png',
        content: `At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum
                deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non prov`,
        ownership: 'mine'
      }, {
        picture: 'https://s3.amazonaws.com/ionic-io-static/9TxJELnATnW9H3MZZfdG_Profile_avatar_placeholder_large.png',
        content: `At vero eos et accusamus et iusto odio dignissimos
                  ducimus qui blanditiis praesentium voluptatum
                  deleniti atque corrupti quos dolores et quas molestias
                  excepturi At vero eos et accusamus et iusto
                  odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores et
                  quas molestias excepturi sint occaecati cupiditate
                  non molestias ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos.`,
        ownership: 'mine'
      },
    ]
  }

}
