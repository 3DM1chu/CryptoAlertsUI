import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from './models/endpoint.model';

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

  deleteEndpoint(id: number) {
    this.http.delete(this.url + '/endpoints/' + id).subscribe(() => {
      this.refreshList();
    });
  }

  deleteEndpointAsset(id: number, asset_symbol: string) {
    this.http
      .delete(this.url + '/endpoints/' + id + '/asset/' + asset_symbol)
      .subscribe(() => {
        this.refreshList();
      });
  }
}
