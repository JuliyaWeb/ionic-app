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
  public segment = 'interests';
  // public segment = 'info';
  public user: User;


  constructor(public navCtrl: NavController,
              private _profileDataService: InitProfileDataService,
              private authService: AuthServiceApp) {
  }

  ionViewCanEnter() {
    this.user = this.authService.getUser();
    this._initCards();
  }

  public toggleCard(card: Card) {
    card.edit = !card.edit;
  }

  private _initCards() {
    let data = this._profileDataService.getprofileCardsData();
    data.map((item) => {
      this.cards.push(new Card(item))
    })
  }

}
