System.register(['angular2/core', '../../services/summaryService', '../../pipes/time-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, summaryService_1, time_filter_pipe_1;
    var PageSummaryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (summaryService_1_1) {
                summaryService_1 = summaryService_1_1;
            },
            function (time_filter_pipe_1_1) {
                time_filter_pipe_1 = time_filter_pipe_1_1;
            }],
        execute: function() {
            PageSummaryComponent = (function () {
                function PageSummaryComponent(_summaryService) {
                    this._summaryService = _summaryService;
                }
                PageSummaryComponent.prototype.ngOnInit = function () {
                    this.pageSummary = this._summaryService.getPageSummary(170);
                    //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
                };
                PageSummaryComponent = __decorate([
                    core_1.Component({
                        selector: "lb-pagesummary",
                        templateUrl: "app/logbook/components/pageSummary/pageSummary.component.html",
                        styleUrls: ["app/logbook/components/pageSummary/pageSummary.component.css", "app/logbook/shared/shared.css"],
                        providers: [summaryService_1.SummaryService],
                        pipes: [time_filter_pipe_1.TimeFilter]
                    }), 
                    __metadata('design:paramtypes', [summaryService_1.SummaryService])
                ], PageSummaryComponent);
                return PageSummaryComponent;
            }());
            exports_1("PageSummaryComponent", PageSummaryComponent);
        }
    }
});
//# sourceMappingURL=pageSummary.component.js.map