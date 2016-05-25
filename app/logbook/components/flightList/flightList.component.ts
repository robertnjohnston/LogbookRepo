import { Component, OnInit } from 'angular2/core'
import { FlightService } from '../../services/flightService'
import { IFlight } from '../../interface/flight'
import { TimeFilter } from '../../pipes/time-filter.pipe';
import { PageSummaryComponent } from "../pageSummary/pageSummary.component";

@Component({
    selector: "lb-flightlist",
    templateUrl: "app/logbook/components/flightList/flightList.component.html",
    styleUrls: [  "app/logbook/components/flightList/flightList.component.css", "app/logbook/shared/shared.css" ],
    providers: [ FlightService ],
    pipes: [ TimeFilter ],
    directives: [PageSummaryComponent]
})
export class FlightListComponent implements OnInit {
    pageTitle: string = "Flights";
    flights: IFlight[]; 
    errorMessage: string;
      
    constructor(private _flightService: FlightService ) { }     
    
    ngOnInit() {
        this.flights = this._flightService.getFlights(1);
        //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
    }
    
    selectRow(flight: number) {
        alert("Modify Flight: " + flight);
    }
}