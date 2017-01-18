import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserInput } from './Inputs';
import { User } from './Models';

@Injectable()
export class ApiService {

  readonly host = 'https://api.github.com';

  constructor(private http: Http) { }

  getUser (username: string): Observable<User> {
    const requestUrl = `${this.host}/users/${username}`;
    return this.http.get(requestUrl)
      .map(res => new User(res.json()));
  }
}
