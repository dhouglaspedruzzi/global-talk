import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  apiUrl = 'https://gateway.watsonplatform.net/language-translator/api/v2/translate';

  constructor(public http: HttpClient) {}

  traduzir(texto, source, target) {
    return this.http.post(
      this.apiUrl,
      JSON.stringify({ text: texto, source: source, target: target }),
      {
        withCredentials: true,
        headers: new HttpHeaders()
          .append('Authorization', 'Basic ' + btoa('aed011cb-dbf5-46b1-b188-1985dd1bb40b:xhhxmv4vUxjn'))
          .append('Accept', 'application/json')
          .append('Content-Type', 'application/json')
          .append('Access-Control-Allow-Origin', '*')
          .append('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT')
      }
    ).toPromise();
  }

}
