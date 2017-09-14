import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskService } from "../../core/providers";
import { TaskDetailPage } from "../task-detail/task-detail";

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {
  public listTasks: Array<any> = [];

  constructor(public navCtrl: NavController, private _taskService: TaskService) {
  }

  ionViewCanEnter() {
    this.listTasks = this._taskService.getListTasks();
  }

  public goToDetail(task) {
    const navData = {task: task};
    this.navCtrl.push(TaskDetailPage, navData)
    // this.navCtrl.setRoot(TaskDetailPage, navData)
  }

}
