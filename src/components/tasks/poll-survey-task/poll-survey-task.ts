import { Component } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'poll-survey-task',
  templateUrl: 'poll-survey-task.html'
})
export class PollSurveyTaskComponent {

  public textBox: string;
  public dropDownList;
  public singleChoice;
  public multipleChoice: Array<any> = [];
  public surveyForm: FormGroup;
  public dataList: Array<any>;
  public label: string = 'Required. Please select one';

  constructor() {
    console.log('Hello PollSurveyTaskComponent Component');
  }
  // constructor(private fb: FormBuilder) {
  //   console.log('Hello PollSurveyTaskComponent Component');
  // }

  ngOnInit() {
    this._initTstData();
  }

  // http://plnkr.co/edit/yV94ZjypwBgHAlb0RLK2?p=preview
  /* Survey Form */
  // private _initSurveyForm() {
  //   this.surveyForm = this.fb.group({
  //     answers: this.fb.array([])
  //   });
  // }
  //
  // private _initMultipleChoice() {
  //   const control = <FormArray>this.surveyForm.controls['answers'];
  //   for (var i = 0; i < this.multipleListData.length; i++) {
  //     let answers = this.fb.group({
  //       answer_text: [this.multipleListData[i].text],
  //       answer_id: [this.multipleListData[i].id]
  //     });
  //     control.push(answers);
  //   }
  // }

  /* save multipleChoice data */
  public onChangeCheckBox(id, isChecked) {
    if (isChecked) {
      this.multipleChoice.push(id);
    } else {
      let idx = this.multipleChoice.findIndex(x => x == id);
      this.multipleChoice.splice(idx, 1);
    }
  }

  public onChangeDropDown(data) {
    console.log(data);
  }

  private _initTstData() {
    this.dataList = [{
      text: "Answer 1",
      id: 0
    }, {
      text: "Answer 2",
      id: 1
    }, {
      text: "Answer 3",
      id: 2
    }, {
      text: "Answer 4",
      id: 3
    }, {
      text: "Answer 5",
      id: 4
    }];
  }
}
