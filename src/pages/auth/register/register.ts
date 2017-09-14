import { Component } from '@angular/core';
import { LoadingController, NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { RegisterForm, AuthServiceApp } from "../../../core/auth/index";
import { FormHelper } from "../../../core/helpers/form-helper";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [FormHelper]
})
export class RegisterPage {
  public form: FormGroup;
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
  }

  private _buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
    });

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, RegisterForm.validationMessages());
      });
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
