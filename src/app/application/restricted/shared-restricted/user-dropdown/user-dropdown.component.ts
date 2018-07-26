import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'user-dropdown',
  templateUrl: './user-dropdown.component.html',
  styleUrls: ['./user-dropdown.component.scss']
})
export class UserDropdownComponent implements OnInit {

  @Input() user;
  @Output() onSignOut = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  signOut() {
    this.onSignOut.emit();
  }

}
