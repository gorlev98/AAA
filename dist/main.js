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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n  background-color: #e6870d;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-window-header></app-window-header>\n<app-search-block></app-search-block>\n<app-main-block></app-main-block>\n<app-tag-block></app-tag-block>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _window_header_window_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./window-header/window-header.module */ "./src/app/window-header/window-header.module.ts");
/* harmony import */ var _search_block_search_block_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-block/search-block.module */ "./src/app/search-block/search-block.module.ts");
/* harmony import */ var _main_block_main_block_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-block/main-block.module */ "./src/app/main-block/main-block.module.ts");
/* harmony import */ var _tag_block_tag_block_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-block/tag-block.module */ "./src/app/tag-block/tag-block.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
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
            ],
            imports: [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"], _search_block_search_block_module__WEBPACK_IMPORTED_MODULE_5__["SearchBlockModule"], _main_block_main_block_module__WEBPACK_IMPORTED_MODULE_6__["MainBlockModule"], _window_header_window_header_module__WEBPACK_IMPORTED_MODULE_4__["WindowHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"], _tag_block_tag_block_module__WEBPACK_IMPORTED_MODULE_7__["TagBlockModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/main-block/main-block.component.css":
/*!*****************************************************!*\
  !*** ./src/app/main-block/main-block.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center-div\r\n{\r\n  margin: 0 auto;\r\n  width: 600px;\r\n}\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n.textLabel{\r\n  font-size:1.2em;\r\n}\r\n.mainBlock{\r\n  position:absolute;\r\n  top:70px;\r\n  left:10px;\r\n  bottom:10px;\r\n  right:300px;\r\n  border-top:solid black;\r\n  overflow: auto;\r\n  background-color: wheat;\r\n  border-left:dotted black ;\r\n  border-right: dotted black;\r\n}\r\n.oneNewsBlock{\r\n  position:absolute;\r\n  top:70px;\r\n  left:10px;\r\n  right:300px;\r\n  border-top:solid black;\r\n  overflow: auto;\r\n  background-color: wheat;\r\n  border-left:dotted black ;\r\n  border-right: dotted black;\r\n  border-bottom: dotted black;\r\n}\r\n.commentBlock{\r\n  left:10px;\r\n  right:300px;\r\n  overflow: auto;\r\n  background-color: wheat;\r\n}\r\n.newsBlock{\r\n  right:10px;\r\n  background-color: wheat;\r\n  border-bottom: dotted black;\r\n}\r\n.comment{\r\n  margin-left:10px;\r\n  margin-right:10px;\r\n  border-top: dotted black;\r\n  background-color: azure;\r\n}\r\n.newsNameBlock{\r\n  top:50px;\r\n  text-align: center;\r\n  height: 20px;\r\n  font-size:1.5em;\r\n}\r\n.newsPictureBlock{\r\n  width: 600px;\r\n  height: 400px;\r\n\r\n}\r\n.newsTextBlock{\r\n  top:10px;\r\n  margin-left:10px;\r\n  margin-right:10px;\r\n  font-size:1.2em;\r\n}\r\n.textareaClass{\r\n  font-size:1.5em;\r\n  background-color: azure;\r\n}\r\n.textareaDiv{\r\n  margin-left:10px;\r\n  margin-right:10px;\r\n}\r\n.authorBlock{\r\n  text-align: right;\r\n  font-size:1.2em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-block/main-block.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-block/main-block.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n</style>\n<div *ngIf=\"selectedNews; then thenBlock else elseBlock\"></div>\n<ng-template #elseBlock>\n  <div class=\"mainBlock\" >\n    <ul class=\"news\">\n      <li class=\"newsBlock\" *ngFor=\"let news of NEWS\"\n          [class.selected]=\"news === selectedNews\"\n          (click)=\"onSelect(news)\">\n        <br>\n        <div class=\"newsNameBlock\">{{news.newsName}}</div>\n        <br>\n          <div class=\"center-div\">\n            <img class=\"newsPictureBlock\" src=\"{{PICTURES[news.pictureMass[0]].url}}\">\n          </div>\n          <div class=\"newsTextBlock\">{{news.text}}</div>\n          <div class=\"authorBlock\">Author</div>\n          <div class=\"authorBlock\">{{USERMASS[news.userId].name}}</div>\n       </li>\n    </ul>\n  </div>\n</ng-template>\n<ng-template #thenBlock>\n  <div class=\"oneNewsBlock\">\n     <br>\n     <div class=\"newsNameBlock\">{{selectedNews.newsName}}</div>\n    <br>\n      <div class=\"center-div\">\n        <img class=\"newsPictureBlock\" src=\"{{PICTURES[selectedNews.pictureMass[pictureNumber]].url}}\" (click)=\"changePicture()\">\n        Нажмите на картинку для просмотра следующей\n      </div>\n\n    <form class=\"newsTextBlock\" ng-app=\"myApp\">\n      <div class=\"example-full-width\" ng-controller=\"myController\">\n        <label class=\"textLabel\" for=\"newsText\">Поле для текста новости</label>\n        <br>\n        <div class=\"textareaDiv\">\n          <div contenteditable=\"true\" class=\"textareaClass\"  id=\"newsText\">{{newsText}}</div>\n        </div>\n      </div>\n      </form>\n        <button mat-fab>\n          <mat-icon>favorite</mat-icon>\n        </button>\n        <button mat-fab color=\"assent\">Comment</button>\n      <button mat-raised-button color=\"primary\" (click)=\"onSave()\">Save</button>\n      <button mat-raised-button color=\"primary\" (click)=\"onDeSelect()\">Return</button>\n      <li class=\"commentBlock\" *ngFor=\"let comment of COMMENTS\">\n        <div class=\"comment\" *ngIf=\"comment.newsId==selectedNews.newsId\">\n          <div>\n            <div *ngIf=\"comment.prevCommId\">to {{USERMASS[1].name}}</div>\n            <div>Author: {{USERMASS[comment.userId].name}}</div>\n            <div>{{comment.text}}</div>\n          </div>\n        </div>\n      </li>\n    </div>\n\n\n</ng-template>\n\n\n\n"

/***/ }),

