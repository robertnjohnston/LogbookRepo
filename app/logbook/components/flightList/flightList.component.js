System.register(['angular2/core', '../../services/flightService', '../../pipes/time-filter.pipe', "../pageSummary/pageSummary.component"], function(exports_1, context_1) {
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
    var core_1, flightService_1, time_filter_pipe_1, pageSummary_component_1;
    var FlightListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flightService_1_1) {
                flightService_1 = flightService_1_1;
            },
            function (time_filter_pipe_1_1) {
                time_filter_pipe_1 = time_filter_pipe_1_1;
            },
            function (pageSummary_component_1_1) {
                pageSummary_component_1 = pageSummary_component_1_1;
            }],
        execute: function() {
            FlightListComponent = (function () {
                function FlightListComponent(_flightService) {
                    this._flightService = _flightService;
                    this.pageTitle = "Flights";
                }
                FlightListComponent.prototype.ngOnInit = function () {
                    this.flights = this._flightService.getFlights(1);
                    //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
                };
                FlightListComponent.prototype.selectRow = function (flight) {
                    alert("Modify Flight: " + flight);
                };
                FlightListComponent = __decorate([
                    core_1.Component({
                        selector: "lb-flightlist",
                        templateUrl: "app/logbook/components/flightList/flightList.component.html",
                        styleUrls: ["app/logbook/components/flightList/flightList.component.css", "app/logbook/shared/shared.css"],
                        providers: [flightService_1.FlightService],
                        pipes: [time_filter_pipe_1.TimeFilter],
                        directives: [pageSummary_component_1.PageSummaryComponent]
                    }), 
                    __metadata('design:paramtypes', [flightService_1.FlightService])
                ], FlightListComponent);
                return FlightListComponent;
            }());
            exports_1("FlightListComponent", FlightListComponent);
        }
    }
});
//# sourceMappingURL=flightList.component.js.map