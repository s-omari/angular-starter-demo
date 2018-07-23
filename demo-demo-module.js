(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo-demo-module"],{

/***/ "./src/app/demo/demo-menu.ts":
/*!***********************************!*\
  !*** ./src/app/demo/demo-menu.ts ***!
  \***********************************/
/*! exports provided: Items */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Items", function() { return Items; });
var Items = [
    {
        'title': 'UI Components',
        'route': 'demo/ui-components',
        'icon': 'important_devices',
        'children': [
            {
                'title': 'material components',
                'route': 'demo/ui-components/material-components',
                'icon': 'table'
            },
            {
                'title': 'custom components',
                'route': 'demo/ui-components/custom-components',
                'icon': 'table'
            }
        ]
    },
    {
        'title': 'Dynamic Form',
        'route': 'demo/dynamic-form',
        'icon': 'chrome_reader_mode'
    },
    {
        'title': 'Localization',
        'route': 'demo/localization',
        'icon': 'language'
    },
    {
        'title': 'CRUD',
        'type': 'crud',
        'route': '',
        'icon': 'dns',
        'children': [
            {
                'title': 'Categories',
                'route': 'demo/crud',
                'params': { 'entityType': 'category' },
                'icon': 'user'
            },
            {
                'title': 'Users',
                'route': 'demo/crud',
                'params': { 'entityType': 'user' },
                'icon': 'star'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<mat-sidenav-container class=\"sidenav-container\">\n\n  \n    <mat-sidenav\n      #drawer\n      class=\"sidenav\"\n      fixedInViewport=\"true\"\n      [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n      [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n      [opened]=\"!(isHandset$ | async)\">\n      <mat-toolbar color=\"primary\">\n          <button  mat-button routerLink=''>\n              <i class=\"fab fa-angular fa-2x\"></i>\n              Angular Starter\n            </button>\n      </mat-toolbar>\n\n      <side-menu [menuItems]=\"menuItems\" [activeItem]=\"activatedUrl\" (onSelect)=\"selectMenuItem($event)\"></side-menu>\n\n    </mat-sidenav>\n  \n  \n    <mat-sidenav-content>\n      <mat-toolbar color=\"primary\">\n        <button\n          type=\"button\"\n          aria-label=\"Toggle sidenav\"\n          mat-icon-button\n          (click)=\"drawer.toggle()\"\n          *ngIf=\"isHandset$ | async\">\n  \n          <mat-icon fontSet=\"fa\" fontIcon=\"fa-bars\"></mat-icon>\n  \n        </button>\n        <span *ngIf=\"(isHandset$ | async)\" >\n            <button  mat-button routerLink=''>\n                <i class=\"fab fa-angular fa-2x\"></i>\n                Angular Starter\n              </button>\n        </span>\n  \n      <div class=\"ml-auto d-flex align-items-center\">\n        <!-- <language-switcher></language-switcher> -->\n        <theme-switcher [selectedTheme]=\"appService.appTheme\" (onSelectTheme)=\"appService.setTheme($event)\"></theme-switcher>\n        <user-dropdown *ngIf=\"user\" (onSignOut)=\"signOut()\" [user]=\"user\"></user-dropdown>\n      </div>\n  \n  \n  \n      </mat-toolbar>\n  \n      <div class=\"container-fluid h-100 mb-5 pt-3 \">\n          <router-outlet></router-outlet>\n      </div>\n  \n  \n    </mat-sidenav-content>\n  \n  \n  \n  </mat-sidenav-container>\n  "

/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/app.service */ "./src/app/shared/services/app.service.ts");
/* harmony import */ var _demo_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo-menu */ "./src/app/demo/demo-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { AuthenticationService } from '../../shared/services/authentication.service';



// menu items

var DemoComponent = /** @class */ (function () {
    function DemoComponent(breakpointObserver, socialAuthService, router, appService, userService, activatedRoute) {
        var _this = this;
        this.breakpointObserver = breakpointObserver;
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.appService = appService;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.menuItems = _demo_menu__WEBPACK_IMPORTED_MODULE_7__["Items"];
        this.user = this.userService.getCurrentUser();
        this.activatedUrl = this.router.url;
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                console.log(event.url);
                _this.activatedUrl = event.url;
            }
        });
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.setTheme = function (theme) {
        console.log(theme);
    };
    DemoComponent.prototype.signOut = function () {
        this.socialAuthService.signOut();
        //   this.authService.logOut();
        this.router.navigate(['public/login']);
    };
    DemoComponent.prototype.selectMenuItem = function (item) {
        if (item.route !== '') {
            if (item.params) {
                this.router.navigate([item.route, item.params]);
            }
            else {
                this.router.navigate([item.route]);
            }
        }
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/demo/demo.module.ts":
/*!*************************************!*\
  !*** ./src/app/demo/demo.module.ts ***!
  \*************************************/
/*! exports provided: DemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoModule", function() { return DemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _demo_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo.routing */ "./src/app/demo/demo.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_dynamic_forms_dynamic_forms_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/dynamic-forms/dynamic-forms.module */ "./src/app/shared/dynamic-forms/dynamic-forms.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validators */ "./src/app/demo/validators.ts");
/* harmony import */ var _dynamic_form_material_sample_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dynamic-form/material-sample-form.component */ "./src/app/demo/dynamic-form/material-sample-form.component.ts");
/* harmony import */ var _ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui-components/ui-components.component */ "./src/app/demo/ui-components/ui-components.component.ts");
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./localization/localization.component */ "./src/app/demo/localization/localization.component.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _ui_components_custom_components_custom_components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ui-components/custom-components/custom-components.component */ "./src/app/demo/ui-components/custom-components/custom-components.component.ts");
/* harmony import */ var _ui_components_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui-components/material-components/material-components.component */ "./src/app/demo/ui-components/material-components/material-components.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// shared module

// ng dynamic forms

// validations









var DemoModule = /** @class */ (function () {
    function DemoModule() {
    }
    DemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _demo_routing__WEBPACK_IMPORTED_MODULE_2__["routing"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_dynamic_forms_dynamic_forms_module__WEBPACK_IMPORTED_MODULE_4__["DynamicFormsModule"],
            ],
            declarations: [
                _dynamic_form_material_sample_form_component__WEBPACK_IMPORTED_MODULE_8__["MaterialSampleFormComponent"],
                _ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_9__["UiComponentsComponent"],
                _localization_localization_component__WEBPACK_IMPORTED_MODULE_10__["LocalizationComponent"],
                _demo_component__WEBPACK_IMPORTED_MODULE_11__["DemoComponent"],
                _ui_components_custom_components_custom_components_component__WEBPACK_IMPORTED_MODULE_12__["CustomComponentsComponent"],
                _ui_components_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_13__["MaterialComponentsComponent"]
            ],
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
                    useValue: _validators__WEBPACK_IMPORTED_MODULE_7__["customValidator"],
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALIDATORS"],
                    useValue: _validators__WEBPACK_IMPORTED_MODULE_7__["customDateRangeValidator"],
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_ASYNC_VALIDATORS"],
                    useValue: _validators__WEBPACK_IMPORTED_MODULE_7__["customAsyncFormGroupValidator"],
                    multi: true
                },
                {
                    provide: _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_6__["DYNAMIC_VALIDATORS"],
                    useValue: new Map([
                        ['customValidator', _validators__WEBPACK_IMPORTED_MODULE_7__["customValidator"]],
                        ['customDateRangeValidator', _validators__WEBPACK_IMPORTED_MODULE_7__["customDateRangeValidator"]],
                        ['customForbiddenValidator', _validators__WEBPACK_IMPORTED_MODULE_7__["customForbiddenValidator"]],
                        ['customAsyncFormGroupValidator', _validators__WEBPACK_IMPORTED_MODULE_7__["customAsyncFormGroupValidator"]]
                    ])
                },
            ]
        })
    ], DemoModule);
    return DemoModule;
}());