/***/ "./src/app/main-block/main-block.component.ts":
/*!****************************************************!*\
  !*** ./src/app/main-block/main-block.component.ts ***!
  \****************************************************/
/*! exports provided: MainBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBlockComponent", function() { return MainBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _mock_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-news */ "./src/app/mock-news.ts");
/* harmony import */ var _mock_pictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-pictures */ "./src/app/mock-pictures.ts");
/* harmony import */ var _mock_comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mock-comment */ "./src/app/mock-comment.ts");
/* harmony import */ var _mock_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mock-user */ "./src/app/mock-user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainBlockComponent = /** @class */ (function () {
    function MainBlockComponent() {
        //@ViewChild('name') nameInput: ElementRef;
        this.step = 0;
        this.size = 2;
        this.NEWS = _mock_news__WEBPACK_IMPORTED_MODULE_1__["NewsMass"];
        this.USERMASS = _mock_user__WEBPACK_IMPORTED_MODULE_4__["UserMass"];
        this.COMMENTS = _mock_comment__WEBPACK_IMPORTED_MODULE_3__["CommentMass"];
        this.PICTURES = _mock_pictures__WEBPACK_IMPORTED_MODULE_2__["PictureMass"];
        this.pictureNumber = 0;
        this.newsText = "";
    }
    MainBlockComponent.prototype.ngOnInit = function () {
    };
    MainBlockComponent.prototype.getUrl = function (i) {
        return _mock_pictures__WEBPACK_IMPORTED_MODULE_2__["PictureMass"][i].url;
    };
    MainBlockComponent.prototype.onSelect = function (news) {
        this.newsText = news.text;
        this.selectedNews = news;
        //this.COMMENTS=CommentMass.filter(Comment => Comment.newsId=this.selectedNews.newsId);
    };
    MainBlockComponent.prototype.onDeSelect = function () {
        this.pictureNumber = 0;
        this.newsText = "";
        this.selectedNews = undefined;
    };
    MainBlockComponent.prototype.onSave = function () {
    };
    MainBlockComponent.prototype.changePicture = function () {
        this.pictureNumber++;
        if (this.pictureNumber == this.PICTURES.length) {
            this.pictureNumber = 0;
        }
    };
    MainBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-block',
            template: __webpack_require__(/*! ./main-block.component.html */ "./src/app/main-block/main-block.component.html"),
            styles: [__webpack_require__(/*! ./main-block.component.css */ "./src/app/main-block/main-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainBlockComponent);
    return MainBlockComponent;
}());



/***/ }),

