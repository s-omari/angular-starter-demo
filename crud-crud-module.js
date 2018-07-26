(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crud-crud-module"],{

/***/ "./src/app/demo/crud/components/crud-form/crud-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-form/crud-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"formGroup\">\n                \n  <!-- <dynamic-material-form\n  (blur)=\"onBlur($event)\"\n  (change)=\"onChange($event)\"\n  (focus)=\"onFocus($event)\"\n  (matEvent)=\"onMatEvent($event)\"></dynamic-material-form> -->\n\n  <dynamic-material-form\n  [group]=\"formGroup\"\n  [model]=\"formModel\"\n  ></dynamic-material-form>\n\n\n  <button type=\"button\" (click)=\"addItem()\">Add item</button>\n  <button type=\"button\" (click)=\"clear()\">Remove all items</button>\n  \n</form>\n"

/***/ }),

/***/ "./src/app/demo/crud/components/crud-form/crud-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-form/crud-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/crud/components/crud-form/crud-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-form/crud-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: CrudFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudFormComponent", function() { return CrudFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrudFormComponent = /** @class */ (function () {
    function CrudFormComponent(dynamicFormService) {
        this.dynamicFormService = dynamicFormService;
    }
    CrudFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.dynamicFormService.createFormGroup(this.formModel);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CrudFormComponent.prototype, "formModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CrudFormComponent.prototype, "entity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CrudFormComponent.prototype, "rightContent", void 0);
    CrudFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'crud-form',
            template: __webpack_require__(/*! ./crud-form.component.html */ "./src/app/demo/crud/components/crud-form/crud-form.component.html"),
            styles: [__webpack_require__(/*! ./crud-form.component.scss */ "./src/app/demo/crud/components/crud-form/crud-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__["DynamicFormService"]])
    ], CrudFormComponent);
    return CrudFormComponent;
}());



/***/ }),

/***/ "./src/app/demo/crud/components/crud-table/crud-table.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-table/crud-table.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th *ngFor=\"let column of columns\">\n                {{column}}\n            </th>\n        </tr>\n    </thead>\n    <tbody>\n            <tr \n            *ngFor=\"let entity of entities\" \n            (click)=\"selectEntity(entity)\"\n            [class.selected]=\"entity?.id == selectedEntityId\" >\n                <td scope=\"row\"> {{ entity.id }} </td>\n                <td *ngFor=\"let column of columns\">\n                        {{entity[column]}}\n                </td>                \n            </tr>\n    </tbody>\n</table> -->\n\n<div class=\"d-flex flex-column\">\n    <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\n</mat-form-field>\n      \n   \n        <table mat-table [dataSource]=\"dataSource\" matSort> \n        <ng-container *ngFor=\"let column of displayedColumns\" cdkColumnDef={{column}}>\n            <th mat-header-cell *cdkHeaderCellDef mat-sort-header> {{column | titlecase}} </th>\n            <td mat-cell *cdkCellDef=\"let row\"> {{row[column]}} </td>\n        </ng-container> \n            \n        <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr> -->\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        [ngClass]=\"{'highlight': selectedRowId == row.id}\"\n        (click)=\"selectEntity(row) ; highlight(row)\"></tr>\n        \n\n        <!-- <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        [ngClass]=\"{'highlight': selectedRowId == row.id}\"\n         (click)=\"SelectItem(row) ; highlight(row)\"></mat-row> -->\n\n\n\n        </table>\n        <mat-paginator class=\"mt-auto justify-self-end\" [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n     \n</div>\n"

/***/ }),

/***/ "./src/app/demo/crud/components/crud-table/crud-table.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-table/crud-table.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\ntd, th {\n  width: 25%; }\n\n.highlight {\n  background: whitesmoke;\n  /* green */ }\n\n.mat-row:hover {\n  background-color: #e0e0e0; }\n\n.mat-row {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/demo/crud/components/crud-table/crud-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/demo/crud/components/crud-table/crud-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: CrudTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudTableComponent", function() { return CrudTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CrudTableComponent = /** @class */ (function () {
    function CrudTableComponent() {
        // material table properties
        this.displayedColumns = [];
        this.selectedRowId = -1;
        this.onEntitySelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CrudTableComponent.prototype.ngOnChanges = function (changes) {
        var columns = changes.columns;
        var entities = changes.entities;
        this.displayedColumns = columns.currentValue;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](entities.currentValue);
    };
    CrudTableComponent.prototype.ngOnInit = function () {
        this.displayedColumns = this.columns;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.entities);
    };
    CrudTableComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    CrudTableComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    CrudTableComponent.prototype.selectEntity = function (event) {
        this.onEntitySelect.emit(event);
    };
    CrudTableComponent.prototype.highlight = function (row) {
        this.selectedRowId = row.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "entities", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CrudTableComponent.prototype, "selectedEntityId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "columns", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CrudTableComponent.prototype, "onEntitySelect", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], CrudTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], CrudTableComponent.prototype, "sort", void 0);
    CrudTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'crud-table',
            template: __webpack_require__(/*! ./crud-table.component.html */ "./src/app/demo/crud/components/crud-table/crud-table.component.html"),
            styles: [__webpack_require__(/*! ./crud-table.component.scss */ "./src/app/demo/crud/components/crud-table/crud-table.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [])
    ], CrudTableComponent);
    return CrudTableComponent;
}());



/***/ }),

