import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { TokenComponent } from './endpoint/token/token.component';
import { PriceRecordComponent } from './endpoint/token/price-record/price-record.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EndpointComponent,
    TokenComponent,
    PriceRecordComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