/***/ "./src/app/main-block/main-block.module.ts":
/*!*************************************************!*\
  !*** ./src/app/main-block/main-block.module.ts ***!
  \*************************************************/
/*! exports provided: MainBlockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBlockModule", function() { return MainBlockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _main_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-block.component */ "./src/app/main-block/main-block.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Лев on 22.05.2018.
 */









var MainBlockModule = /** @class */ (function () {
    function MainBlockModule() {
    }
    MainBlockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]],
            exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _main_block_component__WEBPACK_IMPORTED_MODULE_1__["MainBlockComponent"]],
            declarations: [_main_block_component__WEBPACK_IMPORTED_MODULE_1__["MainBlockComponent"]],
            providers: [],
        })
    ], MainBlockModule);
    return MainBlockModule;
}());



/***/ }),

/***/ "./src/app/mock-comment.ts":
/*!*********************************!*\
  !*** ./src/app/mock-comment.ts ***!
  \*********************************/
/*! exports provided: CommentMass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentMass", function() { return CommentMass; });
var CommentMass = [
    {
        commId: 1,
        userId: 0,
        text: "Hello",
        newsId: 0,
        prevCommId: undefined,
    },
    {
        commId: 3,
        userId: 1,
        text: "Hello to you too",
        newsId: 0,
        prevCommId: 1,
    },
    {
        commId: 2,
        userId: 0,
        text: "Is anyone here",
        newsId: 0,
        prevCommId: undefined,
    }
];


/***/ }),

/***/ "./src/app/mock-news.ts":
/*!******************************!*\
  !*** ./src/app/mock-news.ts ***!
  \******************************/
/*! exports provided: NewsMass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsMass", function() { return NewsMass; });
var NewsMass = [
    { newsId: 0,
        userId: 1,
        newsName: "Name1",
        text: "This is the test news, that have few pictures and two commentaries",
        pictureMass: [0, 1, 2],
        kommentaryMass: [],
        commonMark: undefined,
        markMass: [],
        tagMass: [] },
    { newsId: 1,
        userId: 1,
        newsName: "Name2",
        text: 'Lemons entered Europe near southern Italy no later than the second century AD, during the time of Ancient Rome. However, they were not widely cultivated.' +
            ' They were later introduced to Persia and then to Iraq and Egypt around 700 AD. The lemon was first recorded in literature in a 10th-century Arabic treatise on farming,' +
            ' and was also used as an ornamental plant in early Islamic gardens. It was distributed widely throughout the Arab world and the Mediterranean region between 1000 and 1150. \n ' +
            ' The first substantial cultivation of lemons in Europe began in Genoa in the middle of the 15th century. The lemon was later introduced to the Americas in 1493 when Christopher' +
            ' Columbus brought lemon seeds to Hispaniola on his voyages. Spanish conquest throughout the New World helped spread lemon seeds. It was mainly used as an ornamental plant and' +
            ' for medicine. In the 19th century, lemons were increasingly planted in Florida and California.',
        pictureMass: [1],
        kommentaryMass: [],
        commonMark: undefined,
        markMass: [],
        tagMass: [] },
    { newsId: 2,
        userId: 1,
        newsName: "Name3",
        text: "Text3",
        pictureMass: [2],
        kommentaryMass: [],
        commonMark: undefined,
        markMass: [],
        tagMass: [] },
];


/***/ }),

/***/ "./src/app/mock-pictures.ts":
/*!**********************************!*\
  !*** ./src/app/mock-pictures.ts ***!
  \**********************************/
/*! exports provided: PictureMass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureMass", function() { return PictureMass; });
var PictureMass = [
    {
        pictureId: 1,
        url: "https://fullhdpictures.com/wp-content/uploads/2015/11/Eiffel-Tower-Wallpaper-HD.jpg"
    },
    {
        pictureId: 2,
        url: "https://www.1zoom.ru/big2/31/165025-Bullgakova.jpg"
    },
    {
        pictureId: 3,
        url: "https://newhdphotos.com/wp-content/uploads/2017/12/New-York-Bridge-HD-Wallpapers-images.jpg"
    }
];


/***/ }),

/***/ "./src/app/mock-tags.ts":
/*!******************************!*\
  !*** ./src/app/mock-tags.ts ***!
  \******************************/
