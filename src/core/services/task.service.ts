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
    "task_type_display": "Type Task",
  }, {
    "id": 56,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 1,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 57,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 2,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 58,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 3,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 59,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 4,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  }, {
    "id": 60,
    "title": "Task Title",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas mo- lestias excepturi sint occaecati cupiditate non.",
    "due_date": "2017-08-29",
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

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
    "task_type_display": "Type Task",

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
    "task_type": 6,
    "campaign": 'Campaign Title',
    "task_type_display": "Type Task",

  },
]
