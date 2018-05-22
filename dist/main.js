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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window-header/window-header.component */ "./src/app/window-header/window-header.component.ts");
/* harmony import */ var _search_block_search_block_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-block/search-block.component */ "./src/app/search-block/search-block.component.ts");
/* harmony import */ var _main_block_main_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-block/main-block.component */ "./src/app/main-block/main-block.component.ts");
/* harmony import */ var _ranked_block_ranked_block_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranked-block/ranked-block.component */ "./src/app/ranked-block/ranked-block.component.ts");
/* harmony import */ var _tag_block_tag_block_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tag-block/tag-block.component */ "./src/app/tag-block/tag-block.component.ts");
/* harmony import */ var _news_block_news_block_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./news-block/news-block.component */ "./src/app/news-block/news-block.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _window_header_window_header_component__WEBPACK_IMPORTED_MODULE_3__["WindowHeaderComponent"],
                _search_block_search_block_component__WEBPACK_IMPORTED_MODULE_4__["SearchBlockComponent"],
                _main_block_main_block_component__WEBPACK_IMPORTED_MODULE_5__["MainBlockComponent"],
                _ranked_block_ranked_block_component__WEBPACK_IMPORTED_MODULE_6__["RankedBlockComponent"],
                _tag_block_tag_block_component__WEBPACK_IMPORTED_MODULE_7__["TagBlockComponent"],
                _news_block_news_block_component__WEBPACK_IMPORTED_MODULE_8__["NewsBlockComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
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

module.exports = ".center-div\r\n{\r\n  margin: 0 auto;\r\n  width: 600px;\r\n}\r\n.mainBlock{\r\n  position:absolute;\r\n  top:70px;\r\n  left:300px;\r\n  bottom:0px;\r\n  right:300px;\r\n  background-color: purple;\r\n  border-top:solid black;\r\n  overflow: auto;\r\n}\r\n.goLeftButton{\r\n  position:absolute;\r\n  top:50px;\r\n  left:300px;\r\n  height: 20px;\r\n  width:100px;\r\n}\r\n.goRightButton{\r\n  position:absolute;\r\n  top:50px;\r\n  right:300px;\r\n  height: 20px;\r\n  width:100px;\r\n}\r\n.newsBlock{\r\n  left:10px;\r\n  right:10px;\r\n  background-color: wheat;\r\n  border: dotted black;\r\n  border-top: none;\r\n}\r\n.newsNameBlock{\r\n  top:50px;\r\n  text-align: center;\r\n  height: 20px;\r\n}\r\n.newsPictureBlock{\r\n  width: 600px;\r\n  height: 400px;\r\n\r\n}\r\n.newsTextBlock{\r\n  top:10px;\r\n  left:10px;\r\n  right:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-block/main-block.component.html":
/*!******************************************************!*\
  !*** ./src/app/main-block/main-block.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"goLeftButton\" (click)=\"nextStep(-1)\">Left</button>\n<button class=\"goRightButton\"(click)=\"nextStep(1)\">Right</button>\n<div class=\"mainBlock\">\n  <li class=\"newsBlock\" *ngFor=\"let news of NEWS\">\n        <div class=\"newsNameBlock\">{{news.newsName}}</div>\n        <div class=\"center-div\">\n          <img class=\"newsPictureBlock\" src=\"{{PICTURES[news.pictureMass[0]].url}}\">\n        </div>\n        <div class=\"newsTextBlock\">{{news.text}}</div>\n     </li>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-news */ "./src/app/mock-news.ts");
