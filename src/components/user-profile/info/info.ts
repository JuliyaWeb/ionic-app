import { Component, Input } from '@angular/core';
import { InitProfileDataService } from "../shared/providers/init-profile-data";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { ModalController } from "ionic-angular";
import { AutocompleteComponent } from "../../autocomplete/autocomplete";

@Component({
  selector: 'info',
  templateUrl: './info.html',
  providers: [InitProfileDataService]
})
export class InfoComponent {
  @Input() card;

  /* forms */
  public aboutForm: FormGroup;
  public basicInfoForm: FormGroup;
  public workEducationForm: FormGroup;
  public homeLifeForm: FormGroup;

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
              private _profileDataService: InitProfileDataService) {
  }

  ngOnInit(): void {
    this._switchCard(this.card.type);
  }

  private _switchCard(type) {
    switch (type) {
      case 'about_you':
        this.aboutForm = this._initAboutForm();
        break;
      case 'basic_info':
        this.basicInfoForm = this._initBasicInfoForm();
        this._initSelectGender();
        this._initSelectAge();
        this._initSelectRelationship();
        this._initSelectInterestedIn();
        break;
      case 'work_education':
        this.workEducationForm = this._initWorkEducationForm();
        this._initSelectEducation();
        this._initSelectOccupation();
        this._initSelectIncome();
        break;
      case 'home_life':
        break;
    }
  }

  public onSubmit(data) {

  };

  public showModal() {
    let modal = this.modalCtrl.create(AutocompleteComponent);
    modal.onDidDismiss(data => {
      if (data) {
        this.basicInfoForm.controls['location'].patchValue(data.address);
        console.log('data', data);
      }
    });
    modal.present();
  }

  private _initAboutForm(): FormGroup {
    return this.formBuilder.group({
      'about': ['']
    });
  }

  private _initBasicInfoForm(): FormGroup {
    return this.formBuilder.group({
      'date': [''],
      'gender': ['2'],
      'location': [''],
      'interested': ['0'],
      'relationship_status': ['0']
    });
  }

  private _initWorkEducationForm(): FormGroup {
    return this.formBuilder.group({
      'occupation': ['0'],
      'education': ['0'],
      'income': ['0']
    });
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
