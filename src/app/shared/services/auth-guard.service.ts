import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { AuthenticationService } from './authentication.service';


import { AuthService , SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {


  loggedIn: boolean;
  constructor(
    private auth: AuthenticationService ,
    private socialAuthService: AuthService,
    private router: Router
  ) {


   }


   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      if (localStorage.getItem('currentUser') != null) {
        return true;
      }
      this.router.navigate(['/public/login']);
      return false;
  }

//   canActivate(): boolean {
//     console.log(' canActivate()');
//  //   let loggedIn = false;

// this.socialAuthService.authState.subscribe((user) => {
//   if (user != null) {
//     console.log('social user is true!! ,user != null');
//     this.loggedIn = true;
//     // return true;
//   }
// });

//     if (this.auth.loggedIn() ) {
//       console.log('this.auth.loggedIn()');
//       this.loggedIn = true;
//       // return true;
//     } else {
//       console.log();
//       this.router.navigate(['/public/public/login']);
//       this.loggedIn = true;
//       // return false;
//     }
//    // console.log(loggedIn);

//     return this.loggedIn;
//   }
}
