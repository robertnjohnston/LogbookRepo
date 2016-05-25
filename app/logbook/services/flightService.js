System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var FlightService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { Http, Response } from "angular2/http";
            //import { Observable } from "rxjs/Observable";
            FlightService = (function () {
                function FlightService() {
                    this.__flightUrl = "api/summary.json";
                }
                // constructor(private  _http: Http) { }
                /*
                getSummary(): Observable<ISummary> {
                    return this._http.get(this._summaryUrl)
                            .map((response: Response) => <ISummary>response.json())
                            .do(data => console.log("All: " + JSON.stringify(data)))
                            .catch(this.handleError);
                }
                
                private handleError(error:Response) {
                    console.error(error);
                    return Observable.throw(error.json().error || "Server Error")
                }
                */
                FlightService.prototype.getLastFlight = function () {
                    return {
                        number: 2301,
                        date: "01/11/2015",
                        aircraft: "K21",
                        registration: "ESU",
                        airfield: "Hinton",
                        crewPosition: "P1 Multi",
                        duration: 15,
                        notes: "",
                        traceFile: "",
                        declared: "No",
                        distance: 0
                    };
                };
                FlightService.prototype.getFlight = function (flight) {
                    return {
                        number: 2301,
                        date: "01/11/2015",
                        aircraft: "K21",
                        registration: "ESU",
                        airfield: "Hinton",
                        crewPosition: "P1 Multi",
                        duration: 15,
                        notes: "",
                        traceFile: "",
                        declared: "No",
                        distance: 0
                    };
                };
                FlightService.prototype.getFlights = function (page) {
                    return [
                        {
                            number: 2301,
                            date: "01/11/2015",
                            aircraft: "K21",
                            registration: "ESU",
                            airfield: "Hinton",
                            crewPosition: "P1 Multi",
                            duration: 15,
                            notes: "",
                            traceFile: "",
                            declared: "No",
                            distance: 0
                        },
                        {
                            number: 2300,
                            date: "01/11/2015",
                            aircraft: "K21",
                            registration: "ESU",
                            airfield: "Hinton",
                            crewPosition: "P1 Multi",
                            duration: 12,
                            notes: "",
                            traceFile: "",
                            declared: "No",
                            distance: 0
                        },
                        {
                            number: 2299,
                            date: "01/11/2015",
                            aircraft: "K13",
                            registration: "HXV",
                            airfield: "Hinton",
                            crewPosition: "P1 Multi",
                            duration: 22,
                            notes: "",
                            traceFile: "",
                            declared: "No",
                            distance: 0
                        },
                        {
                            number: 2298,
                            date: "31/10/2015",
                            aircraft: "LS4",
                            registration: "EMF",
                            airfield: "Hinton",
                            crewPosition: "P1",
                            duration: 176,
                            notes: "",
                            traceFile: "",
                            declared: "yes",
                            distance: 290
                        },
                        {
                            number: 2297,
                            date: "24/10/2015",
                            aircraft: "K21",
                            registration: "ESU",
                            airfield: "Hinton",
                            crewPosition: "P1 Multi",
                            duration: 76,
                            notes: "",
                            traceFile: "",
                            declared: "No",
                            distance: 0
                        },
                    ];
                };
                FlightService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], FlightService);
                return FlightService;
            }());
            exports_1("FlightService", FlightService);
        }
    }
});
//# sourceMappingURL=flightService.js.map