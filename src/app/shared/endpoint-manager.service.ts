import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endpoint } from './models/endpoint.model';
import { Token } from './models/token.model';

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

  deleteEndpointToken(id: number, token_symbol: string) {
    this.http
      .delete(this.url + '/endpoints/' + id + '/token/' + token_symbol)
      .subscribe(() => {
        this.refreshList();
      });
  }
}
