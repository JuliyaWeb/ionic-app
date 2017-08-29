export class Card {
  title: string;
  type: string;
  edit: boolean;
  formGroup: any;

  constructor(data) {
      this.title = data.title;
      this.type = data.type;
      this.edit = false;
  }


  setValueFromForm() {

  }

  serializeDataForRequest(): Object {
    let obj = {
      title: this.title,
    };
    return obj;
  }
}
