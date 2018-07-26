(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://resto.thedemo.co//api/';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser) {
            console.log(currentUser);
            if (currentUser.provider) {
                console.log('social userrrr');
                var socialUser = currentUser;
                this.token = currentUser.authToken;
                this.user = {
                    provider: socialUser.provider,
                    id: socialUser.id,
                    email: socialUser.email,
                    name: socialUser.name,
                    // photoUrl: socialUser.photoUrl,
                    avatar: socialUser.photoUrl,
                    firstName: socialUser.firstName,
                    lastName: socialUser.lastName,
                    authToken: socialUser.authToken,
                    idToken: socialUser.idToken,
                };
            }
            else {
                console.log('not social user');
                var nonSocialUser = currentUser;
                this.token = currentUser.token;
                this.user = {
                    id: nonSocialUser.id,
                    role_id: nonSocialUser.role_id,
                    name: nonSocialUser.name,
                    email: nonSocialUser.email,
                    avatar: nonSocialUser.avatar,
                    settings: nonSocialUser.settings,
                    created_at: nonSocialUser.created_at,
                    updated_at: nonSocialUser.updated_at,
                    provider: nonSocialUser.provider,
                    provider_id: nonSocialUser.provider_id,
                    token: nonSocialUser.token,
                };
            }
            console.log('currentUser');
            console.log('this.user', this.user);
            console.log('this.token', this.token);
        }
    }
    UserService.prototype.getCurrentUser = function () {
        return this.user;
    };
    // updateHttpHeader() {
    //   this.authHeader = new HttpHeaders();
    //   if (this.user && this.user.token) {
    //     this.token = this.user.token;
    //     this.authHeader.append('Authorization', `Bearer ${this.user.token}`);
    //   }
    // }
    UserService.prototype.createUser = function (user) {
        console.log(user);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .set('No-Auth', 'True')
            .set('X-CSRF-TOKEN', '');
        var body = {
            name: user.name,
            email: user.email,
            role: user.role,
            password: user.password,
        };
        var newUser = "name=" + user.name + "&email=" + user.email + "&password=" + user.password + "&role=" + user.role;
        return this.http.post('http://resto.thedemo.co//api/user/create', newUser, { headers: headers });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map