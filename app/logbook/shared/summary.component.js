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
    var SummaryComponent;
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
            SummaryComponent = (function () {
                function SummaryComponent(_summaryService) {
                    this._summaryService = _summaryService;
                    this.pageTitle = "Logbook Summary";
                }
                SummaryComponent.prototype.ngOnInit = function () {
                    this.summary = this._summaryService.getSummary();
                    //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
                };
                SummaryComponent = __decorate([
                    core_1.Component({
                        selector: "lb-summary",
                        templateUrl: "app/logbook/components/summary/summary.component.html",
                        styleUrls: ["app/logbook/components/summary/summary.component.css"],
                        providers: [summaryService_1.SummaryService],
                        pipes: [time_filter_pipe_1.TimeFilter]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof summaryService_1.SummaryService !== 'undefined' && summaryService_1.SummaryService) === 'function' && _a) || Object])
                ], SummaryComponent);
                return SummaryComponent;
                var _a;
            }());
            exports_1("SummaryComponent", SummaryComponent);
        }
    }
});
//# sourceMappingURL=summary.component.js.map