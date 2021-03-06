import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


@Injectable()
export class AnimalService {

  private apiUrl = 'http://example.net/api/';

  constructor (private http :Http) {}

  getCats(next :any) :any {
    return this.http.get(next || this.apiUrl + 'cats')
      .map(this.extractData)
      .catch(this.handleError)
  }

  getDogs(next :any) :any {
    return this.http.get(next || this.apiUrl + 'dogs')
      .map(this.extractData)
      .catch(this.handleError)
  }

  getFish(next :any) :any {
    return this.http.get(next || this.apiUrl + 'fish')
      .map(this.extractData)
      .catch(this.handleError)
  }

  private handleError (error :Response | any) {
    let errMsg :string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${ error.status } - ${ error.statusText || '' } ${ err }`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  private extractData(res :Response) {
    let body = res.json();
    return body || { };
  }
}
