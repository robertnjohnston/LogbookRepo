import { Component, OnInit } from 'angular2/core';
import { IPage } from '../../interface/page';
import { PageService } from '../../services/pageService';


@Component({
    selector: "lb-page",
    templateUrl: "app/logbook/components/pageNumbers/pageNumbers.component.html",
    styleUrls: [ "app/logbook/components/pageNumbers/pageNumbers.component.css", "app/logbook/shared/shared.css" ], 
    providers: [PageService]
})

export class PageNumbersComponent implements OnInit {
    pageTitle: string = "Page Numbers";
    page: IPage;
    errorMessage: string;
      
    constructor(private _pageService: PageService ) { }      
    
    ngOnInit() {
        this.page = this._pageService.getPage();
        //this._summaryService.getSummary().subscribe(summary => this.summary = summary, error => this.errorMessage = <any>error);
    }
}