/***/ "./src/app/demo/crud/crud.component.html":
/*!***********************************************!*\
  !*** ./src/app/demo/crud/crud.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"crudConfig !== null\"  class=\"row h-100 \">\n    \n    <div class=\"col h-100\" \n        [hidden]=\"!showCenter\" \n        [class.col-md-6]=\"!centerExpanded\" \n        [class.col-md-12]=\"centerExpanded\">\n\n    \n\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"d-flex align-items-center\">\n                    <h3> {{ crudConfig?.entityTitlePlural | titlecase}} </h3>\n                    <button mat-button class=\"ml-auto\" (click)=\"openCreateForm()\">\n                        <i class=\"fas fa-plus\"></i> Create {{ crudConfig?.entityTitle }}</button>\n                </div>\n            </div>\n        </div>\n\n\n        <crud-table\n            (onEntitySelect)=\"selectEntity($event)\" \n            [entities]=\"entities\" \n            [selectedEntityId]=\"1\"\n            [columns]=\"crudConfig.showColumns\">\n        </crud-table>\n\n\n        <!-- <button *ngIf=\"!showRight\" mat-button (click)=\"shrinkRight()\" >\n            Open Right\n        </button> -->\n    </div>\n\n<div id=\"Right\" class=\"col h-100\"  \n    style=\"border-left: 1px solid #c5c5c5;\"\n    [hidden]=\"!showRight\" \n    [class.col-md-6]=\"!rightExpanded\" \n    [class.col-md-12]=\"rightExpanded\">\n\n  \n    <div class=\"toggles\">\n        <span class=\"float-right\" (click)=\"closeRight()\">\n            <i class=\"fas fa-times close-right\"></i>\n        </span>\n        <span *ngIf=\"!rightExpanded\" class=\"expand-right float-left\" (click)=\"expandRight()\">\n            <i class=\"fas fa-expand-arrows-alt\"></i>\n        </span>\n        <span *ngIf=\"rightExpanded\" class=\"shrink-right float-left\" (click)=\"shrinkRight()\">\n            <i class=\"fas fa-compress\"></i>\n        </span>\n        <div class=\"clear-both\" style=\"clear:both\"></div>\n    </div>\n\n\n\n\n    <div *ngIf=\"selectedEntity\">\n        <div>\n            <div class=\"float-right\">\n                <button (click)=\"setRightContent('ViewSelected')\"\n                mat-button\n                matTooltip=\"View\" \n                [matTooltipPosition]=\"'above'\" \n                aria-label=\"\">\n                <i class=\"fas fa-eye\"></i>\n                    </button>   \n\n                    <button (click)=\"setRightContent('UpdateForm')\"\n                    mat-button\n                    matTooltip=\"Edit\" \n                    [matTooltipPosition]=\"'above'\" \n                    aria-label=\"\">\n                    <i class=\"fas fa-edit\"></i>\n                    </button>  \n\n\n                        <button (click)=\"deleteEntity(selectedEntity)\"\n                        mat-button\n                        matTooltip=\"Delete\" \n                        [matTooltipPosition]=\"'above'\" \n                        aria-label=\"\">\n                        <i class=\"fas fa-trash-alt\"></i>\n                        </button>  \n            </div>\n\n            <div style=\"clear:both\"></div>\n\n\n\n        </div>\n\n\n\n        <div *ngIf=\"rightContent == 'ViewSelected'\">\n            <h3> View {{ crudConfig?.entityTitle | titlecase}} </h3>\n\n            <pre>{{ selectedEntity | json }}</pre>\n        </div>\n\n\n\n\n    </div>\n\n\n    <div *ngIf=\"rightContent == 'CreateForm' || rightContent == 'UpdateForm'\">\n        <h4 *ngIf=\"rightContent == 'CreateForm'\">Create new {{ crudConfig?.entityTitle }} </h4>\n        <h4 *ngIf=\"rightContent == 'UpdateForm'\">Update {{ crudConfig?.entityTitle }}</h4>\n\n\n        <!-- <crud-form \n        [formConfig]=\"formConfig\" \n        [entity]=\"selectedEntity\" \n        [rightContent]=\"rightContent$ | async\" \n        (create)=\"onCreate($event)\"\n        (update)=\"onUpdate($event)\" \n        (remove)=\"onDelete($event)\"></crud-form> -->\n\n\n\n\n        <crud-form\n        [formModel]=\"formModel\" \n        [entity]=\"selectedEntity\" \n        [rightContent]=\"rightContent\"></crud-form>\n\n\n    </div>\n\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/demo/crud/crud.component.scss":
/*!***********************************************!*\
  !*** ./src/app/demo/crud/crud.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Right .toggles {\n  margin: 9px 0;\n  visibility: hidden; }\n\n#Right:hover .toggles {\n  visibility: visible; }\n\n#Left .toggles span {\n  cursor: pointer; }\n\n#Left .toggles {\n  margin: -2px -4px 1px;\n  visibility: hidden; }\n\n.toggles {\n  color: #Aeaeae; }\n\n#Left:hover .toggles {\n  visibility: visible; }\n\n.toggles span {\n  cursor: pointer; }\n\n.toggles span:hover {\n  color: #191919; }\n"

/***/ }),

