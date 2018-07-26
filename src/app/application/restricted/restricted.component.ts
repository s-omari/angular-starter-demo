import { Component , OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authentication.service';
import { UserService } from '../../shared/services/user.service';
import { AuthService , SocialUser } from 'angularx-social-login';
import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'restricted',
  templateUrl: './restricted.component.html',
  styleUrls: ['./restricted.component.css']
})
export class RestrictedComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

private user;
public currentUser;
private loggedIn;

  constructor(
    private breakpointObserver: BreakpointObserver ,
    private socialAuthService: AuthService ,
    private authService: AuthenticationService ,
    private router: Router,
    public appService: AppService,
    private userService: UserService,
  ) {

  this.user = this.userService.getCurrentUser();

  }
  ngOnInit() {

  }

  setTheme(theme) {
    console.log(theme);
  }

  signOut(): void {
    this.socialAuthService.signOut();
    this.authService.logOut();
    this.router.navigate(['public/login']);
  }
  }
