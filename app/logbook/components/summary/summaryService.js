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
    var SummaryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            //import { Http, Response } from "angular2/http";
            //import { Observable } from "rxjs/Observable";
            SummaryService = (function () {
                function SummaryService() {
                    this._summaryUrl = "api/summary.json";
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
                SummaryService.prototype.getSummary = function () {
                    return {
                        "totalLaunch": 2301,
                        "totalTime": 71679,
                        "p1mLaunch": 1601,
                        "p1mTime": 32027,
                        "p1sLaunch": 431,
                        "p1sTime": 34831,
                        "p2Launch": 269,
                        "p2Time": 4821
                    };
                };
                SummaryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], SummaryService);
                return SummaryService;
            }());
            exports_1("SummaryService", SummaryService);
        }
    }
});
//# sourceMappingURL=summaryService.js.map