import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../shared/services/user.service';
import {User , Iuser} from '../../../shared/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {



  user: Iuser;


  name: string;
  email: string;
  password: string;
  role_id: string;
  provider: string = null;
  provider_id: string = null;

  loading = false;
  constructor(
    private router: Router ,
    private activeRoute: ActivatedRoute,
    private userService: UserService
  )  {


  }

  ngOnInit() {
  }


  signUp(): void {

    this.loading = true;

    let user = {
      name: this.name,
      email: this.email,
      role: this.role_id,
      password: this.password
    };

    console.log(user);
    this.userService.createUser(user).subscribe(

      res => {
        console.log(res);

        const data = {
          token_type: res.token_type,
          expires_in: res.expires_in,
          access_token: res.access_token
        };

      // localStorage.setItem('token', JSON.stringify(data.token));
      // localStorage.setItem('currentUser', JSON.stringify(data));
      // this.router.navigate(['restricted']);

      },
      err => console.log(err)
    );

    }


}
