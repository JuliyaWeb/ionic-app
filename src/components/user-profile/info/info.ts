import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { AutocompleteComponent } from "../../autocomplete/autocomplete";
import { FormHelper } from "../../../core/helpers/form-helper";
import { InitProfileDataService } from "../shared/index";
import { User } from "../../../core/models/user.model";

@Component({
  selector: 'info-card',
  templateUrl: './info.html',
  providers: [InitProfileDataService, FormHelper]
})
export class InfoComponent {
  @Input() userData: User;
  public cards: Array<Object> = [];
  public registerCompletion: boolean = false;

  /* forms */
  public aboutForm: FormGroup;
  public basicInfoForm: FormGroup;
  public workEducationForm: FormGroup;
  public passwordForm: FormGroup;
  public formErrors: Object;

  /* select data */
  public selectGenderData: Array<any>;
  public selectAgeData: Array<any>;
  public selectEducationData: Array<any>;
  public selectIncomeData: Array<any>;
  public selectOccupationData: Array<any>;
  public selectRelationshipData: Array<any>;
  public selectinterestedInData: Array<any>;

  constructor(private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private fh: FormHelper,
              private _profileDataService: InitProfileDataService) {
  }

  ngOnInit(): void {
    // this.registerCompletion = (localStorage.getItem('register_completion') == 'true');
    this._initCards();
    // about you form
    this._initAboutForm();
    // basic info form
    this._initBasicInfoForm();
    this._initSelectGender();
    this._initSelectAge();
    this._initSelectRelationship();
    this._initSelectInterestedIn();
    // work education form
    this._initWorkEducationForm();
    this._initSelectEducation();
    this._initSelectOccupation();
    this._initSelectIncome();
    // register completion form
    if (this.registerCompletion) {
      this._initPasswordForm();
    }
    this._setDataUserInfo(this.userData);
  }

  public toggleCard(card) {
    card.edit = !card.edit;
  }

  private _initCards() {
    let data = this._profileDataService.getprofileCardsData();
    data.map((item) => {
      item['edit'] = this.registerCompletion;
      this.cards.push(item)
    });
    if (!this.registerCompletion) {
      this.cards.pop()
    }
  }

  public showModal() {
    let modal = this.modalCtrl.create(AutocompleteComponent, null, {cssClass: 'autocomplete'});
    modal.onDidDismiss(data => {
      if (data) {
        this.basicInfoForm.controls['location'].patchValue(data.address);
        console.log('data', data);
      }
    });
    modal.present();
  }

  private _initAboutForm() {
    this.aboutForm = this.formBuilder.group({
      'first_name': ['', Validators.compose([Validators.required, this.fh.nameValidator, Validators.minLength(3)])],
      'last_name': ['', Validators.compose([Validators.required, this.fh.nameValidator, Validators.minLength(3)])],
      'about': ['']
    });
  }

  private _initBasicInfoForm() {
    this.basicInfoForm = this.formBuilder.group({
      'date': [''],
      'gender': ['2'],
      'location': [''],
      'interested': ['0'],
      'relationship_status': ['0']
    });
  }

  private _initWorkEducationForm() {
    this.workEducationForm = this.formBuilder.group({
      'occupation': ['0'],
      'education': ['0'],
      'income': ['0']
    });
  }

  private _initPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm_password': ['', Validators.compose([Validators.required])],
    }, {validator: this.fh.matchingPasswordsValidator('password', 'confirm_password')});
  }

  private _setDataUserInfo(userInfo) {
    console.log(userInfo);
    userInfo.first_name && (this.aboutForm.patchValue({first_name: userInfo.first_name}));
    userInfo.last_name && (this.aboutForm.patchValue({last_name: userInfo.last_name}));
    this.workEducationForm.patchValue(userInfo.info);
    this.basicInfoForm.patchValue(userInfo.info);
  }

  private _formGrops() {
    let formGrops = Object.assign(
      this.aboutForm.controls,
      this.basicInfoForm.controls,
      this.workEducationForm.controls);
    if (this.registerCompletion) {
      formGrops = Object.assign(formGrops, this.passwordForm.controls);
    }
    return formGrops;
  }

  // get data from form for request
  public serializeDataForRequest() {
    const formControls = this._formGrops();
    let data: Object = {info: {}};
    let checkFields = ['first_name', 'last_name', 'username', 'password', 'confirm_password'];

    for (let field in formControls) {
      if (checkFields.indexOf(field) > -1) {
        data[field] = formControls[field].value;
      } else {
        data['info'][field] = formControls[field].value;
      }
    }
    return data;
  }

  private _initSelectGender() {
    this.selectGenderData = this._profileDataService.getGenderData();
  }

  private _initSelectAge() {
    this.selectAgeData = this._profileDataService.getAgeData();
  }

  private _initSelectEducation() {
    this.selectEducationData = this._profileDataService.getEducationData();
  }

  private _initSelectIncome() {
    this.selectIncomeData = this._profileDataService.getIncomeData();
  }

  private _initSelectOccupation() {
    this.selectOccupationData = this._profileDataService.getOccupationData();
  }

  private _initSelectRelationship() {
    this.selectRelationshipData = this._profileDataService.getRelationshipData();
  }

  private _initSelectInterestedIn() {
    this.selectinterestedInData = this._profileDataService.getInterestedInData();
  }

}
