import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
              private authService: AuthServiceApp) {
  }

  ionViewCanEnter() {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, RegisterForm.validationMessages());
      });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      // this.isLoading = true;
      const data = new RegisterForm({
        username: values['username'],
        email: values['email'],
        password: values['password']
      });

      this.authService.registration(data)
        .subscribe(
          (data) => {
            this.showForm = false;
            console.log('register data', data)
          },
          (error) => {
            for (const key in error) {
              this.formErrors[key] = error[key].join('\n\r');
            }
            // this.isLoading = false;
          },
          () => {
            // this.isLoading = false;
          }
        )
    }
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
