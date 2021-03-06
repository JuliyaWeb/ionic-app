import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
// import { Http } from "@angular/http";

@Injectable()
export class TaskService {

  constructor() {
  }
  // constructor(private _http: Http) {
  // }

  public getListTasks() {
    return testData;
  }

}


const testData = [
  {
    "id": 55,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 4,
    "campaign": 'Campaign Title',
    "task_type_display": "EVENT",
  }, {
    "id": 56,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "CREATE",

  }, {
    "id": 57,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 5,
    "campaign": 'Campaign Title',
    "task_type_display": "AQUISITION",

  }, {
    "id": 58,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 3,
    "campaign": 'Campaign Title',
    "task_type_display": "POST",

  }, {
    "id": 59,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 2,
    "campaign": 'Campaign Title',
    "task_type_display": "SHARE",

  }, {
    "id": 60,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "CREATE",

  }, {
    "id": 61,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 62,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "CREATE",

  }, {
    "id": 63,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 64,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 8,
    "campaign": 'Campaign Title',
    "task_type_display": "POLLSURVEY",
  },
];
