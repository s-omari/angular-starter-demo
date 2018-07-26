import { Component, OnInit , Input , Output , EventEmitter,
  ChangeDetectionStrategy } from '@angular/core';

  import { CdkAccordionItem } from '@angular/cdk/accordion';
import { matExpansionAnimations, MatExpansionPanelState } from '@angular/material';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuComponent implements OnInit  {

  @Input()  menuItems;
  @Input() activeItem;
  @Output() private onSelect = new EventEmitter();

  constructor() {
  }


  ngOnInit() {
  }

  onSelectItem(item) {
    this.onSelect.emit(item);
  }

}
