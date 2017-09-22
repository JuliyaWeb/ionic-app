import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NavController } from "ionic-angular";
import { FormHelper } from "../../../core/helpers/form-helper";
// import { UserService } from "../../../core/auth/user.service";
import { LoginPage } from "../login/login";

@Component({
  selector: 'forgot-password-reset',
  templateUrl: 'forgot-password-reset.html'
})
export class ForgotPasswordResetComponent {

  public form: FormGroup;
  public formErrors: Object;

  public showForm: boolean = true;
  // public isLoading: boolean;
  // private _code: string;

  constructor(public navCtrl: NavController,
              private fb: FormBuilder,
              private fh: FormHelper) {
    // get params
  // private userService: UserService
  }

  ionViewCanEnter() {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      confirm_password: ['', Validators.required]
    }, {validator: this.fh.matchingPasswordsValidator('password', 'confirm_password')});

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, {
          'password': {
            'required': 'Password is required.',
            'minlength': 'Password isn\'t long enough, minimum of 8 characters.'
          },
          'confirm_password': {
            'required': 'Confirm Password is required.',
            'mismatchedPasswords': 'Passwords do not match.'
          }
        });
      });
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
