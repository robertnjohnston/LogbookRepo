import { Component, OnInit } from 'angular2/core'
import { FlightService } from '../../services/flightService'
import { IFlight } from '../../interface/flight'
import { TimeFilter } from '../../pipes/time-filter.pipe';


@Component({
    selector: "lb-lastflight",
    templateUrl: "app/logbook/components/lastflight/lastflight.component.html",
    styleUrls: [  "app/logbook/components/lastflight/lastflight.component.css", "app/logbook/shared/shared.css" ],
    providers: [ FlightService ],
    pipes: [ TimeFilter ]
})
export class LastFlightComponent implements OnInit {
    pageTitle: string = "Last Flight Entered";
    lastFlight: IFlight; 
    errorMessage: string;
      
    constructor(private _flightService: FlightService ) { }     
    
    ngOnInit() {
        this.lastFlight = this._flightService.getLastFlight();
        //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
    }
}