import { Component } from '@angular/core';
import { LoadingController, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginPage } from "../login/login";
import { RegisterForm, AuthServiceApp } from "../../../core/auth/index";
import { FormHelper } from "../../../core/helpers/form-helper";
import { TabsPage } from "../../tabs/tabs";
import { ProfilePage } from "../../profile/profile";

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
    this.fieldsCode = ['part-code1', 'part-code2', 'part-code3'];
    // get activation code
    this._enterCode('123456');
    // this._enterCode(navParams.get('code') || null);
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
      'part-code2': ['', [Validators.required]],
      'part-code3': ['', [Validators.required]]
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

  private _enterCode(code) {
    if (code) {
      let arr = code.match(/\d{1,2}/g);
      for (let i = 0; i < arr.length; i++) {
        this.formActivation.controls[`part-code${i + 1}`].patchValue(arr[i]);
      }
      this.navCtrl.setRoot(ProfilePage);
      // this.navCtrl.setRoot(TabsPage);
     localStorage.setItem('register_completion','true');
      // this._confirmCode(code);
    }
  }

  private _confirmCode(code: string) {
    this.authService.confirmEmail(code)
      .subscribe(
        (data) => {
          this.navCtrl.setRoot(TabsPage);
        },
        (error) => {
          console.error(error);
        }
      )
  }

  public goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }


}
