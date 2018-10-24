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
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/calculator/calculator.component */ "./src/app/pages/calculator/calculator.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'calculator', component: _pages_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'search', component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_4__["SearchComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'auth', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["loginComponent"] },
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
        this.title = 'loanCalculator';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
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
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/calculator/calculator.component */ "./src/app/pages/calculator/calculator.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/search/search.component */ "./src/app/pages/search/search.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_13__["loginComponent"],
                _pages_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_14__["CalculatorComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DialogComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"]
            ],
            entryComponents: [
                _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_17__["DialogComponent"],
                _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_http_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/http.provider */ "./src/app/services/http.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth, myRoute, active) {
        this.auth = auth;
        this.myRoute = myRoute;
        this.active = active;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.auth.token) {
            return true;
        }
        else {
            this.myRoute.navigate(["auth"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_http_provider__WEBPACK_IMPORTED_MODULE_2__["HttpProvider"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/dialog/dialog.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.text}}</h1>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">Ok</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __webpack_require__(/*! ./dialog.component.html */ "./src/app/components/dialog/dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"Header\">\r\n    <mat-card-title class=\"header-title\">\r\n        Loan Calculator\r\n    </mat-card-title>\r\n    <nav *ngIf=\"showNavItems=='true'\">\r\n        <ul >\r\n            <li (click)=\"goToCalculator()\">Calculator</li>\r\n            <li (click)=\"goToSearch()\">Search</li>\r\n        </ul>\r\n    </nav>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Header {\n  background-color: #4A148C;\n  border-radius: 0;\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  z-index: 2; }\n\n.header-title {\n  padding-left: 5%;\n  display: inline; }\n\n.Header nav {\n  float: right; }\n\n.Header nav ul {\n  list-style: none;\n  display: inline;\n  padding-right: 20px; }\n\n.Header nav ul li {\n  display: inline;\n  padding: 10px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRjpcXGxlYXNlX2NhbGNfd2ViL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6QixpQkFBZ0I7RUFDaEIsYUFBVztFQUNYLGdCQUFlO0VBQ2YsT0FBSztFQUNMLFFBQU07RUFDTixZQUFVO0VBQ1YsV0FBVSxFQUNiOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksYUFBWSxFQUNmOztBQUNEO0VBQ0ksaUJBQWdCO0VBQ2hCLGdCQUFlO0VBQ2Ysb0JBQW1CLEVBQ3RCOztBQUNEO0VBQ0ksZ0JBQWU7RUFDZixjQUFhO0VBQ2IsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSGVhZGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRBMTQ4QztcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmhlYWRlci10aXRsZXtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLkhlYWRlciBuYXZ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLkhlYWRlciBuYXYgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxufVxyXG4uSGVhZGVyIG5hdiB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // console.log(this.showNavItems)
    };
    HeaderComponent.prototype.goToCalculator = function () {
        this.router.navigateByUrl('/calculator');
    };
    HeaderComponent.prototype.goToSearch = function () {
        this.router.navigateByUrl('/search');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('showNavItems'),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "showNavItems", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/spinner/spinner.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner  diameter=\"50\"></mat-spinner>"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/spinner/spinner.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
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


var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    SpinnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spinner',
            template: __webpack_require__(/*! ./spinner.component.html */ "./src/app/components/spinner/spinner.component.html"),
            styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/app/components/spinner/spinner.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/pages/calculator/calculator.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header showNavItems=\"true\"></app-header>\r\n<mat-card class=\"calc-card\" *ngIf=\"title=='Calculator'\">\r\n    <mat-card-title class=\"calc-title\">{{title}}</mat-card-title>\r\n    <form class=\"login-form\" name=\"calcForm\" #calcForm=\"ngForm\">\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" name=\"sprice\" [(ngModel)]=\"calc.sprice\" required matInput placeholder=\"Sticker Price ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.rpercent\" name=\"rpercent\" required matInput placeholder=\"Residual Percentage (%)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.nsp\" name=\"nsp\" required matInput placeholder=\"Negotiated Sales Price ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.dp\" name=\"dp\" required matInput placeholder=\"Down Payment ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.laf\" name=\"laf\" required matInput placeholder=\"Lease Acquisition Fees ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.dtf\" name=\"dtf\" required matInput placeholder=\"Doc and Tire Fee ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.mFactor\" name=\"mFactor\" required matInput placeholder=\"Money Factor ($)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.lMonths\" name=\"lMonths\" required matInput placeholder=\"Lease Months\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.tRate\" name=\"tRate\" required matInput placeholder=\"Tax Rate (%)\" />\r\n        </mat-form-field>\r\n        <mat-form-field class=\"calc-form-item\">\r\n            <input type=\"number\" [(ngModel)]=\"calc.regFee\" name=\"regFee\" required matInput placeholder=\"Registration Fee ($)\" />\r\n        </mat-form-field>\r\n        <mat-card-actions>\r\n            <button mat-raised-button color=\"accent\" (click)=\"calculate($event)\" [disabled]=\"calcForm.invalid\">Calculate\r\n                Lease Payment</button>\r\n            <button mat-raised-button color=\"accent\" (click)=\"initialiseCalc($event)\">Restore Default</button>\r\n        </mat-card-actions>\r\n    </form>\r\n</mat-card>\r\n<mat-card class=\"calc-card\" *ngIf=\"title=='Loan Value'\">\r\n    <mat-card-title class=\"calc-title\">{{title}}</mat-card-title>\r\n    <mat-card-content>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Base Payment</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.base_pay}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Total  Lease Without Tax</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.tot_lease_without_tax}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Deprecated Amount</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.dep_amt}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Adjusted Capitalized Cost</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.adj_cap_cost}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Total Cost Of Lease</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.tot_cost_of_lease}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Residual Value</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.residual_value}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Drive off</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.drive_off}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Total Lease With Tax</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.tot_lease_with_tax}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Monthly Rent</div>\r\n            <div class=\"display-item-col2\">{{leaseResult.month_rent}}</div>\r\n        </div>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-raised-button color=\"accent\" (click)=\"addCustomer($event)\">Add Customer Details</button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"goBack($event)\">Back</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n<mat-card class=\"calc-card\" *ngIf=\"title=='Customer Details'\">\r\n    <mat-card-title class=\"calc-title\">{{title}}</mat-card-title>\r\n    <form class=\"login-form\" name=\"custForm\" #custForm=\"ngForm\">\r\n        <mat-card-content>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <mat-select placeholder=\"Title\" name=\"title\" [(value)]=\"customer.title\" required>\r\n                    <mat-option value=\"Mr.\">Mr.</mat-option>\r\n                    <mat-option value=\"Miss.\">Miss.</mat-option>\r\n                    <mat-option value=\"Mrs.\">Mrs.</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.firstName\" name=\"firstName\" required matInput placeholder=\"First Name\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.lastName\" name=\"lastName\" required matInput placeholder=\"Last Name\" />\r\n            </mat-form-field>\r\n            <h4>Address:</h4>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.street1\" name=\"street1\"  matInput placeholder=\"Street1\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.street2\" name=\"street2\"  matInput placeholder=\"Street2\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.city\" name=\"city\"  matInput placeholder=\"City\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.state\" name=\"state\"  matInput placeholder=\"State\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.zip\" name=\"zip\"  matInput placeholder=\"Zip\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"text\" [(ngModel)]=\"customer.address.country\" name=\"country\"  matInput placeholder=\"Country\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"contact-phone-field\">\r\n                <input type=\"tel\" [(ngModel)]=\"customer.phone1.number\" name=\"phone1\" required matInput placeholder=\"phone1\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"contact-phone-type-field\">\r\n                <mat-select placeholder=\"Type\" name=\"type1\" [(value)]=\"customer.phone1.type\" required>\r\n                    <mat-option value=\"Mobile\">Mobile</mat-option>\r\n                    <mat-option value=\"Residence\">Residence</mat-option>\r\n                    <mat-option value=\"Office\">Office</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"contact-phone-field\">\r\n                <input type=\"tel\" [(ngModel)]=\"customer.phone2.number\" name=\"phone2\"  matInput placeholder=\"phone2\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"contact-phone-type-field\">\r\n                <mat-select placeholder=\"Type\" name=\"type1\" [(value)]=\"customer.phone2.type\">\r\n                    <mat-option value=\"Mobile\">Mobile</mat-option>\r\n                    <mat-option value=\"Residence\">Residence</mat-option>\r\n                    <mat-option value=\"Office\">Office</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"calc-form-item\">\r\n                <input type=\"email\" [(ngModel)]=\"customer.email\" name=\"email\" required matInput placeholder=\"Email\" />\r\n            </mat-form-field>\r\n\r\n        </mat-card-content>\r\n    </form>\r\n    <mat-card-actions>\r\n        <button mat-raised-button color=\"accent\" (click)=\"saveCustomer($event)\" [disabled]=\"custForm.invalid\">Save</button>\r\n        <button mat-raised-button color=\"accent\" (click)=\"goBack($event)\">Back</button>\r\n    </mat-card-actions>\r\n</mat-card>\r\n<mat-card class=\"calc-card\" *ngIf=\"title=='Customer Number'\">\r\n    <mat-card-title class=\"calc-title\">{{title}}</mat-card-title>\r\n    <mat-card-content>\r\n        Customer details saved successfully. <b>Customer Number</b> is <b>{{custNum}}</b>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-raised-button color=\"accent\" (click)=\"startCalculation($event)\">Start New Calculation</button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".calc-card {\n  margin: 80px auto;\n  width: 500px; }\n\n.calc-title {\n  text-align: center; }\n\n.calc-form-item {\n  display: block;\n  width: 100%; }\n\n.contact-phone-field {\n  width: 60%;\n  margin-right: 10%; }\n\n.contact-phone-type-field {\n  width: 30%; }\n\n.display-item-row {\n  width: 100%;\n  padding: 10px; }\n\n.display-item-col {\n  display: inline-block;\n  width: 70%;\n  font-weight: bold; }\n\n.display-item-col2 {\n  display: inline-block;\n  width: 25%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FsY3VsYXRvci9GOlxcbGVhc2VfY2FsY193ZWIvc3JjXFxhcHBcXHBhZ2VzXFxjYWxjdWxhdG9yXFxjYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQWlCO0VBQ2pCLGFBQVcsRUFDZDs7QUFDRDtFQUNJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUNJLGVBQWM7RUFDZCxZQUFVLEVBQ2I7O0FBQ0Q7RUFFSSxXQUFTO0VBQ1Qsa0JBQWdCLEVBQ25COztBQUNEO0VBRUksV0FBUyxFQUNaOztBQUNEO0VBRUksWUFBVTtFQUNWLGNBQVksRUFDZjs7QUFDRDtFQUVJLHNCQUFxQjtFQUNyQixXQUFTO0VBQ1Qsa0JBQWlCLEVBQ3BCOztBQUNEO0VBRUksc0JBQXFCO0VBQ3JCLFdBQVMsRUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYWxjLWNhcmRcclxue1xyXG4gICAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgICB3aWR0aDo1MDBweDtcclxufVxyXG4uY2FsYy10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uY2FsYy1mb3JtLWl0ZW17XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuLmNvbnRhY3QtcGhvbmUtZmllbGRcclxue1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjEwJTtcclxufVxyXG4uY29udGFjdC1waG9uZS10eXBlLWZpZWxkXHJcbntcclxuICAgIHdpZHRoOjMwJTtcclxufVxyXG4uZGlzcGxheS1pdGVtLXJvd1xyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5kaXNwbGF5LWl0ZW0tY29sXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kaXNwbGF5LWl0ZW0tY29sMlxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoyNSU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/calculator/calculator.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/calculator/calculator.component.ts ***!
  \**********************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calculate_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/calculate.provider */ "./src/app/services/calculate.provider.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent(calculateProvider, dialog) {
        this.calculateProvider = calculateProvider;
        this.dialog = dialog;
        this.calc = {
            sprice: Number,
            rpercent: Number,
            nsp: Number,
            dP: Number,
            laf: Number,
            dtf: Number,
            mFactor: Number,
            lMonths: Number,
            tRate: Number,
            regFee: Number
        };
        this.Address = {
            street1: String,
            street2: String,
            city: String,
            state: String,
            zip: String,
            country: String
        };
        this.Phone = {
            number: Number,
            type: String,
        };
        this.customer = {
            title: String,
            firstName: String,
            lastName: String,
            address: this.Address,
            phone1: this.Phone,
            phone2: this.Phone,
            email: String
        };
        this.leaseResult = {
            "base_pay": Number,
            "tot_lease_without_tax": Number,
            "dep_amt": Number, "tot_fee": Number,
            "adj_cap_cost": Number,
            "tot_cost_of_lease": Number,
            "residual_value": Number,
            "drive_off": Number,
            "tot_lease_with_tax": Number,
            "month_rent": Number
        };
        this.initialiseCalc();
        this.initialilseCustomer();
        this.initiateLeaseResult();
        this.title = "Calculator";
    }
    CalculatorComponent.prototype.initialiseCalc = function () {
        this.calc = {
            sprice: 30545,
            rpercent: 63,
            nsp: 27800,
            dp: 0,
            laf: 595,
            dtf: 90,
            mFactor: 0.002,
            lMonths: 36,
            tRate: 7.75,
            regFee: 400
        };
    };
    CalculatorComponent.prototype.initiateLeaseResult = function () {
        this.leaseResult = {
            "base_pay": null,
            "tot_lease_without_tax": null,
            "dep_amt": null, "tot_fee": null,
            "adj_cap_cost": null,
            "tot_cost_of_lease": null,
            "residual_value": null,
            "drive_off": null,
            "tot_lease_with_tax": null,
            "month_rent": null
        };
    };
    CalculatorComponent.prototype.initialilseCustomer = function () {
        this.customer = {
            title: null,
            firstName: null,
            lastName: null,
            address: {
                street1: "",
                street2: "",
                city: "",
                state: "",
                zip: "",
                country: ""
            },
            phone1: {
                number: null,
                type: null,
            },
            phone2: {
                number: "",
                type: "",
            },
            email: null
        };
    };
    CalculatorComponent.prototype.calculate = function () {
        var _this = this;
        var spinner = this.dialog.open(_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], { width: '100px' });
        var postData = {
            "sticker_price": this.calc.sprice,
            "residual_percent": this.calc.rpercent,
            "neg_sales_price": this.calc.nsp,
            "down_payment": this.calc.dp,
            "lease_acq_fee": this.calc.laf,
            "doc_tire_fee": this.calc.dtf,
            "money_factor": this.calc.mFactor,
            "lease_months": this.calc.lMonths,
            "tax_rate": this.calc.tRate,
            "reg_fee": this.calc.regFee
        };
        this.calculateProvider.calculateLease(postData).then(function (data) {
            _this.leaseResult = data.data.output_values;
            spinner.close();
            _this.title = "Loan Value";
            _this.scrollToTop();
        }, function (error) {
            spinner.close();
            var errorText = {
                text: error
            };
            _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { width: '500px', data: errorText });
        });
    };
    CalculatorComponent.prototype.addCustomer = function () {
        this.title = "Customer Details";
        this.scrollToTop();
    };
    CalculatorComponent.prototype.saveCustomer = function () {
        var _this = this;
        var spinner = this.dialog.open(_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], { width: '100px' });
        var postData = {
            "lease": {
                "lease_acq_fee": this.calc.laf,
                "down_payment": this.calc.dp,
                "lease_months": this.calc.lMonths,
                "sticker_price": this.calc.sprice,
                "residual_percent": this.calc.rpercent,
                "doc_tire_fee": this.calc.dtf,
                "money_factor": this.calc.mFactor,
                "tax_rate": this.calc.tRate,
                "neg_sales_price": this.calc.nsp,
                "reg_fee": this.calc.regFee,
                "tot_lease_with_tax": this.leaseResult.tot_lease_with_tax
            },
            "customer": {
                "city": this.customer.address.city,
                "first_name": this.customer.firstName,
                "last_name": this.customer.lastName,
                "zip": this.customer.address.zip,
                "title": this.customer.title,
                "country": this.customer.address.country,
                "phone_2_type": this.getPhoneType(this.customer.phone2.type),
                "state": this.customer.address.state,
                "phone_1_type": this.getPhoneType(this.customer.phone1.type),
                "street_1": this.customer.address.street1,
                "street_2": this.customer.address.street2,
                "phone_2": this.customer.phone2.number,
                "email": this.customer.email,
                "phone_1": this.customer.phone1.number
            }
        };
        this.calculateProvider.saveCustomer(postData).then(function (data) {
            _this.custNum = data.data;
            spinner.close();
            _this.title = "Customer Number";
            _this.scrollToTop();
        }, function (error) {
            spinner.close();
            var errorText = {
                text: error
            };
            _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { width: '500px', data: errorText });
        });
    };
    CalculatorComponent.prototype.startCalculation = function () {
        this.initialiseCalc();
        this.initialilseCustomer();
        this.initiateLeaseResult();
        this.title = "Calculator";
        this.scrollToTop();
    };
    CalculatorComponent.prototype.scrollToTop = function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 100);
    };
    CalculatorComponent.prototype.goBack = function () {
        if (this.title == "Loan Value") {
            this.title = "Calculator";
        }
        if (this.title == "Customer Details") {
            this.title = "Loan Value";
        }
    };
    CalculatorComponent.prototype.getPhoneType = function (type) {
        if (type == 'Mobile') {
            return 0;
        }
        else if (type == 'Residence') {
            return 1;
        }
        else if (type == 'Office') {
            return 2;
        }
        else if (type == '') {
            return "";
        }
    };
    CalculatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/pages/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.scss */ "./src/app/pages/calculator/calculator.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calculate_provider__WEBPACK_IMPORTED_MODULE_1__["CalculateProvider"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header showNavItems=\"false\"></app-header>\r\n<div class=\"Login\"  *ngIf=\"authType=='Sign Up'\">\r\n    <mat-card class=\"login-card\">\r\n        <mat-card-title class=\"login-title\">{{authType}}</mat-card-title>\r\n        <form class=\"login-form\" name=\"regForm\" #regForm=\"ngForm\">\r\n            <mat-form-field class=\"login-form-item\">\r\n                <input type=\"text\" name=\"uname\" [(ngModel)]=\"reg.uname\" required minlength=\"5\" matInput placeholder=\"username\" />\r\n            </mat-form-field>\r\n            <mat-form-field class=\"login-form-item\">\r\n                <input type=\"password\" [(ngModel)]=\"reg.pass\" name=\"password\" required minlength=\"8\" matInput placeholder=\"password\" />\r\n            </mat-form-field>\r\n            <button mat-raised-button color=\"accent\" (click)=\"authUser($event)\" [disabled]=\"regForm.invalid\">{{authType}}</button>\r\n        </form>\r\n    </mat-card>\r\n    <a class=\"nav-link\" (click)=\"goToLogin()\" >Back to login?</a>\r\n</div>\r\n<div class=\"Login\"  *ngIf=\"authType=='Login'\">\r\n        <mat-card class=\"login-card\">\r\n            <mat-card-title class=\"login-title\">{{authType}}</mat-card-title>\r\n            <form class=\"login-form\" name=\"logForm\" #logForm=\"ngForm\">\r\n                <mat-form-field class=\"login-form-item\">\r\n                    <input type=\"text\" name=\"uname\" [(ngModel)]=\"log.uname\" required  matInput placeholder=\"username\" />\r\n                </mat-form-field>\r\n                <mat-form-field class=\"login-form-item\">\r\n                    <input type=\"password\" [(ngModel)]=\"log.pass\" name=\"password\" required matInput placeholder=\"password\" />\r\n                </mat-form-field>\r\n                <button mat-raised-button color=\"accent\" (click)=\"authUser($event)\" [disabled]=\"logForm.invalid\">{{authType}}</button>\r\n            </form>\r\n        </mat-card>\r\n        <a class=\"nav-link\" (click)=\"goToSignup()\">new user? sign up here.</a>\r\n    </div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Login {\n  text-align: center; }\n\n.login-card {\n  text-align: center;\n  width: 400px;\n  margin: 80px auto; }\n\n.login-title {\n  font-weight: bold; }\n\n.login-form-item {\n  display: block;\n  width: 100%; }\n\n.nav-link {\n  cursor: pointer;\n  color: #333333;\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRjpcXGxlYXNlX2NhbGNfd2ViL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksbUJBQWtCO0VBQ2xCLGFBQVc7RUFDWCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFFRyxrQkFBaUIsRUFDbkI7O0FBQ0Q7RUFFSSxlQUFjO0VBQ2QsWUFBVSxFQUNiOztBQUNEO0VBRUksZ0JBQWU7RUFDZixlQUFjO0VBQ2QsMkJBQTBCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuTG9naW57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmxvZ2luLWNhcmR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIG1hcmdpbjogODBweCBhdXRvOyBcclxufVxyXG4ubG9naW4tdGl0bGVcclxue1xyXG4gICBmb250LXdlaWdodDogYm9sZDsgICBcclxufVxyXG4ubG9naW4tZm9ybS1pdGVtXHJcbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4ubmF2LWxpbmtcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.provider */ "./src/app/services/auth.provider.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var loginComponent = /** @class */ (function () {
    function loginComponent(router, authProvider, dialog) {
        this.router = router;
        this.authProvider = authProvider;
        this.dialog = dialog;
        this.reg = {
            uname: String,
            pass: String
        };
        this.log = {
            uname: String,
            pass: String
        };
        this.authType = "Login";
        this.reg = {
            uname: '',
            pass: ''
        };
        this.log = {
            uname: '',
            pass: ''
        };
    }
    loginComponent.prototype.goToSignup = function () {
        this.authType = "Sign Up";
    };
    loginComponent.prototype.goToLogin = function () {
        this.authType = "Login";
    };
    loginComponent.prototype.authUser = function (event) {
        var _this = this;
        event.preventDefault();
        var spinner = this.dialog.open(_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_5__["SpinnerComponent"], { width: '100px' });
        if (this.authType == "Login") {
            var data = {
                username: this.log.uname,
                password: this.log.pass
            };
            this.authProvider.login(data).then(function (data) {
                spinner.close();
                _this.router.navigateByUrl('/calculator');
            }, function (error) {
                spinner.close();
                if (error.status == 0) {
                    var errorText = {
                        text: 'Something went wrong! Please check your network connectivity and try again'
                    };
                    _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: '500px', data: errorText });
                }
                else if (error.error.errors.error) {
                    var errorText = {
                        text: error.error.errors.error[0]
                    };
                    _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: '500px', data: errorText });
                }
                else {
                    var errorText = {
                        text: "Something went wrong!"
                    };
                    _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: '500px', data: errorText });
                }
            });
        }
        else if (this.authType == "Sign Up") {
            var data = {
                user: {
                    username: this.reg.uname,
                    password: this.reg.pass
                }
            };
            this.authProvider.register(data).then(function (data) {
                spinner.close();
                _this.router.navigateByUrl('/calculator');
            }, function (error) {
                spinner.close();
                var errorText = {
                    text: error
                };
                _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: '500px', data: errorText });
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('regForm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], loginComponent.prototype, "regForm", void 0);
    loginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/pages/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_provider__WEBPACK_IMPORTED_MODULE_2__["AuthProvider"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], loginComponent);
    return loginComponent;
}());



