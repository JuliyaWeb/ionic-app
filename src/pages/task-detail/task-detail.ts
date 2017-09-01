import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TaskTypes } from "../../components/tasks/task-types";

// @IonicPage({
//   segment: 'task/:taskId'
// })
@Component({
  selector: 'page-task-detail',
  templateUrl: 'task-detail.html',
})
export class TaskDetailPage {
  public taskType = TaskTypes;
  public task: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewCanEnter() {
    this.task = this.navParams.get('task');
  }

}
