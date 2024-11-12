import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EndpointComponent } from './endpoint/endpoint.component';
import { AssetComponent } from './endpoint/asset/asset.component';
import { PriceRecordComponent } from './endpoint/asset/price-record/price-record.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EndpointComponent,
    AssetComponent,
    PriceRecordComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
