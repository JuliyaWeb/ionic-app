import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FormHelper } from "../../../core/helpers/form-helper";
// import { UserService } from "../../../core/auth/user.service";
import { LoginPage } from "../login/login";

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
  providers: [FormHelper]
})
export class ForgotPasswordPage {
  public form: FormGroup;
  public formErrors: Object;

  public showForm: boolean = true;

  constructor(public navCtrl: NavController, private fb: FormBuilder,
              private fh: FormHelper) {
  }
  // private userService: UserService

  ionViewCanEnter() {
    this._buildForm();
  }

  private _buildForm() {
    this.form = this.fb.group({
      'email': ['', Validators.compose([Validators.required, this.fh.emailValidator])]
    });

    this.form.valueChanges
      .subscribe(data => {
        this.formErrors = this.fh.getErrors(this.form, {
          'email': {
            'required': 'Email is required.',
            'invalidEmail': 'Invalid email address.'
          }
        });
      });
  }

  public onSubmit(values: Object): void {
    if (this.form.valid) {
      // forgotPassword
      // this.userService.forgotPassword(values['email'])
      //   .subscribe(
      //     (data) => {
      //       console.info(data);
      //       this.showForm = !this.showForm;
      //     },
      //     (error) => {
      //       console.error(error);
      //       for (const key in error) {
      //         this.formErrors[key] = error[key].join('\n\r');
      //       }
      //     },
      //     () => {
      //     }
      //   )
    }
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
