import { Component } from '@angular/core';
import { AppService } from './shared/services/app.service';




import { Router, ActivatedRoute, Event, NavigationStart, NavigationEnd } from '@angular/router';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Starter';
  loading: boolean;
 // language: string;

  constructor(
    private router: Router,
    public appService: AppService
  ) {
    // this.language = localStorage.getItem('language') ? localStorage.getItem('language') : 'en';
    // this.translate.use(this.language);

    // this code is used to show/hide the progress bar on route change
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd) {
        this.loading = false;
      }
    });
  }



}
