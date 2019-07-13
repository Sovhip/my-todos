import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackendModule } from './backend/backend.module';
import { FrontendModule } from './frontend/frontend.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BackendModule,
    FrontendModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
