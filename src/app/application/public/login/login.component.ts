import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../shared/services/authentication.service';


// social login
import {  AuthService, SocialUser , GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  loading = false;
  invalidCredentials = false;

  private user: SocialUser;
  private loggedIn;
  constructor (
    private router: Router ,
    private auth: AuthenticationService,
    private socialAuthService: AuthService
  )  {
  }


  ngOnInit() {
    localStorage.removeItem('currentUser');
    // this.SubscribeLoginState();
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);

    //   if (user != null) {
    // //    localStorage.setItem('currentUser', JSON.stringify(user));
    //     this.router.navigate(['restricted']);
    //     }
    // });
  }


  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (result) => {
        this.SubscribeLoginState();
        this.router.navigate(['restricted']);
      // if (value) {
      //   console.log(value , '66666');
      // }
    });
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }


  login(): void {
    this.loading = true;
    this.auth.loginUser(this.email , this.password).subscribe(

      (res) => {
        console.log(res);

        const data = {
          token: res.token,
          id: res.user.id,
          role_id: res.user.role_id,
          name: res.user.name,
          email: res.user.email,
          avatar: res.user.avatar,
          settings: res.user.settings,
          created_at: res.user.created_at,
          updated_at: res.user.updated_at,
          provider: res.user.provider,
          provider_id: res.user.provider_id,
        };

      this.loading = false;
      this.invalidCredentials = true;

  //    localStorage.setItem('token', JSON.stringify(data.token));
      localStorage.setItem('currentUser', JSON.stringify(data));

     this.router.navigate(['restricted']);
      },
      err => console.log(err)
    );
  //  this.SubscribeLoginState();
    }


    SubscribeLoginState() {
      console.log('SubscribeLoginState');
      this.socialAuthService.authState.subscribe(
        (user) => {
        this.user = user;
        this.loggedIn = (user != null);

        if (user != null) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          }
      });
      if (this.auth.loggedIn()) {
        this.loggedIn = true;
      }
      if (this.loggedIn) {
        console.log('logged in form SubscribeLoginState');
        this.router.navigate(['restricted']);
    }
    }

  }
