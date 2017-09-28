import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { LoginForm, RegisterForm, RegisterSecondaryFrom } from './auth-data.model';
import { User } from "../models/user.model";


@Injectable()
export class UserService {
  constructor(private _http: Http) {
  }

  getUserInfo(): Observable<User> {
    return this._http
      .get('/auth/user/')
      .map((response: Response) => new User(response.json()))

  }

  login(data: LoginForm): Observable<any> {
    let params: LoginForm = data;
    return this._http
      .post('/auth/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  registration(data: RegisterForm): Observable<any> {
    let params: RegisterForm = data;
    return this._http
      .post('/users/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  editUser(data: Object): Observable<any> {
    let params: Object = data;
    return this._http
      .put('/users/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  registrationCompletion(data: Object): Observable<any> {
    let params: Object = data;
    return this._http
      .put('/users/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  confirmEmail(code: string): Observable<any> {
    let params: Object = {
      code
    };
    return this._http
      .post('/email-confirm/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  resetEmail(email: string): Observable<any> {
    let params: Object = {
      email
    };
    return this._http
      .post('/email-confirm/repeat/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  forgotPassword(email: string): Observable<any> {
    let params: Object = {
      email
    };
    return this._http
      .post('/forgot-password/', params)
      .map((response: Response) => {
        return response.json();
      })
  }

  resetPassword(data: Object): Observable<any> {
    let params: Object = data;
    return this._http
      .post('/reset-password/', params)
      .map((response: Response) => {
        return response.json();
      })
  }
}
