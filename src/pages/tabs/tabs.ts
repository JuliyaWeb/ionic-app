import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { ProfilePage } from "../profile/profile";
import { InsightsPage } from "../insights/insights";
import { FeedPage } from "../feed/feed";
import { NotificationsPage } from "../notifications/notifications";
import { TasksPage } from "../tasks/tasks";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = ProfilePage;
  tab2Root: any = InsightsPage;
  tab3Root: any = NotificationsPage;
  tab4Root: any = TasksPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