/*! exports provided: TagMass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagMass", function() { return TagMass; });
var TagMass = [
    {
        tagId: 1,
        tagName: "Политика"
    },
    {
        tagId: 2,
        tagName: "Экономика"
    },
    {
        tagId: 3,
        tagName: "Культура"
    }
];


/***/ }),

/***/ "./src/app/mock-user.ts":
/*!******************************!*\
  !*** ./src/app/mock-user.ts ***!
  \******************************/
/*! exports provided: UserMass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMass", function() { return UserMass; });
var UserMass = [
    {
        userId: 0,
        email: "aaa@mail.ru",
        name: "User1",
        password: "qwerty1",
        type: 1
    },
    {
        userId: 1,
        email: "bbb@mail.ru",
        name: "User2",
        password: "asdfg2",
        type: 1
    }
];


/***/ }),

/***/ "./src/app/search-block/search-block.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-block/search-block.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-form{\r\n  position:absolute;\r\n  top:60px;\r\n  right:110px;\r\n  width:180px;\r\n  background-color: antiquewhite;\r\n}\r\n.searchButton{\r\n  position:absolute;\r\n  top:60px;\r\n  right: 10px;\r\n  width: 50px;\r\n  height:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search-block/search-block.component.html":
/*!**********************************************************!*\
  !*** ./src/app/search-block/search-block.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n  <mat-form-field class=\"search-form\">\n    <input matInput placeholder=\"Search Picture\" type=\"text\">\n  </mat-form-field>\n  <button  mat-raised-button color=\"primary\" class=\"searchButton\">Search\n  </button>\n</form>\n"

/***/ }),

/***/ "./src/app/search-block/search-block.component.ts":
/*!********************************************************!*\
  !*** ./src/app/search-block/search-block.component.ts ***!
  \********************************************************/
/*! exports provided: SearchBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlockComponent", function() { return SearchBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBlockComponent = /** @class */ (function () {
    function SearchBlockComponent() {
    }
    SearchBlockComponent.prototype.ngOnInit = function () {
    };
    SearchBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-block',
            template: __webpack_require__(/*! ./search-block.component.html */ "./src/app/search-block/search-block.component.html"),
            styles: [__webpack_require__(/*! ./search-block.component.css */ "./src/app/search-block/search-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBlockComponent);
    return SearchBlockComponent;
}());



/***/ }),

/***/ "./src/app/search-block/search-block.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/search-block/search-block.module.ts ***!
  \*****************************************************/
/*! exports provided: SearchBlockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBlockModule", function() { return SearchBlockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _search_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search-block.component */ "./src/app/search-block/search-block.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Лев on 22.05.2018.
 */




var SearchBlockModule = /** @class */ (function () {
    function SearchBlockModule() {
    }
    SearchBlockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _search_block_component__WEBPACK_IMPORTED_MODULE_1__["SearchBlockComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"]],
            declarations: [_search_block_component__WEBPACK_IMPORTED_MODULE_1__["SearchBlockComponent"]],
            providers: [],
        })
    ], SearchBlockModule);
    return SearchBlockModule;
}());



/***/ }),

/***/ "./src/app/tag-block/tag-block.component.css":
/*!***************************************************!*\
  !*** ./src/app/tag-block/tag-block.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagCloud{\r\n  position:absolute;\r\n  top:160px;\r\n  width:280px;\r\n  height:300px;\r\n  right: 10px;\r\n  background-color: wheat;\r\n}\r\n.tagBlock{\r\n  top:10px;\r\n  height: 20px;\r\n  left:30px;\r\n}\r\n.space{\r\n  height: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tag-block/tag-block.component.html":
/*!****************************************************!*\
  !*** ./src/app/tag-block/tag-block.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tagCloud\">Теги\n  <div class=\"space\"></div>\n  <li class=\"tagBlock\" *ngFor=\"let tags of TAGS\">\n    {{tags.tagName}}\n  </li>\n</div>\n"

/***/ }),

/***/ "./src/app/tag-block/tag-block.component.ts":
/*!**************************************************!*\
  !*** ./src/app/tag-block/tag-block.component.ts ***!
  \**************************************************/
