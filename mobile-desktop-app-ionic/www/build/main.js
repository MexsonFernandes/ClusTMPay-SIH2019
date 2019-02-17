webpackJsonp([0],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_products__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(userService, navCtrl, menu, data, platform, ga) {
        var _this = this;
        this.userService = userService;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.data = data;
        this.platform = platform;
        this.ga = ga;
        this.platform.ready().then(function () {
            _this.ga.trackView("Home Page");
        });
        console.log(userService.userData);
        this.banners = [
            'assets/img/banner-1.webp',
            'assets/img/banner-2.webp',
            'assets/img/banner-3.webp'
        ];
        this.data.getPopularProducts().subscribe(function (popular) {
            _this.products = popular;
            console.log(_this.products);
        }, function (error) {
            console.error(error);
        });
    }
    // arrayToMatrix(list, lengthSubArray) {
    //   let matrix = [], i, k;
    //   for (i = 0, k = -1; i < list.length; i++) {
    //     if (i % lengthSubArray === 0) {
    //         k++;
    //         matrix[k] = [];
    //     }
    //     matrix[k].push(list[i]);
    //   }
    //   return matrix;
    // }
    HomePage.prototype.trackEvent = function () {
        var _this = this;
        var active = this.slider.getActiveIndex();
        this.platform.ready().then(function () {
            _this.ga.trackEvent("Slider", "Slider-Changed", "Label", active);
        });
    };
    HomePage.prototype.goToProducts = function (productData) {
        // go to the product detail page
        // and pass in the product data
        // this.navCtrl.push(ProductsPage, sessionData);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__products_products__["a" /* ProductsPage */], productData);
    };
    HomePage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__showcart_showcart__["a" /* ShowcartPage */]).catch(function () { return console.log('should I stay or should I go now'); });
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('adSlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
], HomePage.prototype, "slider", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n	  <button ion-button menuToggle>\n      <ion-icon name="ClusTMPay"></ion-icon>\n    </button>\n  	<ion-title>Home</ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="search()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="home"> \n	<ion-slides pager #adSlider (ionSlideWillChange)="trackEvent()" style="height: 250px">\n	  <ion-slide *ngFor="let banner of banners">\n	    <img [src]="banner">\n	  </ion-slide>\n	</ion-slides>\n	\n	<h2 padding>{{ \'categories\' | translate }}</h2>\n\n	<!-- Example of Horizontal scrolling widget -->\n	<ion-card>\n		<ion-scroll scrollX="true">\n			<img src="assets/img/cat-1.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-2.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-3.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-4.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-1.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-2.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-3.webp" (click)="goToProducts()">\n			<img src="assets/img/cat-4.webp" (click)="goToProducts()">\n	  </ion-scroll>\n  </ion-card>\n\n	<h2 padding>{{ \'popular\' | translate }}</h2>\n	\n	<div class="row img-center" *ngIf="!products">\n		<img height="35" src="assets/img/ring.svg">\n	</div>\n\n	<ion-grid no-padding>\n	  <ion-row>\n	    <ion-col no-padding col-6 col-md-3 *ngFor="let product of products;">\n	    	<ion-card>\n				  <img [src]="product.imageUrl"/>\n				  <ion-card-content>\n					  <ion-card-title no-padding>\n			      	{{product.productName}}\n			      </ion-card-title>\n					  <ion-row no-padding class="center">\n				      <ion-col>\n				        <b>{{product.price | currency }} &nbsp; </b><span class="discount">{{product.listPrice | currency}}</span>\n				      </ion-col>\n				    </ion-row>\n				  </ion-card-content>\n				</ion-card>\n	    </ion-col>\n	  </ion-row>\n	</ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_service__["a" /* DataService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_analytics__["a" /* GoogleAnalytics */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_filter_products_filter__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popover_popover__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsPage = (function () {
    function ProductsPage(navCtrl, popoverCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.products = [];
        for (var i = 0; i < 2000; i++) {
            var item = {
                name: 'Enamel Butterfly Charm',
                image: 'assets/img/products/clips.jpg',
                rating: 4.0,
                price: 520
            };
            this.products.push(item);
        }
    }
    ProductsPage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__showcart_showcart__["a" /* ShowcartPage */]);
    };
    ProductsPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_5__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ProductsPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
    };
    ProductsPage.prototype.goToProductDetail = function (data) {
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__product_detail_product_detail__["a" /* ProductDetailPage */]);
    };
    ProductsPage.prototype.presentFilter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__products_filter_products_filter__["a" /* ProductsFilterPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                // play with data here
            }
        });
    };
    ProductsPage.prototype.sortBy = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Sort Options');
        alert.addInput({
            type: 'radio',
            label: 'Relevance',
            value: 'relevance',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Popularity',
            value: 'popular'
        });
        alert.addInput({
            type: 'radio',
            label: 'Low to High',
            value: 'lth'
        });
        alert.addInput({
            type: 'radio',
            label: 'High to Low',
            value: 'htl'
        });
        alert.addInput({
            type: 'radio',
            label: 'Newest First',
            value: 'newest'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data);
                var navTransition = alert.dismiss();
                // start some async method
                setTimeout(function () {
                    navTransition.then(function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__showcart_showcart__["a" /* ShowcartPage */]);
                    });
                }, 3000);
                // return false;
            }
        });
        alert.present().then(function () {
            console.log("=====alert---present");
        });
    };
    return ProductsPage;
}());
ProductsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="searchField()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="products">\n\n  <ion-list>\n    <ion-item>\n      <ion-note item-left>\n        Duplicate products for VirtualScroll demo\n      </ion-note>\n    </ion-item>\n  </ion-list>\n\n	<ion-grid [virtualScroll]="products" approxItemHeight="40px">\n	  <ion-row *virtualItem="let product" (click)="goToProductDetail(product)">\n	    <ion-col width-33>\n	    	<ion-img class="v-img" [src]="product.image"></ion-img>\n	    </ion-col>\n	    <ion-col width-67>\n	    	<p>{{product.name}}</p>\n	    	<ion-badge item-right>4.1</ion-badge> 340 ratings\n		    <p class="price"> {{ product.price | currency: \'INR\' }} </p>\n	    </ion-col>\n      <ion-item-options side="left">\n        <button primary>\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button secondary>\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n	  </ion-row>\n	</ion-grid>\n\n</ion-content>\n\n<ion-footer>\n  	<ion-grid>\n  		<ion-row>\n  			<ion-col>\n  				<ion-buttons>\n			      <button ion-button full clear (click)="presentFilter()">\n			         <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon>&nbsp;Filter\n			      </button>\n			    </ion-buttons>\n  			</ion-col>\n  			<ion-col>\n  				<ion-buttons>\n			      <button ion-button full clear (click)="sortBy()">\n			        <ion-icon name="menu"></ion-icon>&nbsp;Sort\n			      </button>\n			    </ion-buttons>\n  			</ion-col>\n  		</ion-row>\n  	</ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/products/products.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProductsPage);

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = (function () {
    function SupportPage(navCtrl, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.submitted = false;
    }
    SupportPage.prototype.ionViewDidEnter = function () {
        var toast = this.toastCtrl.create({
            message: 'This does not actually send a support request.',
            duration: 3000
        });
        toast.present();
    };
    SupportPage.prototype.submit = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.supportMessage = '';
            this.submitted = false;
            var toast = this.toastCtrl.create({
                message: 'Your support request has been sent.',
                duration: 3000
            });
            toast.present();
        }
    };
    // If the user enters text in the support question and then navigates
    // without submitting first, ask if they meant to leave the page
    SupportPage.prototype.ionViewCanLeave = function () {
        var _this = this;
        // If the support message is empty we should just navigate
        if (!this.supportMessage || this.supportMessage.trim().length === 0) {
            return true;
        }
        return new Promise(function (resolve, reject) {
            var alert = _this.alertCtrl.create({
                title: 'Leave this page?',
                message: 'Are you sure you want to leave this page? Your support message will not be submitted.'
            });
            alert.addButton({ text: 'Stay', handler: reject });
            alert.addButton({ text: 'Leave', role: 'cancel', handler: resolve });
            alert.present();
        });
    };
    return SupportPage;
}());
SupportPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/support/support.html"*/'<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Support</ion-title>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #submitForm="ngForm" novalidate (ngSubmit)="submit(submitForm)">\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Enter your support message below</ion-label>\n				<ion-textarea [(ngModel)]="supportMessage" name="supportQuestion" #supportQuestion="ngModel" rows="6" required></ion-textarea>\n			</ion-item>\n		</ion-list>\n\n		<p ion-text [hidden]="supportQuestion.valid || submitted === false" color="danger" padding-left>\n			Support message is required\n		</p>\n\n		<div padding>\n			<button ion-button block type="submit">Submit</button>\n		</div>\n	</form>\n	\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/support/support.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
], SupportPage);

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_user_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, auth, userService, toastCtrl, events, push) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.userService = userService;
        this.toastCtrl = toastCtrl;
        this.events = events;
        this.push = push;
        this.login = {};
        this.submitted = false;
    }
    LoginPage.prototype.onLogin = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            // start Loader
            var loading_1 = this.loadingCtrl.create({
                content: "Login wait...",
                duration: 20
            });
            loading_1.present();
            this.auth.login('basic', this.login).then(function (result) {
                // user is now registered
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                _this.events.publish('user:login');
                loading_1.dismiss();
                _this.showToast(undefined);
                // Push Notification register
                _this.push.register().then(function (data) {
                    return _this.push.saveToken(data);
                }).then(function (data) {
                    console.log('Token saved:', data.token);
                });
            }, function (err) {
                console.log(err);
                loading_1.dismiss();
                _this.showToast(err);
            });
        }
    };
    LoginPage.prototype.showToast = function (response_message) {
        var toast = this.toastCtrl.create({
            message: (response_message ? response_message : "Log In Successfully"),
            duration: 1500
        });
        toast.present();
    };
    LoginPage.prototype.onSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<form #loginForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="login.email" name="email" type="text" #email="ngModel" spellcheck="false" autocapitalize="off"\n					required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="login.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<ion-row responsive-sm>\n			<ion-col>\n				<button ion-button (click)="onLogin(loginForm)" type="submit" block>Login</button>\n			</ion-col>\n			<ion-col>\n				<button ion-button (click)="onSignup()" color="light" block>Signup</button>\n			</ion-col>\n		</ion-row>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_5__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["e" /* Push */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_search__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__checkout_checkout__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductDetailPage = (function () {
    function ProductDetailPage(navCtrl, popoverCtrl, toastCtrl, _params) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this._params = _params;
        this.productId = _params.get('productId');
    }
    ProductDetailPage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__showcart_showcart__["a" /* ShowcartPage */]);
    };
    ProductDetailPage.prototype.addToCart = function () {
        this.presentToast();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__showcart_showcart__["a" /* ShowcartPage */]);
    };
    ProductDetailPage.prototype.buyNow = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__checkout_checkout__["a" /* CheckoutPage */]);
    };
    ProductDetailPage.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Added to cart successfully',
            duration: 1500
        });
        toast.present();
    };
    ProductDetailPage.prototype.presentPopover = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    ProductDetailPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_search__["a" /* SearchPage */]);
    };
    return ProductDetailPage;
}());
ProductDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/product-detail/product-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Product Detail</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n    <ion-buttons end>\n      <button ion-button (click)="searchField()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="presentPopover($event)">\n          <ion-icon ios="ios-more" md="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content fullscreen class="product-detail" style="background-color: #f4f4f4;">\n\n  <ion-slides pager style="height: 250px">\n    <ion-slide>\n      <img src="assets/img/banner-1.webp">\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/banner-2.webp">\n    </ion-slide>\n    <ion-slide>\n      <img src="assets/img/banner-3.webp">\n    </ion-slide>\n  </ion-slides>\n  <ion-card>\n    <ion-card-content>\n      <h2>Lenevo Vibe K5 Note</h2>\n      <small >Special Price</small>\n      <p class="price"> {{ 13499 | currency: \'INR\' }} </p>\n      <ion-badge width="25">4.1<ion-icon name="star"></ion-icon></ion-badge> \n        <span style="font-size: 12px;color: #717171;">340 ratings, 58 reviews</span>\n     </ion-card-content>\n      <ion-row>\n        <ion-col width-50 >\n          <ion-icon name="share-alt">Share</ion-icon>\n        </ion-col>\n        <ion-col width-50 >\n            <ion-icon name="heart">Wishlist</ion-icon>\n        </ion-col>\n      </ion-row>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-content>\n     <ion-row class="detail">\n        Details\n     </ion-row>\n       <h2><b>Note</b></h2>\n        <ul>\n          This Phone is Eligible for Jio Happy New Year Offer, to Avail this Offer Please Reach Out to your Nearest Brand Outlet. For more information please refer to http://dl.\n        </ul> \n        <h2><b>Highlights</b></h2>\n         <li>4 GB RAM|32 GB ROM|Expandable Upto 128 GB</li>\n         <li>5.5 inch Full HD Display</li>\n         <li>13MP Primary Camera | 8MP Front</li>\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-card>\n    <ion-card-content>\n      <ion-row class="detail">\n          Ratings & Reviews\n      </ion-row>\n      <ion-row>\n        <ion-col width-50>\n          <span style=" font-size: xx-large; ">4.1\n            <ion-icon name="star"></ion-icon>\n          </span> <br>\n          <span style="font-size: 12px;color: #717171;">385161 ratings</span>\n          <span style="font-size: 12px;color: #717171;">,  20137 reviews</span>\n        </ion-col>\n        <ion-col>\n          <rating [(ngModel)]="rate" readOnly="false" max="5"></rating>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n\n<ion-footer style="background-color: #fff;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons>\n            <button ion-button full clear (click)="addToCart()">\n               <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon> Add To Cart\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col>\n          <ion-buttons>\n            <button ion-button full (click)="buyNow()">\n              <ion-icon name="menu"></ion-icon>Buy Now\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/product-detail/product-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], ProductDetailPage);

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CheckoutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CheckoutPage = (function () {
    function CheckoutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CheckoutPage;
}());
CheckoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/checkout/checkout.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout" style="background-color: #f4f4f4;">\n	<ion-card>\n		<ion-card-content>\n			<ion-item>\n				Credit / Debit / ATM Card\n				<ion-icon name="arrow-forward" item-right></ion-icon>\n			</ion-item>\n\n			<ion-item>\n				Net Banking\n				<ion-icon name="arrow-forward" item-right></ion-icon>\n			</ion-item>\n\n			<ion-item>\n				Cash on Delivery\n				<ion-icon name="arrow-forward" item-right></ion-icon>\n			</ion-item>\n\n			<ion-item>\n				EMI (Easy Installments)\n				<ion-icon name="arrow-forward" item-right></ion-icon>\n			</ion-item>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-content>\n		  <ion-item>\n				<p>PRICE DETAILS</p>\n		  </ion-item>\n			<!-- <ion-row class="detail-row">\n				<p>PRICE DETAILS</p>\n			</ion-row>\n			<ion-row>\n				<ion-col width-70>\n				  <p>Price(1 item)</p>\n				  <p>Delievery</p>\n				</ion-col>\n				<ion-col width-30>\n				    <p style="text-align: right;">{{ 499 | currency:\'INR\'}}</p>\n				    <p style="text-align: right;color: #388e3c;">Free</p>\n				</ion-col>\n			</ion-row> -->\n			\n		</ion-card-content>\n	</ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/checkout/checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], CheckoutPage);

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = (function () {
    function SettingsPage(popoverCtrl, translate, events) {
        this.popoverCtrl = popoverCtrl;
        this.translate = translate;
        this.events = events;
    }
    SettingsPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    SettingsPage.prototype.setLanguage = function (lang) {
        this.translate.use(lang);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/settings/settings.html"*/'<!--\n  Generated template for the Settings page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Settings</ion-title>\n		<ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n	</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-list no-lines>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" (ionChange)="setLanguage(language)">\n        <ion-option value="en" selected> English</ion-option>\n        <ion-option value="es">Spanish </ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_2_ng2_translate_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(storage, db) {
        var _this = this;
        this.storage = storage;
        this.db = db;
        this.storage.get('cart').then(function (value) {
            if (value === null) {
                _this.cartItems = [];
            }
            else {
                _this.cartItems = value;
            }
        });
        this.db.connect();
    }
    DataService.prototype.getCategories = function () {
        var categories = this.db.aggregate({
            name: "testing",
            categories: this.db.collection('categories'),
            parent_categories: this.db.collection('parent_categories')
        });
        return categories.fetch();
    };
    DataService.prototype.getPopularProducts = function () {
        var popular_products = this.db.collection('popular_products');
        return popular_products.order("price", "ascending").watch();
    };
    DataService.prototype.getProducts = function () {
        var products = this.db.collection('products');
        return products.fetch();
    };
    DataService.prototype.addToCart = function (item) {
        this.cartItems.push(item);
        return this.storage.set('cart', this.cartItems);
    };
    DataService.prototype.clearCart = function () {
        this.cartItems = [];
        return this.storage.remove('cart');
    };
    DataService.prototype.getCart = function () {
        return this.storage.get('cart');
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_cloud_angular__["c" /* Database */]])
], DataService);

