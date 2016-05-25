import { Component } from 'angular2/core';
import { SummaryComponent } from "./logbook/components/summary/summary.component";
import { LastFlightComponent } from "./logbook/components/lastFlight/lastFlight.component";
import { FlightListComponent } from "./logbook/components/flightList/flightList.component";
import { PageNumbersComponent } from "./logbook/components/pageNumbers/pageNumbers.component";
import 'rxjs/Rx';
import { HTTP_PROVIDERS } from "angular2/http";
import { ROUTER_PROVIDERS } from "angular2/router";
@Component({
    selector: "pm-app",
    templateUrl: "app/app.component.html",
    directives: [SummaryComponent, LastFlightComponent, FlightListComponent, PageNumbersComponent],
    providers: [ HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
export class AppComponent{
    pageTitle: string = 'Logbook';
}
