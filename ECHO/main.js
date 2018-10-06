(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/users/users-list/users-list.component */ "./src/app/shared/components/users/users-list/users-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', redirectTo: 'users', pathMatch: 'full'
    },
    {
        path: 'users', component: _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_2__["UsersListComponent"]
    },
    {
        path: '**', redirectTo: 'users'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ECHO';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'echo-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/users/users-list/users-list.component */ "./src/app/shared/components/users/users-list/users-list.component.ts");
/* harmony import */ var _shared_components_users_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/users/user-item/user-item.component */ "./src/app/shared/components/users/user-item/user-item.component.ts");
/* harmony import */ var _shared_pipes_alt_title_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/pipes/alt-title.pipe */ "./src/app/shared/pipes/alt-title.pipe.ts");
/* harmony import */ var _shared_components_users_add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/users/add-new/add-new.component */ "./src/app/shared/components/users/add-new/add-new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                // Users list components
                _shared_components_users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_5__["UsersListComponent"],
                _shared_components_users_user_item_user_item_component__WEBPACK_IMPORTED_MODULE_6__["UserItemComponent"],
                _shared_pipes_alt_title_pipe__WEBPACK_IMPORTED_MODULE_7__["AltTitlePipe"],
                _shared_components_users_add_new_add_new_component__WEBPACK_IMPORTED_MODULE_8__["AddNewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/components/users/add-new/add-new.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/users/add-new/add-new.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-group container\" [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" autocomplete=\"off\">\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <div class=\"form-control col-2\">\n      <input type=\"text\" id=\"last\" [formControlName]=\"'last'\">\n      <label for=\"last\">Last name <span>*</span></label>\n    </div>\n    <div class=\"form-control col-2\">\n      <input type=\"text\" id=\"first\" [formControlName]=\"'first'\">\n      <label for=\"first\">First name <span>*</span></label>\n    </div>\n    <div class=\"form-control col-2\">\n      <input type=\"text\" id=\"username\" [formControlName]=\"'username'\">\n      <label for=\"username\">Username <span>*</span></label>\n    </div>\n    <div class=\"form-control col-2\">\n      <input type=\"text\" id=\"phone\" [formControlName]=\"'phone'\">\n      <label for=\"phone\">Phone <span>*</span></label>\n    </div>\n    <div class=\"form-control col-2\">\n      <input type=\"text\" id=\"state\" [formControlName]=\"'state'\">\n      <label for=\"state\">State <span>*</span></label>\n    </div>\n    <div class=\"form-control col-1 male-female d-f\">\n      <input type=\"radio\" formControlName=\"gender\" class=\"hidden gender\" id=\"male\" name=\"gender\" value=\"male\">\n      <label for=\"male\">\n        <div class=\"male\"></div>\n      </label>\n      <input type=\"radio\" formControlName=\"gender\" class=\"hidden gender\" id=\"female\" name=\"gender\" value=\"female\">\n      <label for=\"female\">\n        <div class=\"female\"></div>\n      </label>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-3\">\n      <div class=\"form-control\">\n        <input type=\"text\" id=\"email\" [formControlName]=\"'email'\">\n        <label for=\"email\">Email <span>*</span></label>\n      </div>\n      <div class=\"form-control\">\n        <input type=\"text\" id=\"cell\" [formControlName]=\"'cell'\">\n        <label for=\"cell\">Cell <span>*</span></label>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"form-control\">\n        <input type=\"text\" id=\"address\" [formControlName]=\"'address'\">\n        <label for=\"address\">Address <span>*</span></label>\n      </div>\n      <div class=\"form-control\">\n        <input type=\"text\" id=\"city\" [formControlName]=\"'city'\">\n        <label for=\"city\">City <span>*</span></label>\n      </div>\n    </div>\n    <div class=\"col-3\">\n      <div class=\"form-control\">\n        <input type=\"text\" id=\"zip\" [formControlName]=\"'zip'\">\n        <label for=\"zip\">Zip code <span>*</span></label>\n      </div>\n      <div class=\"form-control\">\n        <input type=\"date\" id=\"dob\" [formControlName]=\"'dob'\">\n        <label for=\"dob\">Birthday <span>*</span></label>\n      </div>\n    </div>\n    <div class=\"col-2\">\n      <button type=\"submit\" [disabled]=\"form.invalid\">{{'Add new user' | uppercase}}</button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/shared/components/users/add-new/add-new.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/users/add-new/add-new.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/users/add-new/add-new.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/users/add-new/add-new.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewComponent", function() { return AddNewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddNewComponent = /** @class */ (function () {
    function AddNewComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.addNewUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddNewComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddNewComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            cell: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            dob: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            first: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            last: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // title: [null, [Validators.required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            address: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            zip: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            gender: [null]
        });
    };
    AddNewComponent.prototype.onSubmit = function () {
        var newUser = {
            registered: {
                date: new Date().toDateString(),
                age: 0
            },
            dob: {
                date: new Date(this.form.controls['dob'].value).toDateString(),
                age: 0
            },
            cell: this.form.controls['cell'].value,
            phone: this.form.controls['phone'].value,
            name: {
                first: this.form.controls['first'].value,
                last: this.form.controls['last'].value
            },
            email: this.form.controls['email'].value,
            gender: this.form.controls['gender'].value,
            location: {
                postcode: this.form.controls['zip'].value,
                city: this.form.controls['city'].value,
                street: this.form.controls['address'].value,
                state: this.form.controls['state'].value,
            },
            login: {
                username: this.form.controls['username'].value,
            },
            picture: {
                medium: '',
                large: '',
                thumbnail: ''
            }
        };
        this.addNewUser.emit(newUser);
        this.initForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddNewComponent.prototype, "addNewUser", void 0);
    AddNewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'echo-add-new',
            template: __webpack_require__(/*! ./add-new.component.html */ "./src/app/shared/components/users/add-new/add-new.component.html"),
            styles: [__webpack_require__(/*! ./add-new.component.scss */ "./src/app/shared/components/users/add-new/add-new.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddNewComponent);
    return AddNewComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/users/user-item/user-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/users/user-item/user-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-item container\">\n  <div class=\"user-item__common row\" (click)=\"toggleCollapsed(userData)\">\n    <div class=\"user-pic col-1\" *ngIf=\"userData.picture.medium.length\">\n      <img [src]=\"userData.picture.medium\">\n    </div>\n    <div class=\"user-pic col-1\" *ngIf=\"!userData.picture.medium.length\">\n      <img [src]=\"'./assets/icons/user-pic-' + userData.gender + '.jpg'\">\n    </div>\n    <div class=\"user-last-name col-2\">\n      <p>{{userData.name.last | titlecase}}</p>\n    </div>\n    <div class=\"user-first-name col-2\">\n      <p>{{userData.name.first | titlecase}}</p>\n    </div>\n    <div class=\"user-name col-2\">\n      <p>{{userData.login.username}}</p>\n    </div>\n    <div class=\"user-phone col-2\">\n      <p>{{userData.phone}}</p>\n    </div>\n    <div class=\"user-location col-2\">\n      <p>{{userData.location.state | titlecase}}</p>\n    </div>\n    <div class=\"col-1 d-f a-i-c\">\n      <div class=\"open-detailed\" [class.collapsed]=\"userData.collapsed\"></div>\n    </div>\n  </div>\n  <div class=\"user-item__detailed container\" [class.collapsed]=\"!userData.collapsed\">\n    <div class=\"row\">\n      <div class=\"detailed-name col-12\">\n        <h1>\n          {{userData.name.first | titlecase}}\n        </h1>\n        <div class=\"male-female\">\n          <div [class]=\"userData.gender\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-3\">\n        <ul class=\"detailed-col-list\">\n          <li class=\"detailed-row\">\n            <p>\n              Username: <span>{{userData.login.username}}</span>\n            </p>\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              Registered: <span>{{userData.registered.date | date:'dd/MM/yyyy'}}</span>\n            </p>\n\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              Email: <span>{{userData.email}}</span>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-3\">\n        <ul class=\"detailed-col-list\">\n          <li class=\"detailed-row\">\n            <p>\n              Address: <span>{{userData.location.street}}</span>\n            </p>\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              City: <span>{{userData.location.city}}</span>\n            </p>\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              Zip Code: <span>{{userData.location.postcode}}</span>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-3\">\n        <ul class=\"detailed-col-list\">\n          <li class=\"detailed-row\">\n            <p>\n              Birthday: <span>{{userData.dob.date | date:'dd/MM/yyyy'}}</span>\n            </p>\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              Phone: <span>{{userData.phone}}</span>\n            </p>\n          </li>\n          <li class=\"detailed-row\">\n            <p>\n              Cell: <span>{{userData.cell}}</span>\n            </p>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-2\">\n        <div class=\"detailed-row\" *ngIf=\"userData.picture.medium.length\">\n          <img [src]=\"userData.picture.large\"\n               [alt]=\"([userData.name.first, userData.name.last] | altTitle) | titlecase\">\n        </div>\n        <div class=\"detailed-row\" *ngIf=\"!userData.picture.medium.length\">\n          <img [src]=\"'./assets/icons/user-pic-' + userData.gender + '.jpg'\"\n               [alt]=\"([userData.name.first, userData.name.last] | altTitle) | titlecase\">\n        </div>\n      </div>\n      <div class=\"col-1\">\n        <div class=\"open-detailed remove-user\" (click)=\"remove()\"></div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/components/users/user-item/user-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/users/user-item/user-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/users/user-item/user-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/users/user-item/user-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
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

var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
        this.toggleCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeUser = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    UserItemComponent.prototype.toggleCollapsed = function () {
        this.userData.collapsed = !this.userData.collapsed;
        this.toggleCollapse.emit(this.userData);
    };
    UserItemComponent.prototype.remove = function () {
        this.removeUser.emit(this.userData);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserItemComponent.prototype, "userData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserItemComponent.prototype, "toggleCollapse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], UserItemComponent.prototype, "removeUser", void 0);
    UserItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'echo-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/shared/components/users/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.scss */ "./src/app/shared/components/users/user-item/user-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/users/users-list/users-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/users/users-list/users-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-list__header\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-1 d-f a-i-c\"></div>\n      <div class=\"col-2 d-f a-i-c\" *ngFor=\"let header of listHeaders\">\n        {{header | titlecase}}\n      </div>\n      <div class=\"col-1 d-f a-i-c\" [title]=\"'Open form to add new user'\">\n        <div class=\"open-detailed add-user-form\" (click)=\"openCloseAddNewUserForm()\"></div>\n      </div>\n    </div>\n    <div class=\"row add-user-form\" [class.collapsed]=\"!addFormState\">\n      <echo-add-new (addNewUser)=\"addNewUser($event)\"></echo-add-new>\n    </div>\n  </div>\n</div>\n\n<ul class=\"user-list\">\n  <li *ngFor=\"let user of usersList\" class=\"user-list__item\">\n    <echo-user-item\n      [userData]=\"user\"\n      (toggleCollapse)=\"toggleCollapse($event)\"\n      (removeUser)=\"removeUserFromList($event)\"></echo-user-item>\n  </li>\n</ul>\n\n\n\n"

/***/ }),