/***/ "./src/app/demo/crud/crud.component.ts":
/*!*********************************************!*\
  !*** ./src/app/demo/crud/crud.component.ts ***!
  \*********************************************/
/*! exports provided: CrudComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudComponent", function() { return CrudComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crudConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crudConfig */ "./src/app/demo/crud/crudConfig.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CrudComponent = /** @class */ (function () {
    function CrudComponent(breakpointObserver, router, activatedRoute) {
        this.breakpointObserver = breakpointObserver;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        // formGroup: FormGroup;
        // Layout properties
        this.rightExpanded = false;
        this.showRight = true;
        this.centerExpanded = false;
        this.showCenter = true;
        this.rightContent = 'hello';
        this.crudConfig = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["categoriesConfig"];
        this.entities = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["categoriesList"];
        this.closeRight();
    }
    CrudComponent.prototype.ngOnInit = function () {
        this.initConfigfromParams();
    };
    CrudComponent.prototype.initConfigfromParams = function () {
        var _this = this;
        var params = this.activatedRoute.params.subscribe(function (params) {
            _this.entityType = params['entityType'];
            _this.selectedEntity = '';
            _this.closeRight();
            console.log(params);
            switch (params['entityType']) {
                case 'category':
                    _this.crudConfig = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["categoriesConfig"];
                    _this.entities = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["categoriesList"];
                    _this.formModel = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["categoriesConfig"].FormConfig;
                    break;
                case 'user':
                    _this.crudConfig = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["usersConfig"];
                    _this.entities = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["usersList"];
                    _this.formModel = _crudConfig__WEBPACK_IMPORTED_MODULE_4__["usersConfig"].FormConfig;
                    break;
                default:
                    console.log('no entityType params');
                    _this.crudConfig = null;
            }
        });
    };
    // Crud Operations
    CrudComponent.prototype.selectEntity = function (entity) {
        console.log('entity selected');
        this.rightContent = 'ViewSelected';
        this.shrinkRight();
        this.selectedEntity = entity;
    };
    CrudComponent.prototype.createEntity = function (entity) {
        console.log(entity);
    };
    CrudComponent.prototype.updateEntity = function (entity) {
        console.log(entity);
    };
    CrudComponent.prototype.deleteEntity = function (event) {
        var remove = window.confirm('are you sure you want to delete this entity?' + event);
        if (remove) {
            console.log(event);
        }
    };
    // Layout Management
    CrudComponent.prototype.setRightContent = function (event) {
        console.log(event);
        this.rightContent = event;
    };
    CrudComponent.prototype.openUpdateForm = function () {
    };
    CrudComponent.prototype.openCreateForm = function () {
        this.selectedEntity = '';
        this.rightContent = 'CreateForm';
        this.shrinkRight();
    };
    CrudComponent.prototype.closeRight = function () {
        this.selectedEntity = '';
        this.showRight = false;
        this.rightContent = '';
        this.showCenter = true;
        this.centerExpanded = true;
    };
    CrudComponent.prototype.expandRight = function () {
        this.showRight = true;
        this.rightExpanded = true;
        this.showCenter = false;
    };
    CrudComponent.prototype.shrinkRight = function () {
        this.showRight = true;
        this.rightExpanded = false;
        this.showCenter = true;
        this.centerExpanded = false;
    };
    CrudComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'crud',
            template: __webpack_require__(/*! ./crud.component.html */ "./src/app/demo/crud/crud.component.html"),
            styles: [__webpack_require__(/*! ./crud.component.scss */ "./src/app/demo/crud/crud.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CrudComponent);
    return CrudComponent;
}());



/***/ }),

/***/ "./src/app/demo/crud/crud.module.ts":
/*!******************************************!*\
  !*** ./src/app/demo/crud/crud.module.ts ***!
  \******************************************/
