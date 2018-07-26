import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, ActivatedRoute } from '@angular/router';
import { NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

// import { AuthenticationService } from '../../shared/services/authentication.service';
import { UserService } from '../shared/services/user.service';
import { AuthService, SocialUser } from 'angularx-social-login';
import { AppService } from '../shared/services/app.service';

// menu items
import { Items } from './demo-menu';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private user;
  public currentUser;
  private loggedIn;
  public menuItems = Items;
  public activatedUrl: string;


  constructor(
    private breakpointObserver: BreakpointObserver,
    private socialAuthService: AuthService,
    private router: Router,
    public appService: AppService,
    private userService: UserService,
    public activatedRoute: ActivatedRoute
  ) {

    this.user = this.userService.getCurrentUser();


    this.activatedUrl = this.router.url;
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.activatedUrl = event.url;
      }
    });

  }
  ngOnInit() {

  }

  setTheme(theme) {
    console.log(theme);
  }

  signOut(): void {
    this.socialAuthService.signOut();
    //   this.authService.logOut();
    this.router.navigate(['public/login']);
  }

  selectMenuItem(item) {
    if (item.route !== '') {
      if (item.params) {
        this.router.navigate([item.route, item.params]);
      } else {
        this.router.navigate([item.route]);
      }
    }

  }

}
