import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { RegisterForm, AuthServiceApp } from "../../../core/auth/index";
import { FormHelper } from "../../../core/helpers/form-helper";

// @IonicPage({
//   name: 'register'
// })
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [FormHelper]
})
export class RegisterPage {
  public form: FormGroup;
  public formActivation: FormGroup;
  public fieldsCode: Array<any>;
  public formErrors: Object;
  public showForm: boolean = true;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private fh: FormHelper,
              private loadingCtrl: LoadingController,
              private authService: AuthServiceApp) {
  }

  ionViewCanEnter() {
    this._buildForm();
    this._enterCode();
    this.fieldsCode = ['part-code1', 'part-code2', 'part-code3'];
    console.log(this.formActivation)
  }

  private _buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
    });

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, RegisterForm.validationMessages());
      });

    this.formActivation = this.fb.group({
      'part-code1': ['', [Validators.required]],
      'part-code2': [{value: '', disabled: true}, [Validators.required]],
      'part-code3': [{value: '', disabled: true}, [Validators.required]]
    });

    this.formActivation.valueChanges
      .subscribe(data => {
        if (data['part-code1'].length() == 2) {
          console.log(data);
        }

      });
  }

  private _enterCode() {
    this.formActivation.valueChanges
      .subscribe(data => {
        if (data['part-code1'].length() == 2) {
          this._getControlCode('part-code2', {disabled: false, focus: true});
        }
      });
  }

  private _getControlCode(field, data) {
    return this.formActivation.controls[field].setValue((data));
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {

      let loading = this.loadingCtrl.create({
        content: 'Please wait...',
        spinner: 'bubbles',
      });
      loading.present();

      const data = {email: values['email']};

      this.authService.registration(data)
        .subscribe(
          (data) => {
            this.showForm = false;
            console.log('register data', data)
          },
          (error) => {
            for (const key in error) {
              console.log(error);
              this.formErrors[key] = error[key].join('\n\r');
            }
            loading.dismiss();
          },
          () => {
            loading.dismiss();
          }
        )
    }
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
