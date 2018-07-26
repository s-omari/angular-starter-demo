import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CdkAccordionItem } from '@angular/cdk/accordion';
import { matExpansionAnimations, MatExpansionPanelState } from '@angular/material';
import {trigger, animate, state, style, transition} from '@angular/animations';
@Component({
  selector: 'accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  animations: [matExpansionAnimations.bodyExpansion],
  // animations: [
  //   trigger('bodyExpansion', [
  //     state('collapsed', style({height: '0px', display: 'none'})),
  //     state('expanded', style({height: '*', display: 'block'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4,0.0,0.2,1)')),
  //   ]),
  // ],
})
export class AccordionItemComponent extends CdkAccordionItem implements OnInit {

 
  @Input()  item;
  @Input() activeItem;
  @Output() private onSelect = new EventEmitter();

  getExpandedState(): MatExpansionPanelState {
    return this.expanded ? 'expanded' : 'collapsed';
  }
  toggleAccordion(): void {
    this.toggle();
  }

  onSelectItem(item) {
    this.onSelect.emit(item);
  }

  ngOnInit() { }

}
