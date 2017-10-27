import { Component } from '@angular/core';

@Component({
  selector: 'poll-survey-task',
  templateUrl: 'poll-survey-task.html'
})
export class PollSurveyTaskComponent {

  public textBox: string;
  public dropDownList;
  public singleChoice;
  public multipleChoice: Array<any> = [];
  public answers: Array<any> = [];
  public dataList: Array<any>;
  public label: string = 'Required. Please select one';

  constructor() {
  }

  ngOnInit() {
    this._initTstData();
  }

  // http://plnkr.co/edit/yV94ZjypwBgHAlb0RLK2?p=preview

  /* save multipleChoice data */
  public onChangeCheckBox(isChecked, type) {
    console.log('onChangeCheckBox');
    if (isChecked) {
      this.multipleChoice.push(type);
    } else {
      let idx = this.multipleChoice.findIndex(x => x == type);
      this.multipleChoice.splice(idx, 1);
    }
    // this.answers[2] = this.multipleChoice;
  }

  public onChange(event, type) {
    console.log('onChange', event);
    // this.answers[id] = event;
  }

  public sendData() {
    console.log(this.answers);
  }

  // Добавить к вопросам уникальный Id
  private _initTstData() {
    this.dataList = [{
      text: "Answer 1",
      type: 0,
    }, {
      text: "Answer 2",
      type: 1
    }, {
      text: "Answer 3",
      type: 0
    }, {
      text: "Answer 3",
      type: 2
    }, {
      text: "Answer 4",
      type: 3
    }, {
      text: "Answer 5",
      type: 0
    }, {
      text: "Answer 5",
      type: 2
    }];
  }
}
