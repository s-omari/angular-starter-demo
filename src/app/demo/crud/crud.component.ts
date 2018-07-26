import { Component, OnInit , Input } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Router, NavigationStart, NavigationEnd , ActivatedRoute } from '@angular/router';

import * as CrudConfig from './crudConfig';
// import { FormGroup , FormsModule , ReactiveFormsModule} from '@angular/forms';
 import { DynamicFormControlModel, DynamicFormService } from '@ng-dynamic-forms/core';

@Component({
  selector: 'crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
   formModel: DynamicFormControlModel[];
  // formGroup: FormGroup;


    // Layout properties
    rightExpanded = false;
    showRight = true;
    centerExpanded = false;
    showCenter = true;
    rightContent = 'hello' ;

    // crud properties
    entityType;
    crudConfig ;
    selectedEntity: any;
    entities: any;


  constructor(
    private breakpointObserver: BreakpointObserver ,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.crudConfig = CrudConfig.categoriesConfig;
    this.entities = CrudConfig.categoriesList;
    this.closeRight();
   }

  ngOnInit() {
    this.initConfigfromParams();


  }


  initConfigfromParams() {

    const params = this.activatedRoute.params.subscribe(
      (params) => {
    this.entityType =  params['entityType'];
    this.selectedEntity = '';
    this.closeRight();
    console.log(params);
    switch (params['entityType']) {
      case 'category':
      this.crudConfig = CrudConfig.categoriesConfig;
      this.entities = CrudConfig.categoriesList;
      this.formModel = CrudConfig.categoriesConfig.FormConfig;
          break;
      case 'user':
      this.crudConfig = CrudConfig.usersConfig;
      this.entities = CrudConfig.usersList;
      this.formModel = CrudConfig.usersConfig.FormConfig;
          break;
      default:
      console.log('no entityType params');
      this.crudConfig = null;
  }
   });
  }


  // Crud Operations
  selectEntity(entity) {
    console.log('entity selected');
    this.rightContent = 'ViewSelected';
    this.shrinkRight();
    this.selectedEntity = entity;
  }
  createEntity(entity) {
    console.log(entity);
  }
  updateEntity(entity) {
    console.log(entity);
  }
  deleteEntity(event) {
    const remove = window.confirm('are you sure you want to delete this entity?' + event);
    if (remove) {
      console.log(event);

    }
  }



  // Layout Management
  setRightContent(event: string) {
    console.log(event);
    this.rightContent = event;
  }

  openUpdateForm() {

  }
  openCreateForm() {
    this.selectedEntity = '';
    this.rightContent = 'CreateForm';
    this.shrinkRight();

  }


  closeRight() {
    this.selectedEntity = '';
    this.showRight = false;
    this.rightContent = '';
    this.showCenter = true;
    this.centerExpanded = true;
  }
  expandRight() {
    this.showRight = true;
    this.rightExpanded = true;
    this.showCenter = false;
  }
  shrinkRight() {
    this.showRight = true;
    this.rightExpanded = false;
    this.showCenter = true;
    this.centerExpanded = false;
  }

}
