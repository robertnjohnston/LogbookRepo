System.register(['angular2/core', '../../services/flightService', '../../pipes/time-filter.pipe'], function(exports_1, context_1) {
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
    var core_1, flightService_1, time_filter_pipe_1;
    var LastFlightComponent;
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
            }],
        execute: function() {
            LastFlightComponent = (function () {
                function LastFlightComponent(_flightService) {
                    this._flightService = _flightService;
                    this.pageTitle = "Last Flight Entered";
                }
                LastFlightComponent.prototype.ngOnInit = function () {
                    this.lastFlight = this._flightService.getLastFlight();
                    //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
                };
                LastFlightComponent = __decorate([
                    core_1.Component({
                        selector: "lb-lastflight",
                        templateUrl: "app/logbook/components/lastflight/lastflight.component.html",
                        styleUrls: ["app/logbook/components/lastflight/lastflight.component.css", "app/logbook/shared/shared.css"],
                        providers: [flightService_1.FlightService],
                        pipes: [time_filter_pipe_1.TimeFilter]
                    }), 
                    __metadata('design:paramtypes', [flightService_1.FlightService])
                ], LastFlightComponent);
                return LastFlightComponent;
            }());
            exports_1("LastFlightComponent", LastFlightComponent);
        }
    }
});
//# sourceMappingURL=lastFlight.component.js.map