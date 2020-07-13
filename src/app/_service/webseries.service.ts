import { environment } from './../../environments/environment';
import { Fakewebseries } from './../_models/fakewebseries';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebseriesService {
  constructor(private http: HttpClient) { }
  getAllFreeSeries() {
    return this.http.get<Fakewebseries[]>(`${environment.apiUrl}/api/fseries`);
  }
}
