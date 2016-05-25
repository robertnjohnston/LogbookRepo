import { Injectable } from "angular2/core";
import { IFlight } from "../interface/flight";

//import { Http, Response } from "angular2/http";
//import { Observable } from "rxjs/Observable";

@Injectable()
export class FlightService {
    private __flightUrl = "api/summary.json";

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
    
    getLastFlight() : IFlight {
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
    }
    
     getFlight(flight: number) : IFlight {
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
     }
     
     getFlights(page: number) : IFlight[] {
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
     }
}