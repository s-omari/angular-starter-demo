import { Injectable } from '@angular/core';

import { HttpClient , HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// import { Headers } from '@angular/http';
import { User , Iuser } from '../models/user.model';
import { SocialUser } from 'angularx-social-login';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public baseUrl = 'http://resto.thedemo.co//api/';
  public authHeader: HttpHeaders;
  public loginHeader;

  public user;
  token;

  constructor(
    private http: HttpClient
  ) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {

     console.log(currentUser);
     if (currentUser.provider) {
       console.log('social userrrr');
       const socialUser: SocialUser = currentUser;
       this.token = currentUser.authToken;

        this.user = {
        provider: socialUser.provider,
        id: socialUser.id,
        email: socialUser.email,
        name: socialUser.name,
        // photoUrl: socialUser.photoUrl,
        avatar: socialUser.photoUrl,
        firstName: socialUser.firstName,
        lastName: socialUser.lastName,
        authToken: socialUser.authToken,
        idToken: socialUser.idToken,
       };
     } else {
       console.log('not social user');
       const nonSocialUser = currentUser;
       this.token = currentUser.token;
        this.user = {
        id: nonSocialUser.id,
        role_id: nonSocialUser.role_id,
        name: nonSocialUser.name,
        email: nonSocialUser.email,
        avatar: nonSocialUser.avatar,
        settings: nonSocialUser.settings,
        created_at: nonSocialUser.created_at,
        updated_at: nonSocialUser.updated_at,
        provider: nonSocialUser.provider,
        provider_id: nonSocialUser.provider_id,
        token: nonSocialUser.token,
       };
     }
     console.log('currentUser');
     console.log('this.user' , this.user);
     console.log('this.token' , this.token);
    }



  }

  getCurrentUser() {
    return this.user;
  }

  // updateHttpHeader() {
  //   this.authHeader = new HttpHeaders();
  //   if (this.user && this.user.token) {
  //     this.token = this.user.token;
  //     this.authHeader.append('Authorization', `Bearer ${this.user.token}`);
  //   }
  // }

  createUser(user): Observable<any> {

    console.log(user);
    let headers = new HttpHeaders();
    headers = headers
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .set('No-Auth', 'True')
    .set('X-CSRF-TOKEN' , '');

    let body = {
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password,
    };
    const newUser = `name=${user.name}&email=${user.email}&password=${user.password}&role=${user.role}`;

    return this.http.post('http://resto.thedemo.co//api/user/create', newUser , {headers});
  }


}
