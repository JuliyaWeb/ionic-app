import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Config } from '../config/config';
import { User } from "../models/user.model";

@Injectable()
export class Session {
  private _AUTH_COOKIE_NAME: string;
  private _USER_STORAGE_NAME: string;

  constructor(private _config: Config, private _cookieService: CookieService) {
    this._AUTH_COOKIE_NAME = this._config.AUTH_COOKIE_NAME;
    this._USER_STORAGE_NAME = this._config.USER_STORAGE_NAME;
  }

  clean() {
    this._cookieService.removeAll();
    localStorage.removeItem(this._USER_STORAGE_NAME);
  }

  get token(): string {
    return this._cookieService.get(this._AUTH_COOKIE_NAME) || '';
  }

  set token(value: string) {
    this._cookieService.put(this._AUTH_COOKIE_NAME, value);
  }

  get currentUser(): User {
    // let data = this._localStorageService.get(this._USER_STORAGE_NAME) || {};
    let data = localStorage.getItem(this._USER_STORAGE_NAME) || {};
    // JSON.parse(data);
    return new User(data);
  }

  set currentUser(value: User) {
    localStorage.setItem(this._USER_STORAGE_NAME, JSON.stringify(value));
  }
}
