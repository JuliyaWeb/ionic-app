import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptionsArgs, Request, Response, ConnectionBackend, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { Session } from './auth/session';
import { Config } from './config/config';

@Injectable()
export class ApiHttp extends Http {

  constructor(public _backend: ConnectionBackend,
              public _defaultOptions: RequestOptions,
              private _session: Session,
              private _config: Config) {
    super(_backend, _defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url == 'object') {
      let req = <Request> url;
      const headers = req.headers || new Headers();
      const token = this._session.token;

      if (!req.url.includes('http')) {
        req.url = this._config.API_BASE_URL + req.url;
      }
      if (token) {
        headers.append('Authorization', `Token ${token}`);
      }
      headers.append(this._config.APPLICATION_TYPE_HEADER, this._config.APPLICATION_TYPE_VALUE);
      req.headers = headers;
      url = req;
    }
    return super.request(url, options)
      .catch((error: any) => {
        return Observable.throw(error.json() || 'Server error')
      });
  }

}
