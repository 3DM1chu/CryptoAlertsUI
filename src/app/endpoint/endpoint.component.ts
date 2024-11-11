import { Component } from '@angular/core';
import { EndpointManagerService } from '../shared/endpoint-manager.service';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css'],
})
export class EndpointComponent {
  constructor(public service: EndpointManagerService) {}
  ngOnInit(): void {
    this.service.refreshList();
  }
}