/*! exports provided: TagBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagBlockComponent", function() { return TagBlockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _mock_tags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-tags */ "./src/app/mock-tags.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TagBlockComponent = /** @class */ (function () {
    function TagBlockComponent() {
        this.TAGS = _mock_tags__WEBPACK_IMPORTED_MODULE_1__["TagMass"];
    }
    TagBlockComponent.prototype.ngOnInit = function () {
    };
    TagBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tag-block',
            template: __webpack_require__(/*! ./tag-block.component.html */ "./src/app/tag-block/tag-block.component.html"),
            styles: [__webpack_require__(/*! ./tag-block.component.css */ "./src/app/tag-block/tag-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TagBlockComponent);
    return TagBlockComponent;
}());



/***/ }),

/***/ "./src/app/tag-block/tag-block.module.ts":
/*!***********************************************!*\
  !*** ./src/app/tag-block/tag-block.module.ts ***!
  \***********************************************/
/*! exports provided: TagBlockModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagBlockModule", function() { return TagBlockModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _tag_block_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tag-block.component */ "./src/app/tag-block/tag-block.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by Лев on 22.05.2018.
 */





var TagBlockModule = /** @class */ (function () {
    function TagBlockModule() {
    }
    TagBlockModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _tag_block_component__WEBPACK_IMPORTED_MODULE_1__["TagBlockComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
            declarations: [_tag_block_component__WEBPACK_IMPORTED_MODULE_1__["TagBlockComponent"]],
            providers: [],
        })
    ], TagBlockModule);
    return TagBlockModule;
}());



/***/ }),

/***/ "./src/app/window-header/window-header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/window-header/window-header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.usernameBlock{\r\n  position:absolute;\r\n  left:105px;\r\n  top:10px;\r\n  width:100px;\r\n  font-size: 1.3em;\r\n}\r\n.header{\r\n  position:absolute;\r\n  background-color: wheat;\r\n  left:0px;\r\n  right:0px;\r\n  top:0px;\r\n  height:50px;\r\n}\r\n.menuButtonBlock{\r\n  top:5px;\r\n  left:10px;\r\n}\r\n.menuBlock{\r\n  top:100px;\r\n}\r\n.communicationWindow{\r\n  position:absolute;\r\n  top:250px;\r\n  left:600px;\r\n  right:600px;\r\n  height:300px;\r\n  background-color: #b3e69c;\r\n}\r\n.communicationBlock{\r\n  width: 100%;\r\n  height:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/window-header/window-header.component.html":
/*!************************************************************!*\
  !*** ./src/app/window-header/window-header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div>\n   <button mat-raised-button [matMenuTriggerFor]=\"menu\"  class=\"menuButtonBlock\">Menu</button>\n    <mat-menu #menu=\"matMenu\" [overlapTrigger]=\"false\" class=\"menuBlock\">\n      <button mat-menu-item=\"\" (onclick)=\"menuSelect(1)\">Registration</button>\n      <button mat-menu-item=\"\" (onclick)=\"menuSelect(2)\">Autorisation</button>\n      <button mat-menu-item=\"\" (onclick)=\"menuSelect(3)\">Profile</button>\n    </mat-menu>\n  </div>\n  <div class=\"usernameBlock\">Username</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/window-header/window-header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/window-header/window-header.component.ts ***!
  \**********************************************************/
/*! exports provided: WindowHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowHeaderComponent", function() { return WindowHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WindowHeaderComponent = /** @class */ (function () {
    function WindowHeaderComponent() {
    }
    WindowHeaderComponent.prototype.menuSelect = function (temp) {
        //this.menuConfig=temp;
    };
    WindowHeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-window-header',
            template: __webpack_require__(/*! ./window-header.component.html */ "./src/app/window-header/window-header.component.html"),
            styles: [__webpack_require__(/*! ./window-header.component.css */ "./src/app/window-header/window-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WindowHeaderComponent);
    return WindowHeaderComponent;
}());



/***/ }),

/***/ "./src/app/window-header/window-header.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/window-header/window-header.module.ts ***!
  \*******************************************************/
/*! exports provided: WindowHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowHeaderModule", function() { return WindowHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _window_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window-header.component */ "./src/app/window-header/window-header.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WindowHeaderModule = /** @class */ (function () {
    function WindowHeaderModule() {
    }
    WindowHeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]],
            exports: [_window_header_component__WEBPACK_IMPORTED_MODULE_1__["WindowHeaderComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]],
            declarations: [_window_header_component__WEBPACK_IMPORTED_MODULE_1__["WindowHeaderComponent"]],
            providers: [],
        })
    ], WindowHeaderModule);
    return WindowHeaderModule;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! D:\Git file\demo-deploy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map