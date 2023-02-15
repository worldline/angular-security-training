import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable()
// This service gets the Content-Security-Policy and a random nonce from a REST api endpoint /api/csp

export class CspConfig {

  private _config: any;
  private _nonce: any;
  private http: HttpClient;

  // can't use classical Angular DI for HttpClient here, because of "cyclic dependency" issues
  // Use Injector service to instanciate HttpClient 
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
  }

  // Load Content-Security-Policy from a REST api endpoint
  // The returned data will contain the CSP configuration ('value') and the a random generated nonce ('nonce')
  load(): Promise<any> {
    return this.http.get('/api/csp')
      .toPromise()
      .then((data: any) => {
        this._config = data['value'] ?? '';
        this._nonce = data['nonce'] ?? '';
        return data;
      })
  }

  get config(): any {
    return this._config;
  }

  get nonce(): any {
    return this._nonce;
  }
}
