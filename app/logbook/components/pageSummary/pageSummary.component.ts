import { Component, OnInit } from 'angular2/core';
import { ISummary } from '../../interface/summary';
import { SummaryService } from '../../services/summaryService';
import { TimeFilter } from '../../pipes/time-filter.pipe';


@Component({
    selector: "lb-pagesummary",
    templateUrl: "app/logbook/components/pageSummary/pageSummary.component.html",
    styleUrls: [ "app/logbook/components/pageSummary/pageSummary.component.css", "app/logbook/shared/shared.css" ], 
    providers: [SummaryService],
    pipes: [ TimeFilter ]

})

export class PageSummaryComponent implements OnInit {
    pageSummary: ISummary;
    errorMessage: string;
      
    constructor(private _summaryService: SummaryService ) { }      
    
    ngOnInit() {
        this.pageSummary = this._summaryService.getPageSummary(170);
        //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
    }
}