(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"],{

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container id=\"langing-page\">\n\n  <mat-sidenav #sidenav mode=\"push\">\n    <div class=\"branding\"><span>Angular Starter</span></div>\n\n    <mat-nav-list>\n      <a mat-list-item  routerLinkActive=\"active\">\n        About Us\n      </a>\n      <a mat-list-item  routerLinkActive=\"active\">\n        Contact\n      </a>\n\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <div class=\"wrapper\">\n\n    <div class=\"toolbar\">\n      <mat-toolbar color=\"primary\">\n\n\n \n        <div class=\"brand-box\">\n            <div class=\"logo2 brand m-auto w-100\">\n              <a href=\"#\">brand name</a>\n            </div>\n          </div>\n      \n          <span class=\"spacer\"></span>\n\n        <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\n          <mat-icon fontSet=\"fas\" fontIcon=\"fa-bars\"></mat-icon>\n        </button>\n\n        <a mat-button href=\"https://bitbucket.org/247Labs/angular6/src/\" target=\"_blank\">\n          <i class=\"fab fa-bitbucket fa-lg mr-2\"></i>bitbucket\n        </a>\n\n\n\n\n\n\n      </mat-toolbar>\n    </div>\n\n    <div class=\"content\">\n      <!-- <router-outlet></router-outlet> -->\n\n\n      \n      <div class=\"background\">\n        <div class=\"gradient\">\n          <div class=\"container\">\n            <h1>Landing Page!</h1>\n            <div class=\"actions\">\n              <a mat-raised-button color=\"primary\" routerLink=\"../restricted\">\n                Visit the App\n              </a>\n              <a mat-raised-button color=\"primary\" routerLink=\"../demo\">\n                See the Demo\n              </a>\n\n            </div>\n\n\n            <div class=\"get-started\">\n              <h2>Getting started</h2>\n\n              <code>cd new-project</code><br>\n              <code>npm install</code><br>\n              <code>npm start</code>\n            </div>\n\n\n\n\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"container\">\n\n\n          <h1>Animations</h1>\n\n          <h1 class=\"animated infinite bounce\">Example</h1>\n\n\n\n      </div>\n\n\n\n\n    </div>\n\n\n \n      \n\n\n\n\n    <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 links\">\n          <a href=\"https://www.github.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-github\"></mat-icon>\n            <span>Github</span>\n          </a>\n          <a href=\"https://www.medium.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-medium-m\"></mat-icon>\n            <span>Medium</span>\n          </a>\n          <a href=\"https://www.twitter.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-twitter\"></mat-icon>\n            <span>Twitter</span>\n          </a>\n          <a href=\"https://www.youtube.com\"\n             target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-youtube\"></mat-icon>\n            <span>Youtube</span>\n          </a>\n          <a href=\"https://www.instagram.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fab\" fontIcon=\"fa-instagram\"></mat-icon>\n            <span>Instagram</span>\n          </a>\n          <a href=\"https://www.slides.com\" target=\"_blank\">\n            <mat-icon fontSet=\"fas\" fontIcon=\"fa-play-circle\"></mat-icon>\n            <span>Slides</span>\n          </a>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar .brand-box {\n  width: 200px; }\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
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

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _landing_page_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-page.routing */ "./src/app/landing-page/landing-page.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _landing_page_routing__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]]
        })
    ], LandingPageModule);
    return LandingPageModule;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/landing-page/landing-page.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-page.component */ "./src/app/landing-page/landing-page.component.ts");


var routes = [
    { path: '', component: _landing_page_component__WEBPACK_IMPORTED_MODULE_1__["LandingPageComponent"] },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ })

}]);
//# sourceMappingURL=landing-page-landing-page-module.js.map