//# sourceMappingURL=data-service.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, userService, user, auth) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.user = user;
        this.auth = auth;
        this.signup = {};
        this.details = {
            "name": this.signup.name,
            "email": this.signup.email,
            "password": this.signup.password
        };
        this.submitted = false;
    }
    SignupPage.prototype.onSignup = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            console.log(this.signup);
            this.auth.signup(this.signup).then(function () {
                // user is now registered
                // we can now use this.user to update further data if required
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            }, function (err) {
                for (var _i = 0, _a = err.details; _i < _a.length; _i++) {
                    var e = _a[_i];
                    if (e === 'conflict_email') {
                        alert('Email already exists.');
                    }
                    else {
                        // handle other errors
                    }
                }
            });
        }
    };
    SignupPage.prototype.forgetPassword = function () {
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/signup/signup.html"*/'<ion-header>\n	<ion-navbar>\n		<button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n		<ion-title>Signup</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content class="login-page">\n\n	<div class="logo">\n		<img src="assets/img/appicon.svg" alt="Ionic Logo">\n	</div>\n\n	<form #signupForm="ngForm" novalidate>\n		<ion-list no-lines>\n			<ion-item>\n				<ion-label stacked color="primary">Name</ion-label>\n				<ion-input [(ngModel)]="signup.name" name="name" type="text" #name="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="name.valid || submitted == false" color="danger" padding-left>\n				Name is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Email</ion-label>\n				<ion-input [(ngModel)]="signup.email" name="email" type="email" #email="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="email.valid || submitted == false" color="danger" padding-left>\n				Email is required\n			</p>\n\n			<ion-item>\n				<ion-label stacked color="primary">Password</ion-label>\n				<ion-input [(ngModel)]="signup.password" name="password" type="password" #password="ngModel" required>\n				</ion-input>\n			</ion-item>\n			<p ion-text [hidden]="password.valid || submitted == false" color="danger" padding-left>\n				Password is required\n			</p>\n		</ion-list>\n\n		<div padding>\n			<button ion-button (click)="onSignup(signupForm)" type="submit" block>Create</button>\n		</div>\n	</form>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["f" /* User */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 206;

/***/ }),

/***/ 222:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 222;

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout_checkout__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ShowcartPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var ShowcartPage = (function () {
    function ShowcartPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.quantity = 1;
    }
    ShowcartPage.prototype.goToCheckout = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__checkout_checkout__["a" /* CheckoutPage */]);
    };
    return ShowcartPage;
}());
ShowcartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/showcart/showcart.html"*/'<!--\n  Generated template for the ShowcartPage page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n	<ion-navbar>\n  	<ion-title>Showcart</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding class="showcart" style="background-color: #f4f4f4;">\n<!-- First Item -->\n	<ion-card>\n		<ion-card-content>\n			<ion-row>\n	    	  <h2>Jwellary Charms beads</h2>\n			</ion-row>\n			<ion-row>\n				<ion-col width-67>\n	    	  		<small>Seller : SansarIndia</small>\n	    	  		<p class="price">{{ 499 | currency:\'INR\'}}<span class="span-styling">{{ 1499 | currency:\'INR\'}}</span><span class="discount-styling">54 % off</span></p>\n	    	  		<small style="color: #388e3c;">1 Offer Available</small>\n	    	  		<p>Free delievery in 6-9 days</p>\n				</ion-col>\n				<ion-col width-33>\n				   <img src="assets/img/banner-1.webp">\n				   	<ion-select [(ngModel)]="quantity">\n				      <ion-option value="1">1</ion-option>\n				      <ion-option value="2">2</ion-option>\n				      <ion-option value="3">3</ion-option>\n				    </ion-select>\n				</ion-col>\n			</ion-row>\n		</ion-card-content>\n		<ion-row class="row">\n			<ion-col width-50>\n		        <p>MOVE TO WISHLIST</p>\n			</ion-col>\n			<ion-col width-50>\n				<p>REMOVE</p>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n\n	<!-- Second Item -->\n	<ion-card>\n		<ion-card-content>\n			<ion-row>\n	    	  <h2>Jwellary Charms beads</h2>\n			</ion-row>\n			<ion-row>\n				<ion-col width-67>\n	    	  		<small>Seller : SansarIndia</small>\n	    	  		<p class="price">{{ 499 | currency:\'INR\'}}<span class="span-styling">{{ 1499 | currency:\'INR\'}}</span><span class="discount-styling">54 % off</span></p>\n	    	  		<small style="color: #388e3c;">1 Offer Available</small>\n	    	  		<p>Free delievery in 6-9 days</p>\n				</ion-col>\n				<ion-col width-33>\n				   <img src="assets/img/banner-1.webp">\n				   	<span>\n				   	<ion-select [(ngModel)]="quantity">\n				      <ion-option value="1">1</ion-option>\n				      <ion-option value="2">2</ion-option>\n				      <ion-option value="3">3</ion-option>\n				    </ion-select>\n				    </span>\n				</ion-col>\n			</ion-row>\n		</ion-card-content>\n		<ion-row class="row">\n			<ion-col width-50>\n		        <p>MOVE TO WISHLIST</p>\n			</ion-col>\n			<ion-col width-50>\n				<p>REMOVE</p>\n			</ion-col>\n		</ion-row>\n	</ion-card>\n\n\n\n\n<!-- Price Details -->\n	<ion-card>\n		<ion-card-content>\n			<ion-row class="detail-row">\n				<p>PRICE DETAILS</p>\n			</ion-row>\n			<ion-row>\n				<ion-col width-70>\n				  <p>Price(1 item)</p>\n				  <p>Delievery</p>\n				</ion-col>\n				<ion-col width-30>\n				    <p style="text-align: right;">{{ 499 | currency:\'INR\'}}</p>\n				    <p style="text-align: right;color: #388e3c;">Free</p>\n				</ion-col>\n			</ion-row>\n			\n		</ion-card-content>\n	</ion-card>\n</ion-content>\n\n<ion-footer style="background-color: #fff;">\n	<ion-row>\n		<ion-col width-50>\n		<p> View Price Details</p>\n		</ion-col>\n		<ion-col width-50>\n			<button ion-button full (click)="goToCheckout()">Checkout</button>\n		</ion-col>\n	</ion-row>\n</ion-footer>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/showcart/showcart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], ShowcartPage);

//# sourceMappingURL=showcart.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsFilterPage = (function () {
    function ProductsFilterPage(navParams, viewCtrl) {
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.filters = [];
        this.filters = [
            {
                "name": "Free Shiping",
                "isChecked": false
            },
            {
                "name": "Fulfilled by vPlanet",
                "isChecked": true
            },
            {
                "name": "In Stock",
                "isChecked": true
            }
        ];
    }
    ProductsFilterPage.prototype.resetFilters = function () {
        // reset all of the toggles to be checked
        this.filters.forEach(function (track) {
            track.isChecked = true;
        });
    };
    ProductsFilterPage.prototype.applyFilters = function () {
        // Pass back a new array of track names to exclude
        this.dismiss();
    };
    ProductsFilterPage.prototype.dismiss = function (data) {
        // using the injected ViewController this page
        // can "dismiss" itself and pass back data
        this.viewCtrl.dismiss(data);
    };
    return ProductsFilterPage;
}());
ProductsFilterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-products-filter',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/products-filter/products-filter.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">Cancel</button>\n    </ion-buttons>\n\n    <ion-title>\n      Filter Products\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button (click)="applyFilters()" strong>Done</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>Filters</ion-list-header>\n\n    <ion-item *ngFor="let filter of filters" [attr.filter]="filter.name | lowercase">\n      <span item-left class="dot"></span>\n      <ion-label>{{filter.name}}</ion-label>\n      <ion-toggle [(ngModel)]="filter.isChecked" color="secondary"></ion-toggle>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n    <button ion-item (click)="resetFilters()" detail-none class="reset-filters">\n      Reset All Filters\n    </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/products-filter/products-filter.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */]])
], ProductsFilterPage);

//# sourceMappingURL=products-filter.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_products__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_service__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CategoriesPage = (function () {
    function CategoriesPage(navCtrl, popoverCtrl, data) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.data = data;
        this.data.getCategories().subscribe(function (data) {
            for (var i = 0; i < data.categories.length; ++i) {
                var p_id = data.categories[i].parent_id;
                for (var j = 0; j < data.parent_categories.length; ++j) {
                    if (data.parent_categories[j].id == p_id) {
                        data.parent_categories[j].child.push(data.categories[i]);
                    }
                }
            }
            _this.categoryList = data.parent_categories;
        }, function (error) {
            console.error(error);
        });
    }
    CategoriesPage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__showcart_showcart__["a" /* ShowcartPage */]);
    };
    CategoriesPage.prototype.goToProducts = function (id) {
        // go to the ProductsPage
        // and pass in the category id
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__products_products__["a" /* ProductsPage */], id);
    };
    CategoriesPage.prototype.search = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
    };
    return CategoriesPage;
}());
CategoriesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/categories/categories.html"*/'<ion-header>\n	<ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n  	<ion-title>{{ \'categories\' | translate }}</ion-title>\n    \n    <ion-buttons end>\n      <button ion-button (click)="search()">\n        <ion-icon ios="ios-search" md="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="categories">\n\n  <ion-list-header *ngIf="!categoryList">Fetching Categories ....</ion-list-header>\n\n	<ion-list *ngFor="let cat of categoryList">\n\n    <ion-list-header>{{cat.name}}</ion-list-header>\n\n    <ion-item *ngFor="let subCat of cat.child">\n      <ion-avatar item-left>\n        <img [src]="subCat.image">\n      </ion-avatar>\n      <h2>{{subCat.name}}</h2>\n      <p>{{subCat.description}}</p>\n      <button ion-button clear item-right (click)="goToProducts(subCat.id)">View</button>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/categories/categories.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_service__["a" /* DataService */]])
], CategoriesPage);

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WishlistPage = (function () {
    function WishlistPage(navCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.products = [{
                name: '9ct Silver Clips',
                image: 'assets/img/products/clips.jpg',
                rating: 4.5,
                price: 12
            }, {
                name: 'Alphabet Charms',
                image: 'assets/img/products/alphabet.png',
                rating: 4.8,
                price: 24
            }, {
                name: 'Christmas Charms',
                image: 'assets/img/products/christmas.webp',
                rating: 3.9,
                price: 25
            }];
        // for(let i = 0; i < 3; i++){
        //     let item = {
        //       name: '9ct Dimond Neclace',
        //       image: 'img/products/clips.jpg',
        //       rating: 4.0,
        //       price: 520
        //     };
        //     this.products.push(item);
        // }
    }
    WishlistPage.prototype.goToCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__showcart_showcart__["a" /* ShowcartPage */]);
    };
    WishlistPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__popover_popover__["a" /* PopoverPage */]);
        popover.present({
            ev: myEvent
        });
    };
    return WishlistPage;
}());
WishlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/wishlist/wishlist.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n  	<ion-title>Wishlist</ion-title>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end>\n      <button ion-button (click)="goToCart()">\n        <ion-icon ios="ios-cart" md="md-cart"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="presentPopover($event)">\n          <ion-icon ios="ios-more" md="md-more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n	<ion-list>\n    <ion-list-header>\n      4 Items in your Wishlist (Swipe for options).\n    </ion-list-header>\n\n    <ion-item-sliding *ngFor="let product of products">\n      <ion-item>\n        <ion-avatar item-left>\n		      <img [src]="product.image">\n		    </ion-avatar>\n		    <h2>{{product.name}}</h2>\n		    <h3>{{product.price | currency}}</h3>\n		    <p>{{product.rating}} stars and 420 reviews</p>\n      </ion-item>\n      <ion-item-options side="right">\n	      <button ion-button color="danger">\n	        <ion-icon name="trash"></ion-icon>\n	        Remove\n	      </button>\n	      <button ion-button color="secondary">\n	        <ion-icon name="cart"></ion-icon>\n	        Add Cart\n	      </button>\n	    </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n	\n	<!-- <ion-list>\n		<ion-item-sliding>\n		  <ion-item *ngFor="let product of products">\n		    <ion-avatar item-left>\n		      <img [src]="product.image">\n		    </ion-avatar>\n		    <h2>{{product.name}}</h2>\n		    <h3>{{product.price | currency}}</h3>\n		    <p>{{product.rating}} stars and 420 reviews</p>\n		  </ion-item>\n		  <ion-item-options side="left">\n	      <button primary>\n	        <ion-icon name="trash"></ion-icon>\n	        Remove\n	      </button>\n	      <button secondary>\n	        <ion-icon name="cart"></ion-icon>\n	        Add\n	      </button>\n	    </ion-item-options>\n		</ion-item-sliding>\n	</ion-list> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/wishlist/wishlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */]])
], WishlistPage);