/***/ }),

/***/ "./src/app/demo/demo.routing.ts":
/*!**************************************!*\
  !*** ./src/app/demo/demo.routing.ts ***!
  \**************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dynamic_form_material_sample_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form/material-sample-form.component */ "./src/app/demo/dynamic-form/material-sample-form.component.ts");
/* harmony import */ var _ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-components/ui-components.component */ "./src/app/demo/ui-components/ui-components.component.ts");
/* harmony import */ var _ui_components_custom_components_custom_components_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-components/custom-components/custom-components.component */ "./src/app/demo/ui-components/custom-components/custom-components.component.ts");
/* harmony import */ var _ui_components_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-components/material-components/material-components.component */ "./src/app/demo/ui-components/material-components/material-components.component.ts");
/* harmony import */ var _localization_localization_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localization/localization.component */ "./src/app/demo/localization/localization.component.ts");
/* harmony import */ var _demo_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./demo.component */ "./src/app/demo/demo.component.ts");







var routes = [
    {
        path: '', component: _demo_component__WEBPACK_IMPORTED_MODULE_6__["DemoComponent"],
        children: [
            { path: 'dynamic-form', component: _dynamic_form_material_sample_form_component__WEBPACK_IMPORTED_MODULE_1__["MaterialSampleFormComponent"] },
            {
                path: 'ui-components', component: _ui_components_ui_components_component__WEBPACK_IMPORTED_MODULE_2__["UiComponentsComponent"],
                children: [
                    { path: 'custom-components', component: _ui_components_custom_components_custom_components_component__WEBPACK_IMPORTED_MODULE_3__["CustomComponentsComponent"] },
                    { path: 'material-components', component: _ui_components_material_components_material_components_component__WEBPACK_IMPORTED_MODULE_4__["MaterialComponentsComponent"] },
                ],
            },
            { path: 'localization', component: _localization_localization_component__WEBPACK_IMPORTED_MODULE_5__["LocalizationComponent"] },
            { path: 'crud', loadChildren: './crud/crud.module#CrudModule' }
        ]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/demo/dynamic-form/material-sample-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/demo/dynamic-form/material-sample-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n        <div class=\"col-md-6\">\n                <mat-card>        \n                        <form [formGroup]=\"formGroup\">\n                \n                                <dynamic-material-form\n                                [group]=\"formGroup\"\n                                [layout]=\"formLayout\"\n                                [model]=\"formModel\"\n                                (blur)=\"onBlur($event)\"\n                                (change)=\"onChange($event)\"\n                                (focus)=\"onFocus($event)\"\n                                (matEvent)=\"onMatEvent($event)\"></dynamic-material-form>\n                \n                        </form>\n                </mat-card>\n        </div>\n        \n        <div class=\"col-md-6\">\n                <pre>{{formGroup.value | json}}</pre>\n        </div>\n        \n        </div>\n\n"

/***/ }),

