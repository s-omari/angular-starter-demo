import { Injectable } from '@angular/core';


import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }



  loginUser(email , password): Observable<any> {

    console.log(email , password);


      let headers = new HttpHeaders();
      headers = headers
      .set('Content-Type', 'application/x-www-form-urlencoded');

    const creds = `email=${email}&password=${password}`;

    return this.http.post(
      'http://resto.thedemo.co//api/user/login' , creds , {headers}
    );

  }

  loggedIn() {
    // return localStorage.getItem('authorizationData.token');
    return !!localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('currentUser');
  }

}
