import { Fakewebseries } from './../_models/fakewebseries';
import { WebseriesService } from './../_service/webseries.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-free-webseries',
  templateUrl: './free-webseries.component.html',
  styleUrls: ['./free-webseries.component.css']
})
export class FreeWebseriesComponent implements OnInit {

  freeSeriesLists: Fakewebseries[] = [];
  constructor(private freeseries: WebseriesService) { }

  ngOnInit(): void {
    this.freeseries.getAllFreeSeries()
      .subscribe(
        res => this.freeSeriesLists = res,
        err => console.log(err)
    );
  }

}
