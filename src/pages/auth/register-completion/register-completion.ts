import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterSecondaryFrom, AuthServiceApp } from "../../../core/auth/index";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormHelper } from "../../../core/helpers/form-helper";
import { TabsPage } from "../../tabs/tabs";

@Component({
  selector: 'page-register-completion',
  templateUrl: 'register-completion.html',
  providers: [FormHelper]
})
export class RegisterCompletionPage {
  public isReady: boolean = true;
  public form: FormGroup;
  public formErrors: Object;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder,
              private fh: FormHelper,
              private authService: AuthServiceApp) {

    // this._confirmEmail(navParams.get('code') || null);
  }

  ionViewCanEnter() {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      'first_name': ['', Validators.compose([Validators.required, this.fh.nameValidator, Validators.minLength(3)])],
      'last_name': ['', Validators.compose([Validators.required, this.fh.nameValidator, Validators.minLength(3)])],
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      'confirm_password': ['', Validators.compose([Validators.required])],
    }, {validator: this.fh.matchingPasswordsValidator('password', 'confirm_password')});

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, RegisterSecondaryFrom.validationMessages());
      });
  }

  public onSubmit(form: FormGroup, values: Object) {
    if (!form.valid) return;
    const data = new RegisterSecondaryFrom({
      first_name: values['first_name'],
      last_name: values['last_name'],
      username: values['username'],
      password: values['password'],
      confirm_password: values['confirm_password'],
    });
    this.authService.registrationCompletion(data)
      .subscribe(
        (data) => {
          console.info('authService.registrationCompletion', data);
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => {
          console.error('authService.registrationCompletion', error);
        }
      );
  }

  // private _confirmEmail(code: string) {
  //   this.authService.confirmEmail(code)
  //     .subscribe(
  //       (data) => {
  //         console.info('authService.confirmEmail', data);
  //         this.isReady = true;
  //       },
  //       (error) => {
  //         console.error(error);
  //         // this.router.navigate(['/reset/email']);
  //       }
  //     )
  // }

}