/***/ }),

/***/ "./src/app/pages/search/search.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header showNavItems=\"true\"></app-header>\r\n<mat-card class=\"search-card\">\r\n    <!-- <mat-card-title class=\"search-title\">Search</mat-card-title> -->\r\n    <mat-form-field class=\"search-input\">\r\n        <input type=\"search\" [(ngModel)]=\"searchStr\" name=\"Search\" matInput required placeholder=\"Customer Number or Email\" />\r\n    </mat-form-field>\r\n    <button mat-raised-button color=\"accent\" (click)=\"search($event)\" [disabled]=\"!searchStr\">Search</button>\r\n    <mat-card-content *ngIf=\"displayData\">\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Name</div>\r\n            <div class=\"display-item-col2\">{{displayData.title}} {{displayData.first_name}} {{displayData.last_name}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.street_1\">\r\n            <div class=\"display-item-col\">Street1</div>\r\n            <div class=\"display-item-col2\">{{displayData.street_1}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.street_2\">\r\n            <div class=\"display-item-col\">Street2</div>\r\n            <div class=\"display-item-col2\">{{displayData.street_2}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.city\">\r\n            <div class=\"display-item-col\">City</div>\r\n            <div class=\"display-item-col2\">{{displayData.city}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.state\">\r\n            <div class=\"display-item-col\">State</div>\r\n            <div class=\"display-item-col2\">{{displayData.state}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.country\">\r\n            <div class=\"display-item-col\">Country</div>\r\n            <div class=\"display-item-col2\">{{displayData.country}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.zip\">\r\n            <div class=\"display-item-col\">Zip</div>\r\n            <div class=\"display-item-col2\">{{displayData.zip}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" >\r\n            <div class=\"display-item-col\">Phone1</div>\r\n            <div class=\"display-item-col2\">{{displayData.phone_1}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Phone1 Type</div>\r\n            <div class=\"display-item-col2\">{{displayData.phone_1_type}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.phone_2\">\r\n            <div class=\"display-item-col\">Phone2</div>\r\n            <div class=\"display-item-col2\">{{displayData.phone_2}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\" *ngIf=\"displayData.phone_2_type\">\r\n            <div class=\"display-item-col\">Phone2 Type</div>\r\n            <div class=\"display-item-col2\">{{displayData.phone_2_type}}</div>\r\n        </div>\r\n        <div class=\"display-item-row\">\r\n            <div class=\"display-item-col\">Email</div>\r\n            <div class=\"display-item-col2\">{{displayData.email}}</div>\r\n        </div>\r\n    </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/pages/search/search.component.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/search/search.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-card {\n  margin: 80px auto;\n  width: 500px; }\n\n.search-title {\n  text-align: center; }\n\n.search-input {\n  width: 60%;\n  margin-right: 10%; }\n\n.display-item-row {\n  width: 100%;\n  padding: 10px; }\n\n.display-item-col {\n  display: inline-block;\n  width: 40%;\n  font-weight: bold; }\n\n.display-item-col2 {\n  display: inline-block;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoL0Y6XFxsZWFzZV9jYWxjX3dlYi9zcmNcXGFwcFxccGFnZXNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVcsRUFDZDs7QUFDRDtFQUVJLG1CQUFrQixFQUNyQjs7QUFDRDtFQUVJLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFFSSxZQUFVO0VBQ1YsY0FBWSxFQUNmOztBQUNEO0VBRUksc0JBQXFCO0VBQ3JCLFdBQVM7RUFDVCxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFFSSxzQkFBcUI7RUFDckIsV0FBUyxFQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY2FyZHtcclxuICAgIG1hcmdpbjogODBweCBhdXRvO1xyXG4gICAgd2lkdGg6NTAwcHg7XHJcbn1cclxuLnNlYXJjaC10aXRsZVxyXG57XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnNlYXJjaC1pbnB1dFxyXG57XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG4uZGlzcGxheS1pdGVtLXJvd1xyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5kaXNwbGF5LWl0ZW0tY29sXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOjQwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kaXNwbGF5LWl0ZW0tY29sMlxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/search/search.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/search/search.component.ts ***!
  \**************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search.provider */ "./src/app/services/search.provider.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dialog/dialog.component */ "./src/app/components/dialog/dialog.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(searchProvider, dialog) {
        this.searchProvider = searchProvider;
        this.dialog = dialog;
        this.displayData = {
            "city": String,
            "first_name": String,
            "last_name": String,
            "zip": String,
            "title": String,
            "country": String,
            "phone_2_type": String,
            "state": String,
            "phone_1_type": String,
            "street_1": String,
            "street_2": String,
            "phone_2": String,
            "email": String,
            "phone_1": String
        };
        this.initiateSearchString();
        this.initiateDisplayData();
    }
    SearchComponent.prototype.initiateSearchString = function () {
        this.searchStr = '';
    };
    SearchComponent.prototype.initiateDisplayData = function () {
        this.displayData = null;
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        var spinner = this.dialog.open(_components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], { width: '100px' });
        var postData = {
            'unique': this.searchStr
        };
        this.searchProvider.search(postData).then(function (data) {
            _this.displayData = data.data;
            spinner.close();
        }, function (error) {
            spinner.close();
            var errorText = {
                text: error
            };
            _this.dialog.open(_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], { width: '500px', data: errorText });
        });
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_search_provider__WEBPACK_IMPORTED_MODULE_1__["SearchProvider"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.provider.ts":
/*!*******************************************!*\
  !*** ./src/app/services/auth.provider.ts ***!
  \*******************************************/
/*! exports provided: AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.provider */ "./src/app/services/http.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
    }
    AuthProvider.prototype.login = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('user_auth/login/', data).then(function (response) {
                _this.http.setToken(response.token);
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    AuthProvider.prototype.register = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('user_auth/user/register/', data).then(function (response) {
                _this.http.setToken(response.token);
                resolve(response);
            }, function (error) {
                var errMessage = "";
                if (error.status = 0)
                    (errMessage = "Something went wrong! Please check your network connectivity and try again.");
                else if (error.error.errors.username) {
                    errMessage = error.error.errors.username;
                }
                else if (error.error.errors.password) {
                    errMessage = error.error.errors.password;
                }
                else if (error.error.errors.error) {
                    errMessage = error.error.errors.error[0];
                }
                else {
                    errMessage = "Something went wrong!";
                }
                reject(errMessage);
            });
        });
    };
    AuthProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_provider__WEBPACK_IMPORTED_MODULE_1__["HttpProvider"]])
    ], AuthProvider);
    return AuthProvider;
}());



