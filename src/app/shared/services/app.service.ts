import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public appTheme: string;

  constructor() {
    if (localStorage.getItem('appTheme')) {
      this.appTheme = (localStorage.getItem('appTheme'));
    } else {
      this.appTheme = 'purple-theme';
    }
  }
  setTheme(theme: string) {
    this.appTheme = theme;
    localStorage.setItem('appTheme', theme);
  }

}