/* harmony import */ var _mock_pictures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mock-pictures */ "./src/app/mock-pictures.ts");
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
        this.step = 0;
        this.size = 2;
        this.NEWS = _mock_news__WEBPACK_IMPORTED_MODULE_1__["NewsMass"].filter(function (number) {
            return (number.newsId < this.size * this.step) && (number.newsId > this.size * (this.step - 1));
        });
        this.PICTURES = _mock_pictures__WEBPACK_IMPORTED_MODULE_2__["PictureMass"];
        this.a = [];
    }
    MainBlockComponent.prototype.ngOnInit = function () {
    };
    MainBlockComponent.prototype.getUrl = function (i) {
        return _mock_pictures__WEBPACK_IMPORTED_MODULE_2__["PictureMass"][i].url;
    };
    MainBlockComponent.prototype.nextStep = function (i) {
        this.step = this.step + i;
        alert(this.step);
        this.getNews(i);
    };
    MainBlockComponent.prototype.getNews = function (i) {
        this.a = _mock_news__WEBPACK_IMPORTED_MODULE_1__["NewsMass"].filter(function (item, index, NewsMass) {
            if (index - this.size < this.step * this.size) {
                this.a.push(item);
            }
        });
        if (this.a.length == 0) {
            this.step = this.step - i;
            this.getNews(0);
        }
        else {
            this.NEWS = this.a;
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
    { newsId: 1,
        userId: 1,
        newsName: "Name1",
        text: "Text1",
        pictureMass: [0],
        kommentaryMass: [],
        commonMark: undefined,
        markMass: [],
        tagMass: [] },
    { newsId: 2,
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
    { newsId: 3,
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

/***/ "./src/app/news-block/news-block.component.css":
/*!*****************************************************!*\
  !*** ./src/app/news-block/news-block.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".newsBlock{\r\n  top:100px;\r\n  left:10px;\r\n  right:10px;\r\n  background-color: wheat;\r\n  border: dotted black;\r\n}\r\n.newsNameBlock{\r\n  top:50px;\r\n  text-align: center;\r\n  height: 20px;\r\n}\r\n.newsPictureBlock{\r\n  top:10px;\r\n  left:10px;\r\n  right: 10px;\r\n  width:400px;\r\n  height:400px;\r\n}\r\n.newsTextBlock{\r\n  top:10px;\r\n  left:10px;\r\n  right:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/news-block/news-block.component.html":
/*!******************************************************!*\
  !*** ./src/app/news-block/news-block.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news-block/news-block.component.ts":
/*!****************************************************!*\
  !*** ./src/app/news-block/news-block.component.ts ***!
  \****************************************************/
/*! exports provided: NewsBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBlockComponent", function() { return NewsBlockComponent; });
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

var NewsBlockComponent = /** @class */ (function () {
    function NewsBlockComponent() {
    }
    NewsBlockComponent.prototype.ngOnInit = function () {
    };
    NewsBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-block',
            template: __webpack_require__(/*! ./news-block.component.html */ "./src/app/news-block/news-block.component.html"),
            styles: [__webpack_require__(/*! ./news-block.component.css */ "./src/app/news-block/news-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsBlockComponent);
    return NewsBlockComponent;
}());



/***/ }),

/***/ "./src/app/ranked-block/ranked-block.component.css":
/*!*********************************************************!*\
  !*** ./src/app/ranked-block/ranked-block.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rankedNews{\r\n  position:absolute;\r\n  top:150px;\r\n  left:800px;\r\n  right: 0px;\r\n  height: 400px;\r\n  background-color: aqua;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ranked-block/ranked-block.component.html":
/*!**********************************************************!*\
  !*** ./src/app/ranked-block/ranked-block.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rankedNews\">Ranked news</div>\n"

/***/ }),

/***/ "./src/app/ranked-block/ranked-block.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ranked-block/ranked-block.component.ts ***!
  \********************************************************/
/*! exports provided: RankedBlockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RankedBlockComponent", function() { return RankedBlockComponent; });
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

var RankedBlockComponent = /** @class */ (function () {
    function RankedBlockComponent() {
    }
    RankedBlockComponent.prototype.ngOnInit = function () {
    };
    RankedBlockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ranked-block',
            template: __webpack_require__(/*! ./ranked-block.component.html */ "./src/app/ranked-block/ranked-block.component.html"),
            styles: [__webpack_require__(/*! ./ranked-block.component.css */ "./src/app/ranked-block/ranked-block.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RankedBlockComponent);
    return RankedBlockComponent;
}());



/***/ }),

/***/ "./src/app/search-block/search-block.component.css":
/*!*********************************************************!*\
  !*** ./src/app/search-block/search-block.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".searchBlock{\r\n  position:absolute;\r\n  top:60px;\r\n  left:10px;\r\n  width:180px;\r\n  height:100px;\r\n  background-color: green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search-block/search-block.component.html":
/*!**********************************************************!*\
  !*** ./src/app/search-block/search-block.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=searchBlock>Here is a search block</div>\n"

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

/***/ "./src/app/tag-block/tag-block.component.css":
/*!***************************************************!*\
  !*** ./src/app/tag-block/tag-block.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tagCloud{\r\n  position:absolute;\r\n  top:60px;\r\n  width:180px;\r\n  height:400px;\r\n  right: 10px;\r\n  background-color: brown;\r\n}\r\n"

/***/ }),

/***/ "./src/app/tag-block/tag-block.component.html":
/*!****************************************************!*\
  !*** ./src/app/tag-block/tag-block.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tagCloud\">Tag cloud</div>\n"

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

var TagBlockComponent = /** @class */ (function () {
    function TagBlockComponent() {
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

/***/ "./src/app/window-header/window-header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/window-header/window-header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerBlock{\r\n  position:absolute;\r\n  top:0px;\r\n  left:0px;\r\n  width: 1600px;\r\n  height: 50px;\r\n  background-color: yellow;\r\n}\r\n.headerText{\r\n  position:absolute;\r\n  top:15px;\r\n  left:700px;\r\n  right: 700px;\r\n  text-align: center;\r\n  color:crimson;\r\n  font-size:1.8em;\r\n}\r\n"

/***/ }),

/***/ "./src/app/window-header/window-header.component.html":
/*!************************************************************!*\
  !*** ./src/app/window-header/window-header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerBlock\">\n  <div class=\"headerText\">News Time</div>\n\n\n</div>\n"

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

var WindowHeaderComponent = /** @class */ (function () {
    function WindowHeaderComponent() {
    }
    WindowHeaderComponent.prototype.ngOnInit = function () {
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

module.exports = __webpack_require__(/*! D:\Git file\demo-deploy\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map