/*! exports provided: CrudModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrudModule", function() { return CrudModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _crud_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./crud.routing */ "./src/app/demo/crud/crud.routing.ts");
/* harmony import */ var _crud_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./crud.component */ "./src/app/demo/crud/crud.component.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _components_crud_form_crud_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/crud-form/crud-form.component */ "./src/app/demo/crud/components/crud-form/crud-form.component.ts");
/* harmony import */ var _components_crud_table_crud_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/crud-table/crud-table.component */ "./src/app/demo/crud/components/crud-table/crud-table.component.ts");
/* harmony import */ var _shared_dynamic_forms_dynamic_forms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/dynamic-forms/dynamic-forms.module */ "./src/app/shared/dynamic-forms/dynamic-forms.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// shared module






// ng dynamic forms

var CrudModule = /** @class */ (function () {
    function CrudModule() {
    }
    CrudModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _crud_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _shared_dynamic_forms_dynamic_forms_module__WEBPACK_IMPORTED_MODULE_8__["DynamicFormsModule"]
            ],
            declarations: [
                _crud_component__WEBPACK_IMPORTED_MODULE_4__["CrudComponent"],
                _components_crud_table_crud_table_component__WEBPACK_IMPORTED_MODULE_7__["CrudTableComponent"],
                _components_crud_form_crud_form_component__WEBPACK_IMPORTED_MODULE_6__["CrudFormComponent"]
            ]
        })
    ], CrudModule);
    return CrudModule;
}());



/***/ }),

/***/ "./src/app/demo/crud/crud.routing.ts":
/*!*******************************************!*\
  !*** ./src/app/demo/crud/crud.routing.ts ***!
  \*******************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _crud_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.component */ "./src/app/demo/crud/crud.component.ts");


var routes = [
    { path: '', component: _crud_component__WEBPACK_IMPORTED_MODULE_1__["CrudComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/demo/crud/crudConfig.ts":
/*!*****************************************!*\
  !*** ./src/app/demo/crud/crudConfig.ts ***!
  \*****************************************/
/*! exports provided: categoriesConfig, usersConfig, categoriesList, usersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesConfig", function() { return categoriesConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersConfig", function() { return usersConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoriesList", function() { return categoriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersList", function() { return usersList; });
/* harmony import */ var _crudFormModels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crudFormModels */ "./src/app/demo/crud/crudFormModels.ts");

var categoriesConfig = {
    apiPath: 'http://restful.api/categories',
    FormConfig: _crudFormModels__WEBPACK_IMPORTED_MODULE_0__["CategoryFormModel"],
    entityTitle: 'category',
    entityTitlePlural: 'categories',
    showColumns: ['title', 'description'] // choose which columns to display in table
};
var usersConfig = {
    apiPath: 'http://restful.api/users',
    FormConfig: _crudFormModels__WEBPACK_IMPORTED_MODULE_0__["UsersFormModel"],
    entityTitle: 'user',
    entityTitlePlural: 'users',
    showColumns: ['first_name', 'email']
};
// replace with db
var categoriesList = [
    { 'id': 1, 'title': 'shoes', 'description': 'fast shoes' },
    { 'id': 2, 'title': 'cars', 'description': 'lorem ipsum' },
];
var usersList = [
    { 'id': 1, 'first_name': 'mike ike', 'last_name': 'ike', 'email': 'mike@ike.com' },
    { 'id': 2, 'first_name': 'joe', 'last_name': 'moe', 'email': 'joe@ipsum.com' },
    { 'id': 3, 'first_name': 'moe', 'last_name': 'moe', 'email': 'joe@ipsum.com' },
    { 'id': 4, 'first_name': 'joe', 'last_name': 'moe', 'email': 'joe@ipsum.com' },
    { 'id': 5, 'first_name': 'joe', 'last_name': 'moe', 'email': 'joe@ipsum.com' },
];


/***/ }),

/***/ "./src/app/demo/crud/crudFormModels.ts":
/*!*********************************************!*\
  !*** ./src/app/demo/crud/crudFormModels.ts ***!
  \*********************************************/
/*! exports provided: CategoryFormModel, UsersFormModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryFormModel", function() { return CategoryFormModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFormModel", function() { return UsersFormModel; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var CategoryFormModel = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'title',
        label: 'Category Title',
        placeholder: 'Enter category title'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'description',
        label: 'Category Description',
        placeholder: 'Enter description of category'
    }),
];
var UsersFormModel = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'first_name',
        label: 'First name',
        placeholder: 'Enter first name'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'last_name',
        label: 'Last name',
        placeholder: 'Enter last name'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'email',
        label: 'Email',
        placeholder: 'Enter email'
    })
];


/***/ })

}]);
//# sourceMappingURL=crud-crud-module.js.map