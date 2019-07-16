import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyDemoService } from "./services/my-demo.services";
import { DataService } from "./services/data.services";
import { HttpClientModule } from '@angular/common/http';
import { DialogOverviewExampleDialog } from './components/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [MyDemoService, DataService],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule { }
