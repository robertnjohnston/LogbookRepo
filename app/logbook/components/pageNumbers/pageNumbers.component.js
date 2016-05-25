System.register(['angular2/core', '../../services/pageService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, pageService_1;
    var PageNumbersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (pageService_1_1) {
                pageService_1 = pageService_1_1;
            }],
        execute: function() {
            PageNumbersComponent = (function () {
                function PageNumbersComponent(_pageService) {
                    this._pageService = _pageService;
                    this.pageTitle = "Page Numbers";
                }
                PageNumbersComponent.prototype.ngOnInit = function () {
                    this.page = this._pageService.getPage();
                    //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
                };
                PageNumbersComponent = __decorate([
                    core_1.Component({
                        selector: "lb-page",
                        templateUrl: "app/logbook/components/pageNumbers/pageNumbers.component.html",
                        styleUrls: ["app/logbook/components/pageNumbers/pageNumbers.component.css", "app/logbook/shared/shared.css"],
                        providers: [pageService_1.PageService]
                    }), 
                    __metadata('design:paramtypes', [pageService_1.PageService])
                ], PageNumbersComponent);
                return PageNumbersComponent;
            }());
            exports_1("PageNumbersComponent", PageNumbersComponent);
        }
    }
});
//# sourceMappingURL=pageNumbers.component.js.map