/***/ }),

/***/ "./src/app/services/calculate.provider.ts":
/*!************************************************!*\
  !*** ./src/app/services/calculate.provider.ts ***!
  \************************************************/
/*! exports provided: CalculateProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculateProvider", function() { return CalculateProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.provider */ "./src/app/services/http.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculateProvider = /** @class */ (function () {
    function CalculateProvider(http) {
        this.http = http;
    }
    CalculateProvider.prototype.calculateLease = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('lease/calc/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                var errMessage = "";
                if (error.status = 0)
                    (errMessage = "Something went wrong! Please check your network connectivity and try again.");
                else if (error.error.errors && error.error.errors.error) {
                    errMessage = error.error.errors.error[0];
                }
                else {
                    errMessage = "Something went wrong!";
                }
                reject(errMessage);
            });
        });
    };
    CalculateProvider.prototype.saveCustomer = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('customer/save/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                var errMessage = "";
                if (error.status = 0)
                    (errMessage = "Something went wrong! Please check your network connectivity and try again.");
                else if (error.error.errors && error.error.errors.error) {
                    errMessage = error.error.errors.error[0];
                }
                else if (error.error.errors) {
                    var errorKeys = Object.keys(error.error.errors);
                    errMessage = error.error.errors[errorKeys[0]];
                }
                else {
                    errMessage = "Something went wrong!";
                }
                reject(errMessage);
            });
        });
    };
    CalculateProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_provider__WEBPACK_IMPORTED_MODULE_1__["HttpProvider"]])
    ], CalculateProvider);
    return CalculateProvider;
}());