//# sourceMappingURL=wishlist.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(551);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AboutPage = (function () {
    function AboutPage(popoverCtrl, call, socialSharing) {
        this.popoverCtrl = popoverCtrl;
        this.call = call;
        this.socialSharing = socialSharing;
        this.conferenceDate = '2047-05-17';
    }
    AboutPage.prototype.presentPopover = function (event) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    AboutPage.prototype.callNow = function () {
        this.call.callNumber("+919989887765", true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    AboutPage.prototype.shareViaFacebook = function () {
        var _this = this;
        // recommended to use canShareVia before using shareVia        
        this.socialSharing.canShareVia("facebook", "Veloice:Intelligent Business Telephony", "Real time Voice", "http://veloice.com/images/banner.png", "http://veloice.com").then(function () {
            _this.socialSharing.shareViaFacebook("Veloice:Intelligent Business Telephony", "http://veloice.com/images/banner.png", "http://veloice.com");
        }).catch(function () {
            alert("Cannot share on Facebook");
        });
    };
    AboutPage.prototype.shareViaWhatsApp = function () {
        var _this = this;
        // recommended to use canShareVia before using shareVia        
        this.socialSharing.canShareVia("whatsapp", "Veloice:Intelligent Business Telephony", "Real time Voice", "http://veloice.com/images/banner.png", "http://veloice.com").then(function () {
            _this.socialSharing.shareViaWhatsApp("Veloice:Intelligent Business Telephony", "http://veloice.com/images/banner.png", "http://veloice.com");
        }).catch(function () {
            alert("Cannot share on Whatsapp");
        });
    };
    AboutPage.prototype.shareViaEmail = function () {
        var _this = this;
        // recommended to use canShareVia before using shareVia        
        this.socialSharing.canShareViaEmail().then(function () {
            _this.socialSharing.shareViaEmail('Veloice:Intelligent Business Telephony', // Message
            'Veloice', // Email Subject
            ['toperson@xyz.com', 'tosecond@xyz.com'], // TO: must be null or an array
            ['cc@xyz.com'], // CC: must be null or an array
            null, // BCC: must be null or an array
            ['http://veloice.com/images/banner.png'] // FILES: can be null, a string, or an array
            );
        }).catch(function () {
            alert("Cannot share on Email");
        });
    };
    AboutPage.prototype.share = function () {
        this.socialSharing.share("Veloice:Intelligent Business Telephony", "Real time Voice", "http://veloice.com/images/banner.png", "http://veloice.com");
    };
    AboutPage.prototype.updateFeed = function (refresher) {
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher (ionRefresh)="updateFeed($event)">\n    <ion-refresher-content\n      pullingText="Updating Feed"\n      refreshingSpinner="circles"\n      refreshingText="Updating...">\n    </ion-refresher-content>\n  </ion-refresher>\n  \n  <div class="about-header">\n    <img src="assets/img/banner-1.webp">\n  </div>\n  <div padding class="about-info">\n    <h4>vPlanet Commerce</h4>\n\n    <ion-list no-lines>\n      <ion-item>\n        <ion-icon name="calendar" item-left></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n    </ion-list>\n\n    <p>\n      vPlanet Commerce is a hosted m-commerce solution in Cloud for online merchants. vPlanet Commerce lowers the barriers to entry into online business for start up and small business and at the same time provide the scalability of enterprise solution while they grow into bigger businesses.\n    </p>\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab><ion-icon name="help"></ion-icon></button>\n    <ion-fab-list side="top">\n      <button (click)="callNow()" ion-fab><ion-icon name="call"></ion-icon></button>\n      <button (click)="shareViaEmail()" ion-fab><ion-icon name="mail"></ion-icon></button>\n      <button (click)="shareViaFacebook()" ion-fab><ion-icon name="logo-facebook"></ion-icon></button>\n      <button (click)="shareViaWhatsApp()" ion-fab><ion-icon name="logo-whatsapp"></ion-icon></button>\n      <button (click)="share()" ion-fab><ion-icon name="share"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab>\n\n  <!-- <ion-fab bottom right>\n    <button ion-fab mini><ion-icon name="help"></ion-icon></button>\n    <ion-fab-list>\n      <button (click)="call()" ion-fab><ion-icon name="call"></ion-icon></button>\n      <button (click)="sendMail()" ion-fab><ion-icon name="mail"></ion-icon></button>\n    </ion-fab-list>\n  </ion-fab> -->\n\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/about/about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_call_number__["a" /* CallNumber */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(553);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AccountPage = (function () {
    function AccountPage(alertCtrl, nav, user, userService, camera) {
        this.alertCtrl = alertCtrl;
        this.nav = nav;
        this.user = user;
        this.userService = userService;
        this.camera = camera;
        this.account = "profile";
        this.base64Image = "http://www.gravatar.com/avatar?d=mm&s=140";
    }
    AccountPage.prototype.ngAfterViewInit = function () {
    };
    AccountPage.prototype.updatePicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 100,
            targetHeight: 100,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            cameraDirection: 0 // BACK 0, FRONT 1
        };
        this.camera.getPicture(options).then(function (imageData) {
            console.log(imageData);
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
        console.log('Clicked to update picture');
    };
    // Present an alert for adding date of birth
    // clicking OK will update the DOB
    // clicking Cancel will close the alert and do nothing
    AccountPage.prototype.addDOB = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Date of Birth',
            buttons: [
                'Cancel'
            ]
        });
        alert.addInput({
            name: 'birthdate',
            value: this.birthdate,
            placeholder: 'birthdate',
            type: 'date'
        });
        alert.addButton({
            text: 'Ok',
            handler: function (data) {
                _this.user.set('birthdate', data.birthdate);
                _this.user.save();
            }
        });
        alert.present();
    };
    AccountPage.prototype.changePassword = function () {
        console.log('Clicked to change password');
    };
    AccountPage.prototype.logout = function () {
        this.userService.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    AccountPage.prototype.support = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__support_support__["a" /* SupportPage */]);
    };
    return AccountPage;
}());
AccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-account',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/account/account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n  <ion-toolbar [color]="isAndroid ? \'primary\' : \'light\'" no-border-top>\n    <ion-segment [(ngModel)]="account" [color]="isAndroid ? \'light\' : \'primary\'">\n      <ion-segment-button value="profile">\n        Profile\n      </ion-segment-button>\n      <ion-segment-button value="orders">\n        Orders\n      </ion-segment-button>\n      <ion-segment-button value="wallet">\n        Wallet\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <div [ngSwitch]="account">\n    \n    <div padding-top text-center *ngSwitchCase="\'profile\'" >\n      <img alt="profileImage" [src]="base64Image">\n      <h2>{{username}}</h2>\n\n      <ion-list inset>\n        <button ion-item (click)="updatePicture()">Update Picture</button>\n        <button ion-item (click)="addDOB()">Update Birth Date</button>\n        <button ion-item (click)="logout()">Logout</button>\n      </ion-list>\n    </div>\n\n    <div padding-top text-center *ngSwitchCase="\'orders\'" >\n      // Order List data to be shown here\n    </div>\n\n    <div padding-top text-center *ngSwitchCase="\'wallet\'">\n      // Wallet statement and transaction here.\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/account/account.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_cloud_angular__["f" /* User */],
        __WEBPACK_IMPORTED_MODULE_4__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */]])
], AccountPage);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkThroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WalkThroughPage = (function () {
    function WalkThroughPage(navCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.storage = storage;
        this.showSkip = true;
    }
    WalkThroughPage.prototype.startApp = function () {
        var _this = this;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]).then(function () {
            _this.storage.set('hasSeenWalkThrough', 'true');
        });
    };
    WalkThroughPage.prototype.onSlideChangeStart = function (slider) {
        this.showSkip = !slider.isEnd();
    };
    WalkThroughPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on the walkthrough page
        this.menu.enable(false);
    };
    WalkThroughPage.prototype.ionViewDidLeave = function () {
        // enable the root left menu when leaving the walkthrough page
        this.menu.enable(true);
    };
    return WalkThroughPage;
}());
WalkThroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-walkthrough',template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/walkthrough/walkthrough.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-buttons end *ngIf="showSkip">\n      <button ion-button (click)="startApp()" color="primary">Skip</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-bounce>\n  <ion-slides (ionSlideWillChange)="onSlideChangeStart($event)" pager>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-1.png" class="slide-image"/>\n      <h2 class="slide-title">\n        Welcome to <b>vPlanet Commerce</b>\n      </h2>\n      <p>\n        <b>vPlanet Commerce app</b> is a practical preview of an e-commerce application in action.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ico-database.png" class="slide-image"/>\n      <h2 class="slide-title" >Built with IonicDb</h2>\n      <p><b>vPlanet Commerce</b> is built on top of Ionic backend services. It uses IonicDB, Ionic Auth and other cloud services.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/pwa-slidebox-img-3.png" class="slide-image"/>\n      <h2 class="slide-title">PWA Supported</h2>\n      <p><b>vPlanet Commerce</b> is also a progressive web app. With Ionic support for PWA we can now ship same mobile-app as a web application.</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src="assets/img/ica-slidebox-img-4.png" class="slide-image"/>\n      <h2 class="slide-title">Ready to Shop?</h2>\n      <button ion-button icon-right large clear (click)="startApp()">\n        Continue\n        <ion-icon name="arrow-forward"></ion-icon>\n      </button>\n    </ion-slide>\n\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/walkthrough/walkthrough.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], WalkThroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(561);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export deepLinkConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate_ng2_translate__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_walkthrough_walkthrough__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_products_products__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_wishlist_wishlist__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_checkout_checkout__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_products_filter_products_filter__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_support_support__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_search_search__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_user_service__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_data_service__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__filters_ordinal__ = __webpack_require__(907);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ionic2_rating__ = __webpack_require__(908);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_deeplinks__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_text_to_speech__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_rate__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_google_analytics__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_social_sharing__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_push__ = __webpack_require__(545);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























