import { Injectable } from "angular2/core";
import { ISummary } from "../interface/summary";

//import { Http, Response } from "angular2/http";
//import { Observable } from "rxjs/Observable";

@Injectable()
export class SummaryService {
    private _summaryUrl = "api/summary.json";

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
    
    getSummary() : ISummary {
        return {
            "totalLaunch": 2301,
            "totalTime": 71679,
            "p1mLaunch": 1601,
            "p1mTime": 32027,
            "p1sLaunch": 431,
            "p1sTime": 34831,    
            "p2Launch": 269,
            "p2Time": 4821,
            "page": 0    
        };
    }
    getPageSummary(page: number) : ISummary {
        return {
            "totalLaunch": 2301,
            "totalTime": 71679,
            "p1mLaunch": 1601,
            "p1mTime": 32027,
            "p1sLaunch": 431,
            "p1sTime": 34831,    
            "p2Launch": 269,
            "p2Time": 4821,
            "page": 170    
        };
    }
}