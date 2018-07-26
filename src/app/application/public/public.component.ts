import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthService , SocialUser } from 'angularx-social-login';


import { AppService } from '../../shared/services/app.service';



@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  private user: SocialUser;
  private loggedIn;
  constructor(
    private router: Router,
    private socialAuthService: AuthService,
    public appService: AppService
  ) {
  }



  ngOnInit() {

    // this.socialAuthService.authState.subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = (user != null);
    //   console.log(user);
    //   if (user != null) {
    //   // localStorage.setItem('currentUser', JSON.stringify(user));
    //   this.router.navigate(['restricted']);
    //   }

    // });
  }

  // signOut(): void {
  //   this.socialAuthService.signOut();
  //   localStorage.removeItem('currentUser');
  // }


}