/***/ "./src/app/shared/components/users/users-list/users-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/users/users-list/users-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/components/users/users-list/users-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/users/users-list/users-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data.service */ "./src/app/shared/services/data.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersListComponent = /** @class */ (function () {
    function UsersListComponent(dataService) {
        this.dataService = dataService;
        this.usersCount = 15;
        this.addFormState = false;
        this.listHeaders = [
            'last',
            'first',
            'username',
            'phone',
            'location'
        ];
    }
    UsersListComponent.prototype.ngOnInit = function () {
        this.getUsersData();
    };
    UsersListComponent.prototype.getUsersData = function () {
        var _this = this;
        this.dataService.getDataFromApi(this.usersCount)
            .subscribe(function (response) {
            _this.usersList = response.results.map(function (result) {
                return __assign({}, result, { collapsed: false });
            });
            console.log(_this.usersList);
        });
    };
    UsersListComponent.prototype.toggleCollapse = function (inputUser) {
        this.usersList.forEach(function (item) {
            if (item === inputUser) {
                item.collapsed = inputUser.collapsed;
            }
            else {
                item.collapsed = false;
            }
        });
    };
    UsersListComponent.prototype.removeUserFromList = function (inputUser) {
        this.usersList.splice(this.usersList.indexOf(inputUser), 1);
    };
    UsersListComponent.prototype.openCloseAddNewUserForm = function () {
        this.addFormState = !this.addFormState;
    };
    UsersListComponent.prototype.addNewUser = function (newUser) {
        this.usersList.push(newUser);
        this.openCloseAddNewUserForm();
    };
    UsersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'echo-users-list',
            template: __webpack_require__(/*! ./users-list.component.html */ "./src/app/shared/components/users/users-list/users-list.component.html"),
            styles: [__webpack_require__(/*! ./users-list.component.scss */ "./src/app/shared/components/users/users-list/users-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/alt-title.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/alt-title.pipe.ts ***!
  \************************************************/
/*! exports provided: AltTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AltTitlePipe", function() { return AltTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AltTitlePipe = /** @class */ (function () {
    function AltTitlePipe() {
    }
    AltTitlePipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        var result = '';
        value.forEach(function (val) {
            result = result + ' ' + val;
        });
        return result;
    };
    AltTitlePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'altTitle'
        })
    ], AltTitlePipe);
    return AltTitlePipe;
}());



/***/ }),

/***/ "./src/app/shared/services/data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/data.service.ts ***!
  \*************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
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


var DataService = /** @class */ (function () {
    function DataService(_http) {
        this._http = _http;
        this.apiUrl = 'https://randomuser.me/api/';
    }
    DataService.prototype.getDataFromApi = function (count) {
        if (count) {
            return this._http.get(this.apiUrl + "?results=" + count + "&nat=us");
        }
        else {
            return this._http.get(this.apiUrl + "?results=10");
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WORK\ECHO\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map