/***/ "./src/app/demo/dynamic-form/material-sample-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demo/dynamic-form/material-sample-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: MaterialSampleFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialSampleFormComponent", function() { return MaterialSampleFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _material_sample_form_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material-sample-form.model */ "./src/app/demo/dynamic-form/material-sample-form.model.ts");
/* harmony import */ var _material_sample_form_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material-sample-form.layout */ "./src/app/demo/dynamic-form/material-sample-form.layout.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MaterialSampleFormComponent = /** @class */ (function () {
    function MaterialSampleFormComponent(formService) {
        this.formService = formService;
        this.formModel = _material_sample_form_model__WEBPACK_IMPORTED_MODULE_2__["MATERIAL_SAMPLE_FORM_MODEL"];
        this.formLayout = _material_sample_form_layout__WEBPACK_IMPORTED_MODULE_3__["MATERIAL_SAMPLE_FORM_LAYOUT"];
    }
    MaterialSampleFormComponent.prototype.ngOnInit = function () {
        this.formGroup = this.formService.createFormGroup(this.formModel);
    };
    MaterialSampleFormComponent.prototype.onBlur = function ($event) {
        console.log("Material blur event on: " + $event.model.id + ": ", $event);
    };
    MaterialSampleFormComponent.prototype.onChange = function ($event) {
        console.log("Material change event on: " + $event.model.id + ": ", $event);
    };
    MaterialSampleFormComponent.prototype.onFocus = function ($event) {
        console.log("Material focus event on: " + $event.model.id + ": ", $event);
    };
    MaterialSampleFormComponent.prototype.onMatEvent = function ($event) {
        console.log("Material " + $event.type + " event on: " + $event.model.id + ": ", $event);
    };
    MaterialSampleFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'dynamic-material-sample-form',
            template: __webpack_require__(/*! ./material-sample-form.component.html */ "./src/app/demo/dynamic-form/material-sample-form.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_1__["DynamicFormService"]])
    ], MaterialSampleFormComponent);
    return MaterialSampleFormComponent;
}());



