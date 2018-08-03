(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["application-public-public-module"],{

/***/ "./src/app/application/public/forgot-password/forgot-password.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/application/public/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center mt-5\">\n  <mat-card>\n    <div class=\"brand-box w-100 mb-3\">\n      <div class=\"logo1 brand m-auto\">\n        <a href=\"#\">brand name</a>\n      </div>\n    </div>\n\n\n    <mat-card-content>\n\n\n      <form class=\"d-flex flex-column \">\n        <mat-form-field>\n          <input matInput class=\"w-100\" placeholder=\"email\" name=\"email\" required>\n        </mat-form-field>\n      </form>\n\n\n\n\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button mat-raised-button class=\"w-100 mb-2\" color=\"primary\">Reset Password</button>\n\n      <div class=\"d-flex justify-content-center\">\n        <button mat-raised-button routerLink=\"../login\">Back to Login</button>\n      </div>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/application/public/forgot-password/forgot-password.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/application/public/forgot-password/forgot-password.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/application/public/forgot-password/forgot-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/application/public/forgot-password/forgot-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
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

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/application/public/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/application/public/forgot-password/forgot-password.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/application/public/login/login.component.html":
/*!***************************************************************!*\
  !*** ./src/app/application/public/login/login.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"d-flex justify-content-center mt-5\">\n        \n    <mat-card class=\"pt-0\" >\n     <mat-progress-bar [style.visibility]=\"loading ? 'visible' : 'hidden'\" class=\"mb-3\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n\n     <mat-card-header>\n     \n            <div class=\"brand-box w-100 mb-3\">\n              <div class=\"logo2 brand m-auto\">\n                <a href=\"#\">brand name</a>\n              </div>\n            </div>\n          </mat-card-header>\n\n\n\n      <mat-card-content>\n\n          <pre>Email : admin@admin.com<br/>Password : password\n          </pre>\n        \n        <form class=\"d-flex flex-column \">\n            <mat-form-field >\n                <input matInput class=\"w-100\" placeholder=\"email\" [(ngModel)]=\"email\" name=\"email\" required>\n                </mat-form-field>\n                <mat-form-field >\n                    <input matInput  class=\"w-100\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n                </mat-form-field>\n        </form>\n  \n\n      </mat-card-content>\n  \n      <mat-card-actions>\n        <button mat-raised-button class=\"w-100 mb-2\" (click)=\"login()\" color=\"primary\">Login</button>\n\n\n\n            \n        <div class=\"d-flex justify-content-center\">\n            <button mat-button routerLink=\"../reset-password\"  >Forgot Password</button>\n            <button mat-button routerLink=\"../signup\"  >Sign Up</button>\n        </div>\n\n        <div class=\"w-100 mt-3 mb-3\">\n                <p class=\"text-center\">or</p>\n                    <button mat-button  class=\"btn btn-social-icon btn-google w-100\" (click)=\"signInWithGoogle()\">\n                        <span class=\"fab fa-google mr-3\"></span>Login with Google\n                    </button>\n                    <button mat-button  class=\"btn btn-social-icon btn-facebook w-100\" (click)=\"signInWithFB()\">\n                        <span class=\"fab fa-facebook mr-3\"></span>Login with Facebook\n                    </button>    \n                </div>\n      </mat-card-actions>\n    </mat-card>\n  </div>"

/***/ }),

/***/ "./src/app/application/public/login/login.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/application/public/login/login.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/application/public/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/application/public/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/authentication.service */ "./src/app/shared/services/authentication.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// social login

