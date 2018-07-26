import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {


  @Input() selectedTheme;
  @Output() onSelectTheme = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  selectTheme(theme) {
    console.log(theme);
    this.onSelectTheme.emit(theme);

  }
}