/***/ }),

/***/ "./src/app/services/http.provider.ts":
/*!*******************************************!*\
  !*** ./src/app/services/http.provider.ts ***!
  \*******************************************/
/*! exports provided: HttpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpProvider", function() { return HttpProvider; });
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


var HttpProvider = /** @class */ (function () {
    function HttpProvider(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.url = "https://rhans.pythonanywhere.com/api/";
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-type': 'application/json' });
        this.token = null;
    }
    HttpProvider.prototype.setToken = function (token) {
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + token
        });
        this.token = token;
    };
    HttpProvider.prototype.get = function (url) {
        var _this = this;
        var fullUrl = this.url + url;
        return new Promise(function (resolve, reject) {
            _this.http.get(fullUrl, { headers: _this.headers }).subscribe(function (data) {
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    HttpProvider.prototype.post = function (url, data) {
        var _this = this;
        var fullUrl = this.url + url;
        return new Promise(function (resolve, reject) {
            _this.http.post(fullUrl, data, { headers: _this.headers }).subscribe(function (response) {
                resolve(response);
            }, function (error) {
                reject(error);
            });
        });
    };
    HttpProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpProvider);
    return HttpProvider;
}());



/***/ }),

/***/ "./src/app/services/search.provider.ts":
/*!*********************************************!*\
  !*** ./src/app/services/search.provider.ts ***!
  \*********************************************/
/*! exports provided: SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.provider */ "./src/app/services/http.provider.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchProvider = /** @class */ (function () {
    function SearchProvider(http) {
        this.http = http;
    }
    SearchProvider.prototype.search = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('customer/get/', data).then(function (response) {
                resolve(response);
            }, function (error) {
                var errMessage = "";
                if (error.status = 0)
                    (errMessage = "Something went wrong! Please check your network connectivity and try again.");
                else if (error.error.data == null) {
                    errMessage = "Customer not found";
                }
                else if (error.error.errors && error.error.errors.error) {
                    errMessage = error.error.errors.error[0];
                }
                else if (error.error.errors) {
                    var errorKeys = Object.keys(error.error.errors);
                    errMessage = error.error.errors[errorKeys[0]];
                }
                else {
                    errMessage = "Something went wrong!";
                }
                reject(errMessage);
            });
        });
    };
    SearchProvider = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_http_provider__WEBPACK_IMPORTED_MODULE_1__["HttpProvider"]])
    ], SearchProvider);
    return SearchProvider;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\lease_calc_web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map