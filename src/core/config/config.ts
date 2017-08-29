import { Injectable } from "@angular/core";
import { ENV as prod } from './environment.prod';
import { ENV as dev } from './environment.dev';

const ENVS = {
  prod,
  dev,
};

@Injectable()
export class Config {
  _ENV: string;
  AUTH_COOKIE_NAME: string;
  USER_STORAGE_NAME: string;
  APPLICATION_TYPE_HEADER: string;
  APPLICATION_TYPE_VALUE: string;
  constructor(){
    this._ENV = ENVS[process.env.BUILD_ENV || 'dev'];
    this.AUTH_COOKIE_NAME = 'token';
    this.USER_STORAGE_NAME = 'session';
    this.APPLICATION_TYPE_HEADER = 'X-Application-Type';
    this.APPLICATION_TYPE_VALUE = '2';
  }

  get API_BASE_URL(): string {
    return this._ENV['API_URL'];
  }
}