var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, auth, socialAuthService) {
        this.router = router;
        this.auth = auth;
        this.socialAuthService = socialAuthService;
        this.loading = false;
        this.invalidCredentials = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('currentUser');
        // this.SubscribeLoginState();
        // this.socialAuthService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        //   if (user != null) {
        // //    localStorage.setItem('currentUser', JSON.stringify(user));
        //     this.router.navigate(['restricted']);
        //     }
        // });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["GoogleLoginProvider"].PROVIDER_ID).then(function (result) {
            _this.SubscribeLoginState();
            _this.router.navigate(['restricted']);
            // if (value) {
            //   console.log(value , '66666');
            // }
        });
    };
    LoginComponent.prototype.signInWithFB = function () {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["FacebookLoginProvider"].PROVIDER_ID);
    };
    LoginComponent.prototype.signOut = function () {
        this.socialAuthService.signOut();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.auth.loginUser(this.email, this.password).subscribe(function (res) {
            console.log(res);
            var data = {
                token: res.token,
                id: res.user.id,
                role_id: res.user.role_id,
                name: res.user.name,
                email: res.user.email,
                avatar: res.user.avatar,
                settings: res.user.settings,
                created_at: res.user.created_at,
                updated_at: res.user.updated_at,
                provider: res.user.provider,
                provider_id: res.user.provider_id,
            };
            _this.loading = false;
            _this.invalidCredentials = true;
            //    localStorage.setItem('token', JSON.stringify(data.token));
            localStorage.setItem('currentUser', JSON.stringify(data));
            _this.router.navigate(['restricted']);
        }, function (err) { return console.log(err); });
        //  this.SubscribeLoginState();
    };
    LoginComponent.prototype.SubscribeLoginState = function () {
        var _this = this;
        console.log('SubscribeLoginState');
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
            if (user != null) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
        if (this.auth.loggedIn()) {
            this.loggedIn = true;
        }
        if (this.loggedIn) {
            console.log('logged in form SubscribeLoginState');
            this.router.navigate(['restricted']);
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/application/public/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/application/public/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _shared_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/application/public/public.component.html":
/*!**********************************************************!*\
  !*** ./src/app/application/public/public.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet> \n\n\n<div class=\" m-auto pt-5\" style=\"width:300px\">\n  <p>\n    login Signup communicate with the  <a href=\"http://resto.thedemo.co/api/documentation\">resto demo</a>.\n  </p>\n  <p>\n  Use an <a href=\"https://chrome.google.com/webstore/detail/cors-toggle/jioikioepegflmdnbocfhgmpmopmjkim?hl=en\"> extension</a>\n  to allow Cross-origin resource sharing (CORS) \n  </p>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/application/public/public.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/application/public/public.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/application/public/public.component.ts":
/*!********************************************************!*\
  !*** ./src/app/application/public/public.component.ts ***!
  \********************************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/app.service */ "./src/app/shared/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicComponent = /** @class */ (function () {
    function PublicComponent(router, socialAuthService, appService) {
        this.router = router;
        this.socialAuthService = socialAuthService;
        this.appService = appService;
    }
    PublicComponent.prototype.ngOnInit = function () {
        // this.socialAuthService.authState.subscribe((user) => {
        //   this.user = user;
        //   this.loggedIn = (user != null);
        //   console.log(user);
        //   if (user != null) {
        //   // localStorage.setItem('currentUser', JSON.stringify(user));
        //   this.router.navigate(['restricted']);
        //   }
        // });
    };
    PublicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/application/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/application/public/public.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _shared_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/application/public/public.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/application/public/public.module.ts ***!
  \*****************************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _public_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public.routing */ "./src/app/application/public/public.routing.ts");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public.component */ "./src/app/application/public/public.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/application/public/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/application/public/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/application/public/forgot-password/forgot-password.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _public_routing__WEBPACK_IMPORTED_MODULE_3__["routing"],
            ],
            declarations: [
                _public_component__WEBPACK_IMPORTED_MODULE_4__["PublicComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]
            ],
            bootstrap: []
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/application/public/public.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/application/public/public.routing.ts ***!
  \******************************************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public.component */ "./src/app/application/public/public.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/application/public/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/application/public/signup/signup.component.ts");
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ "./src/app/application/public/forgot-password/forgot-password.component.ts");





var routes = [
    { path: '', component: _public_component__WEBPACK_IMPORTED_MODULE_1__["PublicComponent"],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
            { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
            { path: 'reset-password', component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"] },
        ]
    },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/application/public/signup/signup.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/application/public/signup/signup.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center mt-5\">\n\n\n  <mat-card class=\"pt-0\">\n      <mat-progress-bar [style.visibility]=\"loading ? 'visible' : 'hidden'\" class=\"mb-3\" color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n    <mat-card-header>\n     \n      <div class=\"brand-box w-100 mb-3\">\n        <div class=\"logo2 brand m-auto\">\n          <a href=\"#\">brand name</a>\n        </div>\n      </div>\n    </mat-card-header>\n    <mat-card-content>\n\n      <form class=\"d-flex flex-column\">\n          <mat-form-field >\n              <input matInput  class=\"w-100\" placeholder=\"Full name\" [(ngModel)]=\"name\" type=\"name\" name=\"name\" required>\n          </mat-form-field>\n\n        <mat-form-field >\n          <input matInput class=\"w-100\" placeholder=\"Email\" [(ngModel)]=\"email\" name=\"email\" required>\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput class=\"w-100\" placeholder=\"Provider\" [(ngModel)]=\"provider\" name=\"provider\" >\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput class=\"w-100\" placeholder=\"Provide Id\" [(ngModel)]=\"provider_id\" name=\"provider_id\" >\n        </mat-form-field>\n\n\n        <mat-form-field>\n            <mat-select placeholder=\"Role\" [(value)]=\"role_id\" required>\n              <mat-option value=\"1\">Normal</mat-option>\n              <mat-option value=\"2\">Server</mat-option>\n              <mat-option value=\"3\">Manager</mat-option>\n            </mat-select>\n          </mat-form-field>\n\n\n        <mat-form-field >\n            <input matInput  class=\"w-100\" placeholder=\"Password\" [(ngModel)]=\"password\" type=\"password\" name=\"password\" required>\n        </mat-form-field>\n      </form>\n\n    </mat-card-content>\n\n    <mat-card-actions>\n      <button mat-raised-button class=\"w-100 mb-2\" (click)=\"signUp()\" color=\"primary\">Sign up</button>\n\n      <div class=\"d-flex justify-content-center\">\n          <button mat-raised-button routerLink=\"../login\"  >Back to Login</button>\n      </div>\n\n    </mat-card-actions>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/application/public/signup/signup.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/application/public/signup/signup.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/application/public/signup/signup.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/application/public/signup/signup.component.ts ***!
  \***************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, activeRoute, userService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.userService = userService;
        this.provider = null;
        this.provider_id = null;
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signUp = function () {
        this.loading = true;
        var user = {
            name: this.name,
            email: this.email,
            role: this.role_id,
            password: this.password
        };
        console.log(user);
        this.userService.createUser(user).subscribe(function (res) {
            console.log(res);
            var data = {
                token_type: res.token_type,
                expires_in: res.expires_in,
                access_token: res.access_token
            };
            // localStorage.setItem('token', JSON.stringify(data.token));
            // localStorage.setItem('currentUser', JSON.stringify(data));
            // this.router.navigate(['restricted']);
        }, function (err) { return console.log(err); });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/application/public/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/application/public/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=application-public-public-module.js.map