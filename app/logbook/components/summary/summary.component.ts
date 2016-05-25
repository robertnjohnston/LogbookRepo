import { Component, OnInit } from 'angular2/core';
import { ISummary } from '../../interface/summary';
import { SummaryService } from '../../services/summaryService';
import { TimeFilter } from '../../pipes/time-filter.pipe';


@Component({
    selector: "lb-summary",
    templateUrl: "app/logbook/components/summary/summary.component.html",
    styleUrls: [ "app/logbook/components/summary/summary.component.css", "app/logbook/shared/shared.css" ], 
    providers: [SummaryService],
    pipes: [ TimeFilter ]

})

export class SummaryComponent implements OnInit {
    pageTitle: string = "Logbook Summary";
    summary: ISummary;
    errorMessage: string;
      
    constructor(private _summaryService: SummaryService ) { }      
    
    ngOnInit() {
        this.summary = this._summaryService.getSummary();
        //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
    }
}