/***/ }),

/***/ "./src/app/demo/dynamic-form/material-sample-form.layout.ts":
/*!******************************************************************!*\
  !*** ./src/app/demo/dynamic-form/material-sample-form.layout.ts ***!
  \******************************************************************/
/*! exports provided: MATERIAL_SAMPLE_FORM_LAYOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SAMPLE_FORM_LAYOUT", function() { return MATERIAL_SAMPLE_FORM_LAYOUT; });
var MATERIAL_SAMPLE_FORM_LAYOUT = {
    'addressStreet': {
        element: {
            host: 'material-form-group'
        }
    }
};


/***/ }),

/***/ "./src/app/demo/dynamic-form/material-sample-form.model.ts":
/*!*****************************************************************!*\
  !*** ./src/app/demo/dynamic-form/material-sample-form.model.ts ***!
  \*****************************************************************/
/*! exports provided: MATERIAL_SAMPLE_FORM_MODEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SAMPLE_FORM_MODEL", function() { return MATERIAL_SAMPLE_FORM_MODEL; });
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");

var MATERIAL_SAMPLE_FORM_MODEL = [
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'stay',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicDatePickerModel"]({
                id: 'arrivalDate',
                inline: false,
                placeholder: 'Date of Arrival'
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicDatePickerModel"]({
                id: 'departureDate',
                inline: false,
                placeholder: 'Date of Departure'
            })
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'room',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSelectModel"]({
                id: 'roomSize',
                placeholder: 'Room Size',
                hint: 'Choose a room type',
                options: [
                    {
                        label: 'Single Room',
                        value: 'single-room'
                    },
                    {
                        label: 'Double Room',
                        value: 'double-room'
                    },
                    {
                        label: 'Business Suite',
                        value: 'business-suite'
                    },
                    {
                        label: 'Presidential Suite',
                        value: 'presidential-suite'
                    },
                    {
                        label: 'Storeroom',
                        value: 'storeroom'
                    }
                ]
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'roomQuantity',
                inputType: 'number',
                placeholder: 'Room Quantity',
                hint: 'Maximum: 5',
                max: 5,
                min: 0
            })
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'firstName',
        maxLength: 25,
        placeholder: 'First Name',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'lastName',
        maxLength: 50,
        placeholder: 'Last Name',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        },
        additional: {
            color: 'accent'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'email',
        placeholder: 'E-Mail',
        validators: {
            email: null
        },
        errorMessages: {
            email: 'Field has no valid email'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'phone',
        inputType: 'tel',
        placeholder: 'Phone Number',
        hint: 'Add your country code first',
        prefix: '+',
        validators: {
            required: null
        },
        errorMessages: {
            required: 'Field is required'
        }
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'addressStreet',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'streetName',
                placeholder: 'Street Name'
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'streetNumber',
                placeholder: 'Street Number'
            })
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicFormGroupModel"]({
        id: 'addressLocation',
        group: [
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'zipCode',
                placeholder: 'ZIP'
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'state',
                hint: 'Autocomplete',
                placeholder: 'State',
                list: ['Alabama', 'Alaska', 'American Samoa', 'Arizona',
                    'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                    'District of Columbia', 'Federated States of Micronesia', 'Florida',
                    'Georgia', 'Guam', 'Hawaii', 'Idaho']
            }),
            new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
                id: 'city',
                placeholder: 'City'
            })
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSelectModel"]({
        id: 'extras',
        placeholder: 'Extras',
        multiple: true,
        options: [
            {
                label: 'Breakfast',
                value: 'extraBreakfast'
            },
            {
                label: 'TV',
                value: 'extraTV',
            },
            {
                label: 'WiFi',
                value: 'extraWiFi'
            },
            {
                label: 'Parking Lot',
                value: 'extraParking'
            },
            {
                label: 'Balcony',
                value: 'extraBalcony'
            }
        ]
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicRadioGroupModel"]({
        id: 'payment',
        options: [
            {
                label: 'Credit Card',
                value: 'cc'
            },
            {
                label: 'PayPal',
                value: 'paypal'
            },
            {
                label: 'Cash',
                value: 'cash'
            },
            {
                label: 'Bitcoin',
                value: 'bitcoin'
            }
        ],
        value: 'cc'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicTextAreaModel"]({
        id: 'note',
        rows: 3,
        placeholder: 'Personal Note'
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicInputModel"]({
        id: 'tags',
        placeholder: 'Tags',
        multiple: true,
        value: ['hotel', 'booking']
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
        id: 'reminder',
        offLabel: 'Send me a reminder',
        onLabel: 'Send me a reminder',
        value: false
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicSwitchModel"]({
        id: 'newsletter',
        offLabel: 'Subscribe to newsletter',
        onLabel: 'Subscribe to newsletter',
        value: true
    }),
    new _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_0__["DynamicCheckboxModel"]({
        id: 'confirm',
        label: 'I confirm the information given above'
    })
];


/***/ }),

