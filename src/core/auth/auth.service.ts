import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { LoginForm, RegisterForm, RegisterSecondaryFrom } from './auth-data.model';
import { User } from "../models/user.model";

import { UserService } from './user.service';
import { Session } from './session';

import { Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthServiceApp {
  public userLoggedIn$: Subject<User>;

  constructor(
    private _session: Session,
    private _userService: UserService,
    ) {
      this.userLoggedIn$ = new Subject<User>();
  }

  private _newSession(token:string, user: User) {
    console.info('_newSession', token);
    this._session.token = token;
    this._session.currentUser = user;
    this.userLoggedIn$.next(user);
  }

  private _restoreSession() {
    if(this.isActiveSession()) {
      console.info('_restoreSession', this._session.token);
      if(!this._session.currentUser.isValid()) {
         this._userService.getUserInfo()
           .subscribe(
             (user) => {
               this._session.currentUser = user;
               console.info('this.userLoggedIn$.next', user);
               this.userLoggedIn$.next(user);
             }
           )
      } else {
        this.userLoggedIn$.next(this.getUser());
      }
    }
  }

  initSession(token?: string, user?: User) {
    if(token && user){
      this._newSession(token, user);
    } else {
      this._restoreSession();
    }
  }

  isActiveSession(): boolean {
    return !!this._session.token;
  }

  getUser() {
    return this._session.currentUser;
  }

  login(data: LoginForm): Observable<User> {
    this.logout();
    return this._userService.login(data)
      .map((response) => {
        const user: User = new User(response.user);
        this.initSession(response.token, user);
        return user;
      })
  }

  registration(data: RegisterForm): Observable<User> {
    this.logout();
    console.log('registration');
    return this._userService.registration(data)
      .map((response) => {
        const user: User = new User(response);
        return user;
      })
  }

  registrationCompletion(data: Object): Observable<User> {
    return this._userService.registrationCompletion(data)
      .map((response) => {
        const user: User = new User(response);
        this.initSession(this._session.token, user);
        return user;
      })
  }

  confirmEmail(data: string): Observable<any> {
    this.logout();
    return this._userService.confirmEmail(data)
      .map((response) => {
        console.log('RESPONSE', response);
        if (response['token']) {
          this._session.token = response['token'];
          console.log('this._session.token', this._session.token);
        }
        //const user: User = new User(response);
        return response;
      })
  }

  saveUserData(data:Object, ):Observable<any> {
    return this._userService.editUser(data)
      .map((response) => {
        let user: User = this.getUser();
        console.log(user);
        return user;
      })
  }

  logout() {
      // send
    this._session.clean();
    localStorage.clear();
  }
}
