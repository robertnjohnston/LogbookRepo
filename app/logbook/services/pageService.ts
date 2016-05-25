import { Injectable } from "angular2/core";
import { IPage } from "../interface/page";

//import { Http, Response } from "angular2/http";
//import { Observable } from "rxjs/Observable";

@Injectable()
export class PageService {
    private _pageUrl = "api/summary.json";

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
    
    getPage() : IPage {
        return {
            "startFlight": 2297,
            "endFlight": 2301,
            "number": 170,
            "lastFlight": 2301
        };
    }
}