/***/ "./src/app/demo/localization/localization.component.html":
/*!***************************************************************!*\
  !*** ./src/app/demo/localization/localization.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n\n    <div class=\"d-flex align-items-center\">\n      <h3 class=\"spacer\">Localization</h3>\n      <language-switcher></language-switcher>\n    </div>\n\n\n    <mat-card class=\"mt-2 mb-2\">\n      <b>{{translate.currentLang == 'en' ? 'English' : 'French'}} </b>\n      <div>{{ 'Dashboard' | translate }}</div>\n    </mat-card>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/demo/localization/localization.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/demo/localization/localization.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/localization/localization.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/demo/localization/localization.component.ts ***!
  \*************************************************************/
/*! exports provided: LocalizationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalizationComponent", function() { return LocalizationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalizationComponent = /** @class */ (function () {
    function LocalizationComponent(translate) {
        this.translate = translate;
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    LocalizationComponent.prototype.ngOnInit = function () {
    };
    LocalizationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'localization',
            template: __webpack_require__(/*! ./localization.component.html */ "./src/app/demo/localization/localization.component.html"),
            styles: [__webpack_require__(/*! ./localization.component.scss */ "./src/app/demo/localization/localization.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], LocalizationComponent);
    return LocalizationComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-components/custom-components/custom-components.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-components/custom-components/custom-components.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-12\">\n    <mat-card class=\"mt-3 mb-3\">\n      <h5>User Dropdown</h5>\n      <mat-toolbar>\n        <div class=\"ml-auto d-flex align-items-center\">\n          <user-dropdown *ngIf=\"user\" [user]=\"user\"></user-dropdown>\n        </div>\n      </mat-toolbar>\n    </mat-card>\n\n    <mat-card class=\"mt-3 mb-3\">\n      <h5>Collapse menu</h5>\n      <side-menu [menuItems]=\"menuItems\"></side-menu>\n    </mat-card>\n\n\n    <mat-card class=\"mt-3 mb-3\">\n      <h5>Breadcrumbs</h5>\n      <breadcrumbs [breadcrumbs]=\"breadcrumbs\"></breadcrumbs>\n\n\n    </mat-card>\n\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-components/custom-components/custom-components.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/demo/ui-components/custom-components/custom-components.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/ui-components/custom-components/custom-components.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/demo/ui-components/custom-components/custom-components.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CustomComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponentsComponent", function() { return CustomComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomComponentsComponent = /** @class */ (function () {
    function CustomComponentsComponent() {
        this.user = {
            'avatar': 'https://lh6.googleusercontent.com/-aSC0Dcj7tIg/AAAAAAAAAAI/AAAAAAAAAAA/AAnnY7rul_P8FT8_8B5Rl6ki3yY9ztGYcg/s96-c/photo.jpg',
            'email': 'saleh.omari@247labs.com',
            'firstName': 'Saleh',
            'id': '101671379837217301555',
            'lastName': 'Omari',
            'name': 'Saleh Omari',
            'provider': 'GOOGLE'
        };
        this.menuItems = [
            {
                'title': 'Dynamic Form',
                'route': 'demo/dynamic-form',
                'icon': 'chrome_reader_mode'
            },
            {
                'title': 'UI Components',
                'route': 'demo/ui-components',
                'icon': 'important_devices',
                'children': [
                    {
                        'title': 'material components',
                        'route': 'demo/ui-components/material-components',
                        'icon': 'table'
                    },
                    {
                        'title': 'custom components',
                        'route': 'demo/ui-components/custom-components',
                        'icon': 'table'
                    }
                ]
            }
        ];
        this.breadcrumbs = [
            {
                'title': 'Menu',
                'type': 'menu',
                'menu-items': [{ title: 'item 1' }, { title: 'item 1' }],
            },
            {
                'title': 'Category',
                'type': 'button',
            },
        ];
    }
    CustomComponentsComponent.prototype.ngOnInit = function () {
    };
    CustomComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'custom-components',
            template: __webpack_require__(/*! ./custom-components.component.html */ "./src/app/demo/ui-components/custom-components/custom-components.component.html"),
            styles: [__webpack_require__(/*! ./custom-components.component.scss */ "./src/app/demo/ui-components/custom-components/custom-components.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomComponentsComponent);
    return CustomComponentsComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-components/material-components/material-components.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-components/material-components/material-components.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-12\">\n    <mat-card class=\"mt-3 mb-3\">\n      <h5>Basic Buttons</h5>\n      <div class=\"button-row\">\n        <button mat-button>Basic</button>\n        <button mat-button color=\"primary\">Primary</button>\n        <button mat-button color=\"accent\">Accent</button>\n        <button mat-button color=\"warn\">Warn</button>\n        <button mat-button disabled>Disabled</button>\n        <a mat-button routerLink=\".\">Link</a>\n      </div>\n\n      <h5>Raised Buttons</h5>\n      <div class=\"button-row\">\n        <button mat-raised-button>Basic</button>\n        <button mat-raised-button color=\"primary\">Primary</button>\n        <button mat-raised-button color=\"accent\">Accent</button>\n        <button mat-raised-button color=\"warn\">Warn</button>\n        <button mat-raised-button disabled>Disabled</button>\n        <a mat-raised-button routerLink=\".\">Link</a>\n      </div>\n\n      <h5>Icon Buttons</h5>\n      <div class=\"button-row\">\n        <button mat-icon-button>\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n        <button mat-icon-button color=\"primary\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n        <button mat-icon-button color=\"accent\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n        <button mat-icon-button color=\"warn\">\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n        <button mat-icon-button disabled>\n          <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n        </button>\n      </div>\n\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h5>Fab Buttons</h5>\n          <div class=\"button-row\">\n            <button mat-fab>Basic</button>\n            <button mat-fab color=\"primary\">Primary</button>\n            <button mat-fab color=\"accent\">Accent</button>\n            <button mat-fab color=\"warn\">Warn</button>\n            <button mat-fab disabled>Disabled</button>\n            <button mat-fab>\n              <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n            </button>\n            <a mat-fab routerLink=\".\">Link</a>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h5>Mini Fab Buttons</h5>\n          <div class=\"button-row\">\n            <button mat-mini-fab>\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-mini-fab color=\"primary\">\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-mini-fab color=\"accent\">\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-mini-fab color=\"warn\">\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-mini-fab disabled>\n              <mat-icon>favorite</mat-icon>\n            </button>\n            <button mat-mini-fab>\n              <mat-icon>\n                <mat-icon>favorite</mat-icon>\n              </mat-icon>\n            </button>\n            <a mat-mini-fab routerLink=\".\">Link</a>\n          </div>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n\n\n  <div class=\"col-12\">\n    <mat-card class=\"mt-3 mb-3\">\n      <h5>Chips</h5>\n      <div class=\"row\">\n        <div class=\"col\">\n          <mat-chip-list>\n            <mat-chip>One fish</mat-chip>\n            <mat-chip>Two fish</mat-chip>\n            <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n            <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n          </mat-chip-list>\n        </div>\n        <div class=\"col\">\n\n          <mat-chip-list class=\"mat-chip-list-stacked\">\n            <mat-chip>One fish</mat-chip>\n            <mat-chip>Two fish</mat-chip>\n            <mat-chip color=\"primary\" selected=\"true\">Primary fish</mat-chip>\n            <mat-chip color=\"accent\" selected=\"true\">Accent fish</mat-chip>\n          </mat-chip-list>\n        </div>\n      </div>\n    </mat-card>\n  </div>\n\n  <div class=\"col-12\">\n    <mat-card class=\"mt-3 mb-3\">\n\n      <h5>Progress bar</h5>\n      <mat-progress-bar class=\"mb-3\" color=\"primary\" mode=\"determinate\" value=\"40\"></mat-progress-bar>\n      <mat-progress-bar class=\"mb-3\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n      <mat-progress-bar class=\"mb-3\" mode=\"buffer\"></mat-progress-bar>\n      <mat-progress-bar class=\"mb-3\" color=\"warn\" mode=\"query\"></mat-progress-bar>\n\n\n      <h5>Badges</h5>\n      <p>\n        <span matBadge=\"4\" matBadgeOverlap=\"false\">Text with a badge</span>\n      </p>\n\n      <p>\n        Button with a badge on the left\n        <button mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\" matBadgeColor=\"accent\">\n          Action\n        </button>\n      </p>\n\n      <p>\n        Icon with a badge\n        <mat-icon matBadge=\"15\" matBadgeColor=\"warn\">home</mat-icon>\n      </p>\n\n\n      <h5>Pagination</h5>\n      <mat-paginator [length]=\"100\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 25, 100]\">\n      </mat-paginator>\n\n      <h5>Tooltip</h5>\n      <button mat-raised-button matTooltip=\"Info about the action\" [matTooltipPosition]=\"'right'\" aria-label=\"Button that displays a tooltip when focused or hovered over\">\n        Action\n      </button>\n\n\n    </mat-card>\n  </div>\n\n\n\n\n\n\n\n\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/demo/ui-components/material-components/material-components.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/ui-components/material-components/material-components.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.button-row button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/demo/ui-components/material-components/material-components.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/ui-components/material-components/material-components.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MaterialComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsComponent", function() { return MaterialComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialComponentsComponent = /** @class */ (function () {
    function MaterialComponentsComponent() {
    }
    MaterialComponentsComponent.prototype.ngOnInit = function () {
    };
    MaterialComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'material-components',
            template: __webpack_require__(/*! ./material-components.component.html */ "./src/app/demo/ui-components/material-components/material-components.component.html"),
            styles: [__webpack_require__(/*! ./material-components.component.scss */ "./src/app/demo/ui-components/material-components/material-components.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialComponentsComponent);
    return MaterialComponentsComponent;
}());



/***/ }),

/***/ "./src/app/demo/ui-components/ui-components.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/demo/ui-components/ui-components.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/demo/ui-components/ui-components.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/demo/ui-components/ui-components.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-button-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-around; }\n\n.button-row button {\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/demo/ui-components/ui-components.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/demo/ui-components/ui-components.component.ts ***!
  \***************************************************************/
/*! exports provided: UiComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponentsComponent", function() { return UiComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UiComponentsComponent = /** @class */ (function () {
    function UiComponentsComponent() {
    }
    UiComponentsComponent.prototype.ngOnInit = function () {
    };
    UiComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ui-components',
            template: __webpack_require__(/*! ./ui-components.component.html */ "./src/app/demo/ui-components/ui-components.component.html"),
            styles: [__webpack_require__(/*! ./ui-components.component.scss */ "./src/app/demo/ui-components/ui-components.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UiComponentsComponent);
    return UiComponentsComponent;
}());



/***/ }),

/***/ "./src/app/demo/validators.ts":
/*!************************************!*\
  !*** ./src/app/demo/validators.ts ***!
  \************************************/
/*! exports provided: customValidator, customDateRangeValidator, customForbiddenValidator, customAsyncFormGroupValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customValidator", function() { return customValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customDateRangeValidator", function() { return customDateRangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customForbiddenValidator", function() { return customForbiddenValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customAsyncFormGroupValidator", function() { return customAsyncFormGroupValidator; });
function customValidator(control) {
    var hasError = control.value ? control.value.startsWith('abc') : false;
    return hasError ? { customValidator: true } : null;
}
function customDateRangeValidator(group) {
    var dateArrival = group.get('arrivalDate').value, dateDeparture = group.get('departureDate').value, hasError = false;
    if (dateArrival && dateDeparture) {
        hasError = dateArrival >= dateDeparture || dateDeparture <= dateArrival;
    }
    return hasError ? { customDateRangeValidator: true } : null;
}
function customForbiddenValidator(forbiddenValue) {
    return function (control) {
        if (control && control.value === forbiddenValue) {
            return { forbidden: true };
        }
        return null;
    };
}
function customAsyncFormGroupValidator(formGroup) {
    return new Promise(function (resolve, reject) {
        console.log('async validation');
        resolve(null);
    });
}


/***/ })

}]);
//# sourceMappingURL=demo-demo-module.js.map