import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { UserInput } from '../github-api/Inputs';
import { User } from '../github-api/Models';

@Injectable()
export class AboutmeApiService {

  readonly host = 'https://gh-aboutme.herokuapp.com';

  constructor(private http: Http) { }

  getUser(username: string): Observable<User> {
    const requestUrl = `${this.host}/users/${username}`;
    return this.http.get(requestUrl)
      .map(res => new User(res.json()));
  }
}
