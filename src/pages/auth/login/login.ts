import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterPage } from "../register/register";
import { TabsPage } from "../../tabs/tabs";
import { LoginForm, AuthServiceApp } from "../../../core/auth/index";
import { FormHelper } from "../../../core/helpers/form-helper";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [FormHelper]
})
export class LoginPage {
  public form: FormGroup;
  public formErrors: Object;

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
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, LoginForm.validationMessages());
      });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      // this.isLoading = true;
      this.authService.login(new LoginForm(values))
        .subscribe(
          (data) => {
            console.log(data,'login');
            this.navCtrl.setRoot(TabsPage);
          },
          (error) => {
            console.error(error);
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

  public goToRegister() {
    this.navCtrl.setRoot(RegisterPage);
  }

  goToProfile() {
    this.navCtrl.setRoot(TabsPage);
  }

}
