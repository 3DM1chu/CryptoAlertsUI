import { Component, inject } from '@angular/core';
import { EndpointManagerService } from '../shared/endpoint-manager.service';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.css'],
})
export class EndpointComponent {
  endpointService = inject(EndpointManagerService);
  ngOnInit(): void {
    this.endpointService.refreshList();
  }
}
