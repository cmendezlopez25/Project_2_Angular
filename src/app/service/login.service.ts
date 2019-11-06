import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {User} from '../user';
import { UrlList } from '../service/url.list';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlList = new UrlList();

  loginUrl = this.urlList.loginUrl;
  registerUrl = this.urlList.registerUrl;

  constructor(private http: HttpClient) { }

  loginUser(user: User): Observable<User> {
    return this.http.post<User>(this.loginUrl, user);
  }

  registerUser(user: User): Observable<User> {
    return this.http.post<User>(this.registerUrl, user);    
  }
}
