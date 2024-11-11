import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from './endpoint.model';

@Injectable({
  providedIn: 'root',
})
export class EndpointManagerService {
  url: string = environment.apiBaseUrl;
  list: Endpoint[] = [];
  constructor(private http: HttpClient) {}

  refreshList() {
    this.http.get(this.url + '/endpoints').subscribe((data) => {
      this.list = data as Endpoint[];
    });
  }
}