// 3rd party modules










function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4_ng2_translate_ng2_translate__["d" /* TranslateStaticLoader */](http, './assets/i18n', '.json');
}
// Configure database priority
// export function provideStorage() {
//   return new Storage(['sqlite', 'indexeddb', 'localstorage'], { name: 'vplanet' })
// }
var cloudSettings = {
    'core': {
        'app_id': 'f8fec798'
    },
    'push': {
        'sender_id': '762350093850',
        'pluginConfig': {
            'ios': {
                'badge': true,
                'sound': true
            },
            'android': {
                'iconColor': '#343434'
            }
        }
    }
};
// Deeplink Configuration
var deepLinkConfig = {
    links: [
        { component: __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */], name: 'Home Page', segment: '' },
        { component: __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */], name: 'Categories Page', segment: 'categories' },
        { component: __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */], name: 'Categories Product Page', segment: 'categories/:categoryId' },
        { component: __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__["a" /* ProductDetailPage */], name: 'Product Details Page', segment: 'products/:productId' },
        { component: __WEBPACK_IMPORTED_MODULE_19__pages_wishlist_wishlist__["a" /* WishlistPage */], name: 'Wishlist Page', segment: 'wishlist' },
        { component: __WEBPACK_IMPORTED_MODULE_20__pages_showcart_showcart__["a" /* ShowcartPage */], name: 'Showcart Page', segment: 'cart' },
        { component: __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */], name: 'Support Page', segment: 'feedback' },
        { component: __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */], name: 'About Page', segment: 'settings' },
        { component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */], name: 'About Page', segment: 'about' },
        { component: __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */], name: 'Login Page', segment: 'login' },
        { component: __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */], name: 'Signup Page', segment: 'signup' },
        { component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */], name: 'Account Page', segment: 'account' }
    ]
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* vPlanetApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_walkthrough_walkthrough__["a" /* WalkThroughPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_products_filter_products_filter__["a" /* ProductsFilterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_showcart_showcart__["a" /* ShowcartPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */],
            __WEBPACK_IMPORTED_MODULE_28__filters_ordinal__["a" /* OrdinalPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* vPlanetApp */], { locationStrategy: 'hash' }, deepLinkConfig),
            __WEBPACK_IMPORTED_MODULE_29_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_translate_ng2_translate__["b" /* TranslateModule */].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_4_ng2_translate_ng2_translate__["a" /* TranslateLoader */],
                useFactory: createTranslateLoader,
                deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */]]
            }),
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            // IonicStorageModule.forRoot({ useFactory: provideStorage }),
            __WEBPACK_IMPORTED_MODULE_6__ionic_cloud_angular__["b" /* CloudModule */].forRoot(cloudSettings)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* vPlanetApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_account_account__["a" /* AccountPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_popover_popover__["a" /* PopoverPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_walkthrough_walkthrough__["a" /* WalkThroughPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_categories_categories__["a" /* CategoriesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_products_products__["a" /* ProductsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_products_filter_products_filter__["a" /* ProductsFilterPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_product_detail_product_detail__["a" /* ProductDetailPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_wishlist_wishlist__["a" /* WishlistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_showcart_showcart__["a" /* ShowcartPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_checkout_checkout__["a" /* CheckoutPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_deeplinks__["a" /* Deeplinks */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_text_to_speech__["a" /* TextToSpeech */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_35__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_37__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_push__["a" /* Push */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicErrorHandler */] },
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* APP_BASE_HREF */], useValue: '/' },
            __WEBPACK_IMPORTED_MODULE_26__providers_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_27__providers_data_service__["a" /* DataService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__support_support__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
        this.classes = {
            'SettingsPage': __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */],
            'SupportPage': __WEBPACK_IMPORTED_MODULE_2__support_support__["a" /* SupportPage */]
        };
    }
    PopoverPage.prototype.goToPage = function (page) {
        // Navigting from Overlay Components
        // https://ionicframework.com/docs/v2/api/navigation/NavController/
        // If you simply push it will freeze the UI
        this.viewCtrl.dismiss();
        this.app.getRootNav().push(this.classes[page]);
    };
    PopoverPage.prototype.close = function (url) {
        window.open(url, '_blank');
        this.viewCtrl.dismiss();
    };
    return PopoverPage;
}());
PopoverPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        template: "\n    <ion-list>\n      <button ion-item (click)=\"goToPage('SettingsPage')\">Settings</button>\n      <button ion-item (click)=\"goToPage('SupportPage')\">Support</button>\n      <button ion-item (click)=\"close('http://ionicframework.com/docs/v2/getting-started')\">Learn Ionic</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], PopoverPage);

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(events, storage, auth, push) {
        this.events = events;
        this.storage = storage;
        this.auth = auth;
        this.push = push;
        this.USER_DATA = "ionic_user_" + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* APP_ID */];
        this.AUTH_KEY = "ionic_auth_" + __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* APP_ID */];
        var self = this;
        var data = self.getUserData();
        self.userData = JSON.parse(data);
        if (!self.userData || self.userData == '' || !self.userData.id) {
            self.is_authenticated = false;
        }
        else {
            self.is_authenticated = true;
        }
    }
    UserService.prototype.getUserData = function () {
        return localStorage.getItem(this.USER_DATA);
    };
    UserService.prototype.isAuthenticated = function () {
        // We can also call use this.auth.isAuthenticated()
        // But to save server calls we have managed it locally
        var self = this;
        return new Promise(function (resolve) {
            resolve(self.is_authenticated);
        });
    };
    UserService.prototype.logout = function () {
        this.auth.logout();
        this.push.unregister();
        this.events.publish('user:logout');
        return true;
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["a" /* Auth */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["e" /* Push */]])
], UserService);

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = (function () {
    function SearchPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.queryText = '';
    }
    SearchPage.prototype.updateSchedule = function () {
        console.log(this.queryText);
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/search/search.html"*/'<ion-header>\n	<ion-navbar color="light">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-searchbar color="primary"\n                   [(ngModel)]="queryText"\n                   (ionInput)="updateSchedule()"\n                   placeholder="Search">\n    </ion-searchbar>\n<!--     <ion-searchbar (input)="getItems($event)"></ion-searchbar>\n -->  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n    	Hello\n    </ion-item>\n    <ion-item>\n    	test\n    </ion-item>\n    <ion-item>\n    	test\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vPlanetApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_products_products__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_product_detail_product_detail__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_showcart_showcart__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_about_about__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_account_account__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_walkthrough_walkthrough__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_support_support__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_user_service__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var vPlanetApp = (function () {
    function vPlanetApp(events, userService, menu, platform, storage, translate, deploy, alertCtrl, splashScreen, deeplinks, appRate, ga, push, tts) {
        var _this = this;
        this.events = events;
        this.userService = userService;
        this.menu = menu;
        this.platform = platform;
        this.storage = storage;
        this.translate = translate;
        this.deploy = deploy;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.deeplinks = deeplinks;
        this.appRate = appRate;
        this.ga = ga;
        this.push = push;
        this.tts = tts;
        // List of pages that can be navigated to from the left menu
        // the left menu only works after login
        // the login page disables the left menu
        this.appPages = [
            { title: 'home', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'categories', component: __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */], index: 1, icon: 'list' },
            { title: 'cart', component: __WEBPACK_IMPORTED_MODULE_16__pages_showcart_showcart__["a" /* ShowcartPage */], index: 2, icon: 'cart' },
            { title: 'wishlist', component: __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */], index: 3, icon: 'heart' }
        ];
        this.loggedInPages = [
            { title: 'account', component: __WEBPACK_IMPORTED_MODULE_18__pages_account_account__["a" /* AccountPage */], icon: 'person' },
            { title: 'logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */], icon: 'log-out', logsOut: true }
        ];
        this.loggedOutPages = [
            { title: 'login', component: __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */], icon: 'log-in' },
            { title: 'signup', component: __WEBPACK_IMPORTED_MODULE_20__pages_signup_signup__["a" /* SignupPage */], icon: 'person-add' }
        ];
        this.otherPages = [
            { title: 'about', component: __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */], icon: 'cube' },
            { title: 'settings', component: __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */], icon: 'settings' },
            { title: 'feedback', component: __WEBPACK_IMPORTED_MODULE_23__pages_support_support__["a" /* SupportPage */], icon: 'mail-open' }
        ];
        // Check if the user has already seen the walkthrough
        this.storage.get('hasSeenWalkThrough').then(function (hasSeenWalkThrough) {
            if (hasSeenWalkThrough) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_22__pages_walkthrough_walkthrough__["a" /* WalkThroughPage */];
            }
            _this.platformReady();
        });
        // decide which menu items should be hidden by current login status stored in local storage
        this.userService.isAuthenticated().then(function (isAuthenticated) {
            _this.enableMenu(isAuthenticated === true);
        });
        this.listenToLoginEvents();
        this.initializeTranslateServiceConfig();
        // checks if new snapshot available
        if (this.platform.is('cordova')) {
            this.deploy.check().then(function (snapshotAvailable) {
                if (snapshotAvailable) {
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Update Available !',
                        message: 'Do you want to update the application now ?',
                        buttons: [
                            {
                                text: 'Cancel',
                                role: 'cancel',
                                handler: function () {
                                    console.log('Cancel clicked');
                                }
                            },
                            {
                                text: 'Update',
                                handler: function () {
                                    _this.deploy.download().then(function () {
                                        _this.deploy.extract();
                                    }).then(function () {
                                        _this.deploy.load();
                                    });
                                }
                            }
                        ]
                    });
                    alert_1.present();
                }
            });
        }
    }
    vPlanetApp.prototype.initializeTranslateServiceConfig = function () {
        // var userLang = navigator.language.split('-')[0];
        // userLang = /(en|es)/gi.test(userLang) ? userLang : 'en';
        // this.translate.setDefaultLang(userLang);
        // this.translate.use(userLang);
    };
    vPlanetApp.prototype.openPage = function (page) {
        var _this = this;
        // the nav component was found using @ViewChild(Nav)
        // reset the nav to remove previous pages and only have this page
        // we wouldn't want the back button to show in this scenario
        if (page.index) {
            this.nav.setRoot(page.component, { tabIndex: page.index });
        }
        else {
            this.nav.setRoot(page.component).catch(function () {
                console.log("Didn't set nav root");
            });
        }
        if (page.logsOut === true) {
            // Give the menu time to close before changing to logged out
            setTimeout(function () {
                _this.userService.logout();
            }, 1000);
        }
    };
    vPlanetApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.enableMenu(true);
        });
        this.events.subscribe('user:logout', function () {
            _this.enableMenu(false);
        });
    };
    vPlanetApp.prototype.enableMenu = function (loggedIn) {
        this.menu.enable(loggedIn, 'loggedInMenu');
        this.menu.enable(!loggedIn, 'loggedOutMenu');
    };
    vPlanetApp.prototype.platformReady = function () {
        var _this = this;
        // Call any initial plugins when ready
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
            // Convenience to route with a given nav
            _this.deeplinks.route({
                '/about-us': __WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */],
                '/categories': __WEBPACK_IMPORTED_MODULE_12__pages_categories_categories__["a" /* CategoriesPage */],
                '/wishlist': __WEBPACK_IMPORTED_MODULE_15__pages_wishlist_wishlist__["a" /* WishlistPage */],
                '/cart': __WEBPACK_IMPORTED_MODULE_16__pages_showcart_showcart__["a" /* ShowcartPage */],
                '/login': __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
                '/settings': __WEBPACK_IMPORTED_MODULE_21__pages_settings_settings__["a" /* SettingsPage */],
                '/categories/:categoryId': __WEBPACK_IMPORTED_MODULE_13__pages_products_products__["a" /* ProductsPage */],
                '/products/:productId': __WEBPACK_IMPORTED_MODULE_14__pages_product_detail_product_detail__["a" /* ProductDetailPage */]
            }).subscribe(function (match) {
                console.log('Successfully routed', match);
            }, function (nomatch) {
                console.warn('Unmatched Route', nomatch);
            });
            if (_this.platform.is('cordova')) {
                // App rate plugin
                _this.appRate.preferences.customLocale = {
                    title: "ClusTMPay",
                    message: "Would you mind taking a moment to rate it? It won’t take more than a minute. Thanks for your support!",
                    cancelButtonLabel: "No, Thanks",
                    laterButtonLabel: "Remind Me Later",
                    rateButtonLabel: "Rate It Now"
                };
                _this.appRate.preferences.storeAppURL = {
                    android: 'market://details?id=com.vplanetcommerce.demoionicpwa'
                };
                _this.appRate.promptForRating(false);
                // Initiate Push
                _this.initPushNotification();
            }
            // Google Analytics
            return _this.ga.startTrackerWithId("UA-92660667-1")
                .then(function () {
                console.log('Google analytics is ready now');
                return _this.ga.enableUncaughtExceptionReporting(true);
            }).then(function (_success) {
                console.log("startTrackerWithId success");
            }).catch(function (_error) {
                console.log("enableUncaughtExceptionReporting", _error);
            });
        });
    };
    vPlanetApp.prototype.isActive = function (page) {
        if (this.nav.getActive() && this.nav.getActive().component === page.component) {
            return 'primary';
        }
        return;
    };
    vPlanetApp.prototype.initPushNotification = function () {
        // to initialize push notifications
        var options = {
            android: {
                senderID: '12345679'
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        var self = this;
        pushObject.on('notification').subscribe(function (data) {
            console.log('Received a notification', data);
            self.tts.speak({ text: data.message, locale: 'en-IN', rate: 0.75 })
                .then(function () { return console.log('Success'); })
                .catch(function (reason) { return console.log(reason); });
            if (data.additionalData.foreground) {
                // if application open, show alert
                alert(data.message);
            }
            //if user NOT using app and push notification comes
            // for demo purpose for every push message we push to AboutPage
            // Although you can applu logic and according to API data 
            // you can push to specific page
            self.nav.push(__WEBPACK_IMPORTED_MODULE_17__pages_about_about__["a" /* AboutPage */], { message: data.message });
            // Not working in Ionic Native 3
            // pushObject.finish(function() {
            //     console.log("processing of push data is finished");
            // }, function() {
            //     console.log("something went wrong with push.finish for ID = " + data.additionalData.notId)
            // }, data.additionalData.notId);
        });
        pushObject.on('registration').subscribe(function (registration) { return console.log('Device registered', registration); });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin', error); });
    };
    return vPlanetApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Nav */])
], vPlanetApp.prototype, "nav", void 0);
vPlanetApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/app/app.template.html"*/'<ion-split-pane>\n\n  <!-- logged out menu -->\n  <ion-menu id="loggedOutMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>{{\'menu\' | translate}}</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          {{\'navigate\' | translate}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          {{\'account\' | translate}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedOutPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n        <button ion-item menuClose *ngFor="let p of otherPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- logged in menu -->\n  <ion-menu id="loggedInMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          {{\'navigate\' | translate}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of appPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          {{\'account\' | translate}}\n        </ion-list-header>\n        <button ion-item menuClose *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n        <button ion-item menuClose *ngFor="let p of otherPages" (click)="openPage(p)">\n          <ion-icon item-left [name]="p.icon" [color]="isActive(p)"></ion-icon>\n          {{ p.title | translate }}\n        </button>\n      </ion-list>\n\n    </ion-content>\n\n  </ion-menu>\n\n\n  <!-- main navigation -->\n  <ion-nav [root]="rootPage" #content swipeBackEnabled="false" main></ion-nav>\n</ion-split-pane>\n'/*ion-inline-end:"/home/ajay/Desktop/sih/ClusTMPay-SIH2019/mobile-desktop-app-ionic/src/app/app.template.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["c" /* TranslateService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */],
        __WEBPACK_IMPORTED_MODULE_24__providers_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_cloud_angular__["d" /* Deploy */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_deeplinks__["a" /* Deeplinks */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_app_rate__["a" /* AppRate */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_push__["a" /* Push */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__["a" /* TextToSpeech */]])
], vPlanetApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ID; });
var APP_ID = 'f8fec798';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdinalPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrdinalPipe = (function () {
    function OrdinalPipe() {
    }
    OrdinalPipe.prototype.transform = function (value, args) {
        if (!value)
            return value;
        if (isNaN(value) || value < 1) {
            return value;
        }
        else {
            var lastDigit = value % 10;
            if (lastDigit === 1) {
                return value + 'st';
            }
            else if (lastDigit === 2) {
                return value + 'nd';
            }
            else if (lastDigit === 3) {
                return value + 'rd';
            }
            else if (lastDigit > 3) {
                return value + 'th';
            }
        }
    };
    return OrdinalPipe;
}());
OrdinalPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'ordinal' })
], OrdinalPipe);

//# sourceMappingURL=ordinal.js.map

/***/ })

},[556]);
//# sourceMappingURL=main.js.map